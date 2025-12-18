import {
  PaginationParams,
  SortParams,
  FilterParams,
} from '../utils/pagination';

export interface IBaseService<T, CreateDTO, UpdateDTO> {
  findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: T[]; total: number }>;

  findById(id: number): Promise<T | null>;

  create(data: CreateDTO): Promise<T>;

  update(id: number, data: UpdateDTO): Promise<T>;

  delete(id: number): Promise<void>;
}

export abstract class BaseService<T, CreateDTO, UpdateDTO>
  implements IBaseService<T, CreateDTO, UpdateDTO>
{
  abstract findAll(
    pagination: PaginationParams,
    sort: SortParams,
    filter: FilterParams
  ): Promise<{ data: T[]; total: number }>;

  abstract findById(id: number): Promise<T | null>;

  abstract create(data: CreateDTO): Promise<T>;

  abstract update(id: number, data: UpdateDTO): Promise<T>;

  abstract delete(id: number): Promise<void>;
}
