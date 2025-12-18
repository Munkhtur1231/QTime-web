export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode: string;

  constructor(message: string, statusCode = 400, errorCode = "BAD_REQUEST") {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);

    // Set prototype explicitly
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
