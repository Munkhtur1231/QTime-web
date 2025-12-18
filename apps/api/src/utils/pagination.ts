import { Request } from 'express';

export interface PaginationParams {
  skip: number;
  take: number;
  page: number;
  limit: number;
}

export interface SortParams {
  orderBy: Record<string, 'asc' | 'desc'>;
}

export interface FilterParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  where: Record<string, any>;
}

export class QueryBuilder {
  static getPagination(req: Request): PaginationParams {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit as string) || 10)
    );
    const skip = (page - 1) * limit;

    return { skip, take: limit, page, limit };
  }

  static getSort(req: Request): SortParams {
    const sortBy = (req.query.sortBy as string) || 'createdAt';
    const sortOrder =
      (req.query.sortOrder as string)?.toLowerCase() === 'asc' ? 'asc' : 'desc';

    return {
      orderBy: {
        [sortBy]: sortOrder,
      },
    };
  }

  static getFilters(req: Request, allowedFields: string[] = []): FilterParams {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: Record<string, any> = {};

    allowedFields.forEach((field) => {
      const value = req.query[field];
      if (value !== undefined && value !== '') {
        // Handle different filter types
        if (typeof value === 'string') {
          // Check for numeric values
          if (!isNaN(Number(value))) {
            where[field] = Number(value);
          }
          // Check for boolean
          else if (value === 'true' || value === 'false') {
            where[field] = value === 'true';
          }
          // Check for partial match (contains)
          else if (value.startsWith('*') && value.endsWith('*')) {
            where[field] = {
              contains: value.slice(1, -1),
            };
          }
          // Check for starts with
          else if (value.endsWith('*')) {
            where[field] = {
              startsWith: value.slice(0, -1),
            };
          }
          // Check for ends with
          else if (value.startsWith('*')) {
            where[field] = { endsWith: value.slice(1) };
          }
          // Exact match
          else {
            where[field] = value;
          }
        } else {
          where[field] = value;
        }
      }
    });

    return { where };
  }

  static getSearch(req: Request, searchFields: string[] = []): FilterParams {
    const searchTerm = req.query.search as string;

    if (!searchTerm || searchFields.length === 0) {
      return { where: {} };
    }

    return {
      where: {
        OR: searchFields.map((field) => ({
          [field]: {
            contains: searchTerm,
          },
        })),
      },
    };
  }
}
