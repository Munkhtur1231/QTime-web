import { Router } from 'express';
import { BaseController } from '../controllers/base.controller';
import { ZodType } from 'zod';
import { validate } from '../middlewares/validate';

export abstract class BaseRoute<T, CreateDTO, UpdateDTO> {
  public router: Router;

  constructor(
    protected controller: BaseController<T, CreateDTO, UpdateDTO>,
    protected createSchema?: ZodType,
    protected updateSchema?: ZodType
  ) {
    this.router = Router();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.get('/', this.controller.getAll);
    this.router.get('/:id', this.controller.getById);

    if (this.createSchema) {
      this.router.post(
        '/',
        validate(this.createSchema),
        this.controller.create
      );
    } else {
      this.router.post('/', this.controller.create);
    }

    if (this.updateSchema) {
      this.router.put(
        '/:id',
        validate(this.updateSchema),
        this.controller.update
      );
      this.router.patch(
        '/:id',
        validate(this.updateSchema),
        this.controller.update
      );
    } else {
      this.router.put('/:id', this.controller.update);
      this.router.patch('/:id', this.controller.update);
    }

    this.router.delete('/:id', this.controller.delete);
  }
}
