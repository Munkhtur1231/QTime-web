import { Request } from 'express';
import { BusinessAddress } from '@businessdirectory/database';
import { BaseController } from './base.controller';
import { BusinessAddressService } from '../services/business-address.service';
import {
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO,
} from '../validation/business-address.schema';
import { QueryBuilder } from '../utils/pagination';

export class BusinessAddressController extends BaseController<
  BusinessAddress,
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO
> {
  constructor() {
    super(new BusinessAddressService(), 'Business Address');
  }

  protected override getFilterParams(req: Request) {
    const filters = QueryBuilder.getFilters(req, ['businessId', 'address']);
    const search = QueryBuilder.getSearch(req, ['address']);

    return {
      where: {
        ...filters.where,
        ...search.where,
      },
    };
  }
}
