import { BaseRoute } from './base.route';
import { User } from '@businessdirectory/database';
import { UserController } from '../controllers/user.controller';
import {
  CreateUserDTO,
  UpdateUserDTO,
  createUserSchema,
  updateUserSchema,
  loginSchema,
  oauthLoginSchema,
} from '../validation/user.schema';
import { validate } from '../middlewares/validate';
import { protect, authorize } from '../utils/protect';

class UserRoute extends BaseRoute<User, CreateUserDTO, UpdateUserDTO> {
  constructor() {
    const controller = new UserController();
    super(controller, createUserSchema, updateUserSchema);
    this.addAuthRoutes(controller);
  }

  protected override initializeRoutes(): void {
    // Public routes
    this.router.post(
      '/register',
      validate(createUserSchema),
      this.controller.create
    );

    // Protected routes - require authentication
    this.router.get(
      '/',
      protect,
      authorize(['ADMIN', 'SUPERADMIN']),
      this.controller.getAll
    );
    this.router.get('/:id', protect, this.controller.getById);
    this.router.put(
      '/:id',
      protect,
      validate(updateUserSchema),
      this.controller.update
    );
    this.router.patch(
      '/:id',
      protect,
      validate(updateUserSchema),
      this.controller.update
    );
    this.router.delete(
      '/:id',
      protect,
      authorize(['SUPERADMIN']),
      this.controller.delete
    );
  }

  private addAuthRoutes(controller: UserController): void {
    this.router.post('/login', validate(loginSchema), controller.login);
    this.router.post(
      '/oauth-login',
      validate(oauthLoginSchema),
      controller.oauthLogin
    );
  }
}

export default new UserRoute().router;
