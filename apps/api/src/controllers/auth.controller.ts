import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { OAuthLoginDTO } from '../validation/user.schema';
import { catchAsync } from '../utils/catchAsync';

/**
 * GitHub OAuth profile type
 */
interface GitHubProfile {
  id: string;
  username?: string;
  displayName?: string;
  name?: string;
  email?: string;
  emails?: Array<{ value: string; verified?: boolean }>;
  photos?: Array<{ value: string }>;
}

export class AuthController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  /**
   * Initiate GitHub OAuth
   * This will be handled by Passport middleware
   */
  githubAuth = catchAsync(async (_req: Request, _res: Response) => {
    // Passport middleware handles the redirect to GitHub
    // This method is called by the route handler
  });

  /**
   * Handle GitHub OAuth callback
   * Process OAuth response, create/link user, generate JWT, redirect to Next.js
   */
  githubCallback = catchAsync(async (req: Request, res: Response) => {
    // Extract GitHub profile from Passport
    // passport-github2 provides profile with: id, username, displayName, emails, photos
    const profile = req.user as GitHubProfile | undefined;

    // Parse callbackUrl from state
    let callbackUrl = '/';
    try {
      const state = req.query.state as string;
      if (state) {
        const decoded = JSON.parse(Buffer.from(state, 'base64').toString());
        callbackUrl = decoded.callbackUrl || '/';
      }
    } catch {
      // Ignore parse errors, use default callbackUrl
    }

    if (!profile) {
      return res.redirect(
        `${
          process.env.FRONTEND_URL || 'http://localhost:3000'
        }/signin?error=oauth_failed`
      );
    }

    // Get email from profile - GitHub profile structure
    // emails is an array of { value: string, verified?: boolean }
    const email = profile.emails?.[0]?.value || profile.email;
    if (!email) {
      return res.redirect(
        `${
          process.env.FRONTEND_URL || 'http://localhost:3000'
        }/signin?error=no_email`
      );
    }

    // Get name from profile
    const name = profile.displayName || profile.username || profile.name;

    // Use existing oauthLogin service to create/link user and get JWT
    const oauthData: OAuthLoginDTO = {
      email,
      name,
    };

    const { token } = await this.userService.oauthLogin(oauthData);

    // Redirect to Next.js callback route with token and callbackUrl
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    res.redirect(
      `${frontendUrl}/api/auth/callback?token=${token}&callbackUrl=${encodeURIComponent(
        callbackUrl
      )}`
    );
  });
}
