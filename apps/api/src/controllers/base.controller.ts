import { Request, Response } from 'express';
import { IBaseService } from '../services/base.service';
import { ResponseHandler } from '../utils/response';
import { QueryBuilder } from '../utils/pagination';
import { catchAsync } from '../utils/catchAsync';
import { AppError } from '../utils/AppError';

export abstract class BaseController<T, CreateDTO, UpdateDTO> {
  constructor(
    protected service: IBaseService<T, CreateDTO, UpdateDTO>,
    protected resourceName: string
  ) {}

  getAll = catchAsync(async (req: Request, res: Response) => {
    const pagination = QueryBuilder.getPagination(req);
    const sort = QueryBuilder.getSort(req);
    const filter = this.getFilterParams(req);

    const { data, total } = await this.service.findAll(
      pagination,
      sort,
      filter
    );

    return ResponseHandler.paginated(
      res,
      data,
      pagination.page,
      pagination.limit,
      total,
      `${this.resourceName} retrieved successfully`
    );
  });

  getById = catchAsync(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const item = await this.service.findById(id);

    if (!item) {
      throw new AppError(`${this.resourceName} not found`, 404, 'NOT_FOUND');
    }

    return ResponseHandler.success(
      res,
      item,
      `${this.resourceName} retrieved successfully`
    );
  });

  create = catchAsync(async (req: Request, res: Response) => {
    const item = await this.service.create(req.body as CreateDTO);

    return ResponseHandler.created(
      res,
      item,
      `${this.resourceName} created successfully`
    );
  });

  update = catchAsync(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const item = await this.service.update(id, req.body as UpdateDTO);

    return ResponseHandler.success(
      res,
      item,
      `${this.resourceName} updated successfully`
    );
  });

  delete = catchAsync(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.service.delete(id);

    return ResponseHandler.noContent(res);
  });

  // Override this method in child controllers to provide custom filter fields
  protected getFilterParams(req: Request) {
    return QueryBuilder.getFilters(req, []);
  }
}
