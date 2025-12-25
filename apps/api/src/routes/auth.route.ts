import { Router } from 'express';
import passport from 'passport';
import { Strategy as GitHubStrategy, Profile } from 'passport-github2';
import axios from 'axios';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// Passport callback types
type VerifyCallback = (error: Error | null, user?: Profile) => void;

// Configure GitHub OAuth Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/github/callback`,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      try {
        if (!profile.emails?.length) {
          const { data } = await axios.get<
            Array<{ email: string; primary: boolean; verified: boolean }>
          >('https://api.github.com/user/emails', {
            headers: {
              Authorization: `token ${accessToken}`,
              Accept: 'application/vnd.github+json',
              'User-Agent': 'businessdirectory-app',
            },
          });

          const primaryEmail =
            data.find((e) => e.primary && e.verified) ||
            data.find((e) => e.verified) ||
            data[0];

          if (primaryEmail) {
            profile.emails = [
              {
                value: primaryEmail.email,
              },
            ];
          }
        }

        return done(null, profile);
      } catch (error) {
        return done(error as Error);
      }
    }
  )
);

// Serialize user for session (not using sessions, but required by Passport)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id as unknown as Express.User);
});

/**
 * GET /api/v1/auth/github
 * Initiate GitHub OAuth flow
 */
router.get('/github', (req, res, next) => {
  // Store callbackUrl in session/state for later use
  const callbackUrl = (req.query.callbackUrl as string) || '/';
  passport.authenticate('github', {
    scope: ['user:email'],
    session: false,
    state: Buffer.from(JSON.stringify({ callbackUrl })).toString('base64'),
  })(req, res, next);
});

/**
 * GET /api/v1/auth/github/callback
 * Handle GitHub OAuth callback
 */
router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/signin?error=oauth_failed',
    session: false,
  }),
  authController.githubCallback
);

export default router;
