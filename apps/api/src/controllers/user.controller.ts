import { Request, Response } from 'express';
import { User } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { UserService } from '../services/user.service';
import {
  CreateUserDTO,
  UpdateUserDTO,
  LoginDTO,
  OAuthLoginDTO,
} from '../validation/user.schema';
import { QueryBuilder } from '../utils/pagination';
import { catchAsync } from '../utils/catchAsync';
import { ResponseHandler } from '../utils/response';

export class UserController extends BaseController<
  User,
  CreateUserDTO,
  UpdateUserDTO
> {
  private userService: UserService;

  constructor() {
    const service = new UserService();
    super(service, 'User');
    this.userService = service;
  }

  protected override getFilterParams(req: Request) {
    const filters = QueryBuilder.getFilters(req, [
      'email',
      'role',
      'firstName',
      'lastName',
    ]);
    const search = QueryBuilder.getSearch(req, [
      'email',
      'firstName',
      'lastName',
    ]);

    return {
      where: {
        ...filters.where,
        ...search.where,
      },
    };
  }

  login = catchAsync(async (req: Request, res: Response) => {
    const { user, token } = await this.userService.login(req.body as LoginDTO);

    return ResponseHandler.success(res, { user, token }, 'Login successful');
  });

  oauthLogin = catchAsync(async (req: Request, res: Response) => {
    const { user, token } = await this.userService.oauthLogin(
      req.body as OAuthLoginDTO
    );

    return ResponseHandler.success(
      res,
      { user, token },
      'OAuth login successful'
    );
  });
}
