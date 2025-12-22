import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

// JSON
//------------------------------------------------------

export type NullableJsonInput = Prisma.JsonValue | null | 'JsonNull' | 'DbNull' | Prisma.NullTypes.DbNull | Prisma.NullTypes.JsonNull;

export const transformJsonNull = (v?: NullableJsonInput) => {
  if (!v || v === 'DbNull') return Prisma.NullTypes.DbNull;
  if (v === 'JsonNull') return Prisma.NullTypes.JsonNull;
  return v;
};

export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.string(), z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);

export type JsonValueType = z.infer<typeof JsonValueSchema>;

export const NullableJsonValue = z
  .union([JsonValueSchema, z.literal('DbNull'), z.literal('JsonNull')])
  .nullable()
  .transform((v) => transformJsonNull(v));

export type NullableJsonValueType = z.infer<typeof NullableJsonValue>;

export const InputJsonValueSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.any() }),
    z.record(z.string(), z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
  ])
);

export type InputJsonValueType = z.infer<typeof InputJsonValueSchema>;


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','firstName','lastName','phone','hashedPassword','role','createdAt','updatedAt']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id','email','token','expires','createdAt','action']);

export const BusinessParentCategoryScalarFieldEnumSchema = z.enum(['id','name','description','icon','createdAt','updatedAt']);

export const BusinessCategoryScalarFieldEnumSchema = z.enum(['id','name','description','icon','createdAt','updatedAt','parentCategoryId']);

export const BusinessScalarFieldEnumSchema = z.enum(['id','name','email','photo','link','summary','richContent','isActive','isInsideMall','description','embedding','createdAt','updatedAt','categoryId']);

export const BusinessAddressScalarFieldEnumSchema = z.enum(['id','businessId','address','latitude','longitude','createdAt','updatedAt']);

export const BusinessAdminScalarFieldEnumSchema = z.enum(['id','businessId','userId','createdAt','updatedAt']);

export const ReviewsScalarFieldEnumSchema = z.enum(['id','businessId','userId','rating','comment','createdAt','updatedAt']);

export const RichReviewContentScalarFieldEnumSchema = z.enum(['id','content','createdAt','updatedAt','reviewId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullableJsonNullValueInputSchema = z.enum(['DbNull','JsonNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['email','firstName','lastName','phone','hashedPassword']);

export const VerificationTokenOrderByRelevanceFieldEnumSchema = z.enum(['email','token']);

export const BusinessParentCategoryOrderByRelevanceFieldEnumSchema = z.enum(['name','description','icon']);

export const BusinessCategoryOrderByRelevanceFieldEnumSchema = z.enum(['name','description','icon']);

export const JsonNullValueFilterSchema = z.enum(['DbNull','JsonNull','AnyNull',]).transform((value) => value === 'JsonNull' ? Prisma.JsonNull : value === 'DbNull' ? Prisma.DbNull : value === 'AnyNull' ? Prisma.AnyNull : value);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const BusinessOrderByRelevanceFieldEnumSchema = z.enum(['name','email','photo','link','summary','richContent','description']);

export const BusinessAddressOrderByRelevanceFieldEnumSchema = z.enum(['address']);

export const ReviewsOrderByRelevanceFieldEnumSchema = z.enum(['comment']);

export const RichReviewContentOrderByRelevanceFieldEnumSchema = z.enum(['content']);

export const UserRoleSchema = z.enum(['USER','ADMIN','SUPERADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export const VerificationTokenActionSchema = z.enum(['VERIFY','RESET']);

export type VerificationTokenActionType = `${z.infer<typeof VerificationTokenActionSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRoleSchema,
  id: z.number().int(),
  email: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  phone: z.string().nullable(),
  hashedPassword: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  action: VerificationTokenActionSchema,
  id: z.number().int(),
  email: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// BUSINESS PARENT CATEGORY SCHEMA
/////////////////////////////////////////

export const BusinessParentCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BusinessParentCategory = z.infer<typeof BusinessParentCategorySchema>

/////////////////////////////////////////
// BUSINESS CATEGORY SCHEMA
/////////////////////////////////////////

export const BusinessCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  parentCategoryId: z.number().int(),
})

export type BusinessCategory = z.infer<typeof BusinessCategorySchema>

/////////////////////////////////////////
// BUSINESS SCHEMA
/////////////////////////////////////////

export const BusinessSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  photo: z.string(),
  link: z.string().nullable(),
  summary: z.string(),
  richContent: z.string(),
  isActive: z.boolean(),
  isInsideMall: z.boolean(),
  description: z.string().nullable(),
  embedding: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  categoryId: z.number().int(),
})

export type Business = z.infer<typeof BusinessSchema>

/////////////////////////////////////////
// BUSINESS ADDRESS SCHEMA
/////////////////////////////////////////

export const BusinessAddressSchema = z.object({
  id: z.number().int(),
  businessId: z.number().int(),
  address: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BusinessAddress = z.infer<typeof BusinessAddressSchema>

/////////////////////////////////////////
// BUSINESS ADMIN SCHEMA
/////////////////////////////////////////

export const BusinessAdminSchema = z.object({
  id: z.number().int(),
  businessId: z.number().int(),
  userId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BusinessAdmin = z.infer<typeof BusinessAdminSchema>

/////////////////////////////////////////
// REVIEWS SCHEMA
/////////////////////////////////////////

export const ReviewsSchema = z.object({
  id: z.number().int(),
  businessId: z.number().int(),
  userId: z.number().int(),
  rating: z.number().int(),
  comment: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Reviews = z.infer<typeof ReviewsSchema>

/////////////////////////////////////////
// RICH REVIEW CONTENT SCHEMA
/////////////////////////////////////////

export const RichReviewContentSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  reviewId: z.number().int(),
})

export type RichReviewContent = z.infer<typeof RichReviewContentSchema>
