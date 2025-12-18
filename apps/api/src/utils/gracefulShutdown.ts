import { Server } from "http";
import { logger } from "./logger";

export const gracefulShutdown = (server: Server) => {
  // Handle process termination signals
  const signals = ["SIGTERM", "SIGINT", "SIGQUIT"];

  signals.forEach((signal) => {
    process.on(signal, () => {
      logger.info(`Received ${signal}. Starting graceful shutdown...`);

      // Close server and stop accepting new connections
      server.close(() => {
        logger.info("Server closed. No new connections accepted.");

        // Close database connections, cleanup resources, etc.
        // Example: await prisma.$disconnect();

        logger.info("Cleanup completed. Exiting process.");
        process.exit(0);
      });

      // Force close after 10 seconds
      setTimeout(() => {
        logger.error(
          "Could not close connections in time, forcefully shutting down"
        );
        process.exit(1);
      }, 10000);
    });
  });

  // Handle uncaught exceptions
  process.on("uncaughtException", (error) => {
    logger.error("Uncaught Exception:", error);
    gracefulShutdown(server);
  });

  // Handle unhandled promise rejections
  process.on("unhandledRejection", (reason, promise) => {
    logger.error("Unhandled Rejection at:", promise, "reason:", reason);
    gracefulShutdown(server);
  });
};
