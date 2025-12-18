import { BaseRoute } from './base.route';
import { BusinessAddress } from '@businessdirectory/database';
import { BusinessAddressController } from '../controllers/business-address.controller';
import {
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO,
  createBusinessAddressSchema,
  updateBusinessAddressSchema,
} from '../validation/business-address.schema';

class BusinessAddressRoute extends BaseRoute<
  BusinessAddress,
  CreateBusinessAddressDTO,
  UpdateBusinessAddressDTO
> {
  constructor() {
    super(
      new BusinessAddressController(),
      createBusinessAddressSchema,
      updateBusinessAddressSchema
    );
  }
}

export default new BusinessAddressRoute().router;
