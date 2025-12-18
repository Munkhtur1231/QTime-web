
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model BusinessCategory
 * 
 */
export type BusinessCategory = $Result.DefaultSelection<Prisma.$BusinessCategoryPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model BusinessAddress
 * 
 */
export type BusinessAddress = $Result.DefaultSelection<Prisma.$BusinessAddressPayload>
/**
 * Model BusinessAdmin
 * 
 */
export type BusinessAdmin = $Result.DefaultSelection<Prisma.$BusinessAdminPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model RichReviewContent
 * 
 */
export type RichReviewContent = $Result.DefaultSelection<Prisma.$RichReviewContentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationTokenAction: {
  VERIFY: 'VERIFY',
  RESET: 'RESET'
};

export type VerificationTokenAction = (typeof VerificationTokenAction)[keyof typeof VerificationTokenAction]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationTokenAction = $Enums.VerificationTokenAction

export const VerificationTokenAction: typeof $Enums.VerificationTokenAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessCategory`: Exposes CRUD operations for the **BusinessCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessCategories
    * const businessCategories = await prisma.businessCategory.findMany()
    * ```
    */
  get businessCategory(): Prisma.BusinessCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessAddress`: Exposes CRUD operations for the **BusinessAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessAddresses
    * const businessAddresses = await prisma.businessAddress.findMany()
    * ```
    */
  get businessAddress(): Prisma.BusinessAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessAdmin`: Exposes CRUD operations for the **BusinessAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessAdmins
    * const businessAdmins = await prisma.businessAdmin.findMany()
    * ```
    */
  get businessAdmin(): Prisma.BusinessAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.richReviewContent`: Exposes CRUD operations for the **RichReviewContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RichReviewContents
    * const richReviewContents = await prisma.richReviewContent.findMany()
    * ```
    */
  get richReviewContent(): Prisma.RichReviewContentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VerificationToken: 'VerificationToken',
    BusinessCategory: 'BusinessCategory',
    Business: 'Business',
    BusinessAddress: 'BusinessAddress',
    BusinessAdmin: 'BusinessAdmin',
    Reviews: 'Reviews',
    RichReviewContent: 'RichReviewContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "verificationToken" | "businessCategory" | "business" | "businessAddress" | "businessAdmin" | "reviews" | "richReviewContent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      BusinessCategory: {
        payload: Prisma.$BusinessCategoryPayload<ExtArgs>
        fields: Prisma.BusinessCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          findFirst: {
            args: Prisma.BusinessCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          findMany: {
            args: Prisma.BusinessCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>[]
          }
          create: {
            args: Prisma.BusinessCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          createMany: {
            args: Prisma.BusinessCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          update: {
            args: Prisma.BusinessCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BusinessCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessCategoryPayload>
          }
          aggregate: {
            args: Prisma.BusinessCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessCategory>
          }
          groupBy: {
            args: Prisma.BusinessCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCategoryCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      BusinessAddress: {
        payload: Prisma.$BusinessAddressPayload<ExtArgs>
        fields: Prisma.BusinessAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          findFirst: {
            args: Prisma.BusinessAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          findMany: {
            args: Prisma.BusinessAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>[]
          }
          create: {
            args: Prisma.BusinessAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          createMany: {
            args: Prisma.BusinessAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          update: {
            args: Prisma.BusinessAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          deleteMany: {
            args: Prisma.BusinessAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAddressPayload>
          }
          aggregate: {
            args: Prisma.BusinessAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessAddress>
          }
          groupBy: {
            args: Prisma.BusinessAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessAddressCountAggregateOutputType> | number
          }
        }
      }
      BusinessAdmin: {
        payload: Prisma.$BusinessAdminPayload<ExtArgs>
        fields: Prisma.BusinessAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          findFirst: {
            args: Prisma.BusinessAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          findMany: {
            args: Prisma.BusinessAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>[]
          }
          create: {
            args: Prisma.BusinessAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          createMany: {
            args: Prisma.BusinessAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BusinessAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          update: {
            args: Prisma.BusinessAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          deleteMany: {
            args: Prisma.BusinessAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessAdminPayload>
          }
          aggregate: {
            args: Prisma.BusinessAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessAdmin>
          }
          groupBy: {
            args: Prisma.BusinessAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessAdminCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessAdminCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      RichReviewContent: {
        payload: Prisma.$RichReviewContentPayload<ExtArgs>
        fields: Prisma.RichReviewContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RichReviewContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RichReviewContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          findFirst: {
            args: Prisma.RichReviewContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RichReviewContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          findMany: {
            args: Prisma.RichReviewContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>[]
          }
          create: {
            args: Prisma.RichReviewContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          createMany: {
            args: Prisma.RichReviewContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RichReviewContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          update: {
            args: Prisma.RichReviewContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          deleteMany: {
            args: Prisma.RichReviewContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RichReviewContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RichReviewContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichReviewContentPayload>
          }
          aggregate: {
            args: Prisma.RichReviewContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRichReviewContent>
          }
          groupBy: {
            args: Prisma.RichReviewContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RichReviewContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RichReviewContentCountArgs<ExtArgs>
            result: $Utils.Optional<RichReviewContentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    businessCategory?: BusinessCategoryOmit
    business?: BusinessOmit
    businessAddress?: BusinessAddressOmit
    businessAdmin?: BusinessAdminOmit
    reviews?: ReviewsOmit
    richReviewContent?: RichReviewContentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    admins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    admins?: boolean | UserCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAdminWhereInput
  }


  /**
   * Count Type BusinessCategoryCountOutputType
   */

  export type BusinessCategoryCountOutputType = {
    businesses: number
  }

  export type BusinessCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businesses?: boolean | BusinessCategoryCountOutputTypeCountBusinessesArgs
  }

  // Custom InputTypes
  /**
   * BusinessCategoryCountOutputType without action
   */
  export type BusinessCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategoryCountOutputType
     */
    select?: BusinessCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCategoryCountOutputType without action
   */
  export type BusinessCategoryCountOutputTypeCountBusinessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    addresses: number
    reviews: number
    admins: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | BusinessCountOutputTypeCountAddressesArgs
    reviews?: boolean | BusinessCountOutputTypeCountReviewsArgs
    admins?: boolean | BusinessCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAddressWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAdminWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    hashedPassword: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    hashedPassword: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    phone: number
    hashedPassword: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    phone?: true
    hashedPassword?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    firstName: string | null
    lastName: string | null
    phone: string | null
    hashedPassword: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    hashedPassword?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    admins?: boolean | User$adminsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    hashedPassword?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "phone" | "hashedPassword" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    admins?: boolean | User$adminsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      admins: Prisma.$BusinessAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      firstName: string | null
      lastName: string | null
      phone: string | null
      hashedPassword: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends User$adminsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.admins
   */
  export type User$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    where?: BusinessAdminWhereInput
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    cursor?: BusinessAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessAdminScalarFieldEnum | BusinessAdminScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _avg: VerificationTokenAvgAggregateOutputType | null
    _sum: VerificationTokenSumAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type VerificationTokenSumAggregateOutputType = {
    id: number | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    action: $Enums.VerificationTokenAction | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: number | null
    email: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    action: $Enums.VerificationTokenAction | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    createdAt: number
    action: number
    _all: number
  }


  export type VerificationTokenAvgAggregateInputType = {
    id?: true
  }

  export type VerificationTokenSumAggregateInputType = {
    id?: true
  }

  export type VerificationTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    action?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    action?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    createdAt?: true
    action?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _avg?: VerificationTokenAvgAggregateInputType
    _sum?: VerificationTokenSumAggregateInputType
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: number
    email: string
    token: string
    expires: Date
    createdAt: Date
    action: $Enums.VerificationTokenAction
    _count: VerificationTokenCountAggregateOutputType | null
    _avg: VerificationTokenAvgAggregateOutputType | null
    _sum: VerificationTokenSumAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    action?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    action?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expires" | "createdAt" | "action", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      token: string
      expires: Date
      createdAt: Date
      action: $Enums.VerificationTokenAction
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'Int'>
    readonly email: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationToken", 'DateTime'>
    readonly action: FieldRef<"VerificationToken", 'VerificationTokenAction'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model BusinessCategory
   */

  export type AggregateBusinessCategory = {
    _count: BusinessCategoryCountAggregateOutputType | null
    _avg: BusinessCategoryAvgAggregateOutputType | null
    _sum: BusinessCategorySumAggregateOutputType | null
    _min: BusinessCategoryMinAggregateOutputType | null
    _max: BusinessCategoryMaxAggregateOutputType | null
  }

  export type BusinessCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessCategorySumAggregateOutputType = {
    id: number | null
  }

  export type BusinessCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessCategoryAvgAggregateInputType = {
    id?: true
  }

  export type BusinessCategorySumAggregateInputType = {
    id?: true
  }

  export type BusinessCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCategory to aggregate.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessCategories
    **/
    _count?: true | BusinessCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessCategoryMaxAggregateInputType
  }

  export type GetBusinessCategoryAggregateType<T extends BusinessCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessCategory[P]>
      : GetScalarType<T[P], AggregateBusinessCategory[P]>
  }




  export type BusinessCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessCategoryWhereInput
    orderBy?: BusinessCategoryOrderByWithAggregationInput | BusinessCategoryOrderByWithAggregationInput[]
    by: BusinessCategoryScalarFieldEnum[] | BusinessCategoryScalarFieldEnum
    having?: BusinessCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCategoryCountAggregateInputType | true
    _avg?: BusinessCategoryAvgAggregateInputType
    _sum?: BusinessCategorySumAggregateInputType
    _min?: BusinessCategoryMinAggregateInputType
    _max?: BusinessCategoryMaxAggregateInputType
  }

  export type BusinessCategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessCategoryCountAggregateOutputType | null
    _avg: BusinessCategoryAvgAggregateOutputType | null
    _sum: BusinessCategorySumAggregateOutputType | null
    _min: BusinessCategoryMinAggregateOutputType | null
    _max: BusinessCategoryMaxAggregateOutputType | null
  }

  type GetBusinessCategoryGroupByPayload<T extends BusinessCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BusinessCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businesses?: boolean | BusinessCategory$businessesArgs<ExtArgs>
    _count?: boolean | BusinessCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessCategory"]>



  export type BusinessCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["businessCategory"]>
  export type BusinessCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    businesses?: boolean | BusinessCategory$businessesArgs<ExtArgs>
    _count?: boolean | BusinessCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusinessCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessCategory"
    objects: {
      businesses: Prisma.$BusinessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessCategory"]>
    composites: {}
  }

  type BusinessCategoryGetPayload<S extends boolean | null | undefined | BusinessCategoryDefaultArgs> = $Result.GetResult<Prisma.$BusinessCategoryPayload, S>

  type BusinessCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCategoryCountAggregateInputType | true
    }

  export interface BusinessCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessCategory'], meta: { name: 'BusinessCategory' } }
    /**
     * Find zero or one BusinessCategory that matches the filter.
     * @param {BusinessCategoryFindUniqueArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessCategoryFindUniqueArgs>(args: SelectSubset<T, BusinessCategoryFindUniqueArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessCategoryFindUniqueOrThrowArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindFirstArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessCategoryFindFirstArgs>(args?: SelectSubset<T, BusinessCategoryFindFirstArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindFirstOrThrowArgs} args - Arguments to find a BusinessCategory
     * @example
     * // Get one BusinessCategory
     * const businessCategory = await prisma.businessCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessCategories
     * const businessCategories = await prisma.businessCategory.findMany()
     * 
     * // Get first 10 BusinessCategories
     * const businessCategories = await prisma.businessCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessCategoryWithIdOnly = await prisma.businessCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessCategoryFindManyArgs>(args?: SelectSubset<T, BusinessCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessCategory.
     * @param {BusinessCategoryCreateArgs} args - Arguments to create a BusinessCategory.
     * @example
     * // Create one BusinessCategory
     * const BusinessCategory = await prisma.businessCategory.create({
     *   data: {
     *     // ... data to create a BusinessCategory
     *   }
     * })
     * 
     */
    create<T extends BusinessCategoryCreateArgs>(args: SelectSubset<T, BusinessCategoryCreateArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessCategories.
     * @param {BusinessCategoryCreateManyArgs} args - Arguments to create many BusinessCategories.
     * @example
     * // Create many BusinessCategories
     * const businessCategory = await prisma.businessCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCategoryCreateManyArgs>(args?: SelectSubset<T, BusinessCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessCategory.
     * @param {BusinessCategoryDeleteArgs} args - Arguments to delete one BusinessCategory.
     * @example
     * // Delete one BusinessCategory
     * const BusinessCategory = await prisma.businessCategory.delete({
     *   where: {
     *     // ... filter to delete one BusinessCategory
     *   }
     * })
     * 
     */
    delete<T extends BusinessCategoryDeleteArgs>(args: SelectSubset<T, BusinessCategoryDeleteArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessCategory.
     * @param {BusinessCategoryUpdateArgs} args - Arguments to update one BusinessCategory.
     * @example
     * // Update one BusinessCategory
     * const businessCategory = await prisma.businessCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessCategoryUpdateArgs>(args: SelectSubset<T, BusinessCategoryUpdateArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessCategories.
     * @param {BusinessCategoryDeleteManyArgs} args - Arguments to filter BusinessCategories to delete.
     * @example
     * // Delete a few BusinessCategories
     * const { count } = await prisma.businessCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessCategoryDeleteManyArgs>(args?: SelectSubset<T, BusinessCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessCategories
     * const businessCategory = await prisma.businessCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessCategoryUpdateManyArgs>(args: SelectSubset<T, BusinessCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessCategory.
     * @param {BusinessCategoryUpsertArgs} args - Arguments to update or create a BusinessCategory.
     * @example
     * // Update or create a BusinessCategory
     * const businessCategory = await prisma.businessCategory.upsert({
     *   create: {
     *     // ... data to create a BusinessCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessCategory we want to update
     *   }
     * })
     */
    upsert<T extends BusinessCategoryUpsertArgs>(args: SelectSubset<T, BusinessCategoryUpsertArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryCountArgs} args - Arguments to filter BusinessCategories to count.
     * @example
     * // Count the number of BusinessCategories
     * const count = await prisma.businessCategory.count({
     *   where: {
     *     // ... the filter for the BusinessCategories we want to count
     *   }
     * })
    **/
    count<T extends BusinessCategoryCountArgs>(
      args?: Subset<T, BusinessCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessCategoryAggregateArgs>(args: Subset<T, BusinessCategoryAggregateArgs>): Prisma.PrismaPromise<GetBusinessCategoryAggregateType<T>>

    /**
     * Group by BusinessCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BusinessCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessCategory model
   */
  readonly fields: BusinessCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    businesses<T extends BusinessCategory$businessesArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCategory$businessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessCategory model
   */
  interface BusinessCategoryFieldRefs {
    readonly id: FieldRef<"BusinessCategory", 'Int'>
    readonly name: FieldRef<"BusinessCategory", 'String'>
    readonly description: FieldRef<"BusinessCategory", 'String'>
    readonly createdAt: FieldRef<"BusinessCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessCategory findUnique
   */
  export type BusinessCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory findUniqueOrThrow
   */
  export type BusinessCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory findFirst
   */
  export type BusinessCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCategories.
     */
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory findFirstOrThrow
   */
  export type BusinessCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategory to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessCategories.
     */
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory findMany
   */
  export type BusinessCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter, which BusinessCategories to fetch.
     */
    where?: BusinessCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessCategories to fetch.
     */
    orderBy?: BusinessCategoryOrderByWithRelationInput | BusinessCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessCategories.
     */
    cursor?: BusinessCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessCategories.
     */
    skip?: number
    distinct?: BusinessCategoryScalarFieldEnum | BusinessCategoryScalarFieldEnum[]
  }

  /**
   * BusinessCategory create
   */
  export type BusinessCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessCategory.
     */
    data: XOR<BusinessCategoryCreateInput, BusinessCategoryUncheckedCreateInput>
  }

  /**
   * BusinessCategory createMany
   */
  export type BusinessCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessCategories.
     */
    data: BusinessCategoryCreateManyInput | BusinessCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessCategory update
   */
  export type BusinessCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessCategory.
     */
    data: XOR<BusinessCategoryUpdateInput, BusinessCategoryUncheckedUpdateInput>
    /**
     * Choose, which BusinessCategory to update.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory updateMany
   */
  export type BusinessCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessCategories.
     */
    data: XOR<BusinessCategoryUpdateManyMutationInput, BusinessCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BusinessCategories to update
     */
    where?: BusinessCategoryWhereInput
    /**
     * Limit how many BusinessCategories to update.
     */
    limit?: number
  }

  /**
   * BusinessCategory upsert
   */
  export type BusinessCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessCategory to update in case it exists.
     */
    where: BusinessCategoryWhereUniqueInput
    /**
     * In case the BusinessCategory found by the `where` argument doesn't exist, create a new BusinessCategory with this data.
     */
    create: XOR<BusinessCategoryCreateInput, BusinessCategoryUncheckedCreateInput>
    /**
     * In case the BusinessCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessCategoryUpdateInput, BusinessCategoryUncheckedUpdateInput>
  }

  /**
   * BusinessCategory delete
   */
  export type BusinessCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
    /**
     * Filter which BusinessCategory to delete.
     */
    where: BusinessCategoryWhereUniqueInput
  }

  /**
   * BusinessCategory deleteMany
   */
  export type BusinessCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessCategories to delete
     */
    where?: BusinessCategoryWhereInput
    /**
     * Limit how many BusinessCategories to delete.
     */
    limit?: number
  }

  /**
   * BusinessCategory.businesses
   */
  export type BusinessCategory$businessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    cursor?: BusinessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * BusinessCategory without action
   */
  export type BusinessCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCategory
     */
    select?: BusinessCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessCategory
     */
    omit?: BusinessCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    photo: string | null
    link: string | null
    summary: string | null
    richContent: string | null
    isActive: boolean | null
    isInsideMall: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    photo: string | null
    link: string | null
    summary: string | null
    richContent: string | null
    isActive: boolean | null
    isInsideMall: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    email: number
    photo: number
    link: number
    summary: number
    richContent: number
    isActive: number
    isInsideMall: number
    description: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photo?: true
    link?: true
    summary?: true
    richContent?: true
    isActive?: true
    isInsideMall?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photo?: true
    link?: true
    summary?: true
    richContent?: true
    isActive?: true
    isInsideMall?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    photo?: true
    link?: true
    summary?: true
    richContent?: true
    isActive?: true
    isInsideMall?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    name: string
    email: string
    photo: string
    link: string | null
    summary: string
    richContent: string
    isActive: boolean
    isInsideMall: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    link?: boolean
    summary?: boolean
    richContent?: boolean
    isActive?: boolean
    isInsideMall?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | BusinessCategoryDefaultArgs<ExtArgs>
    addresses?: boolean | Business$addressesArgs<ExtArgs>
    reviews?: boolean | Business$reviewsArgs<ExtArgs>
    admins?: boolean | Business$adminsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>



  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    link?: boolean
    summary?: boolean
    richContent?: boolean
    isActive?: boolean
    isInsideMall?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "photo" | "link" | "summary" | "richContent" | "isActive" | "isInsideMall" | "description" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BusinessCategoryDefaultArgs<ExtArgs>
    addresses?: boolean | Business$addressesArgs<ExtArgs>
    reviews?: boolean | Business$reviewsArgs<ExtArgs>
    admins?: boolean | Business$adminsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      category: Prisma.$BusinessCategoryPayload<ExtArgs>
      addresses: Prisma.$BusinessAddressPayload<ExtArgs>[]
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      admins: Prisma.$BusinessAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      photo: string
      link: string | null
      summary: string
      richContent: string
      isActive: boolean
      isInsideMall: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BusinessCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessCategoryDefaultArgs<ExtArgs>>): Prisma__BusinessCategoryClient<$Result.GetResult<Prisma.$BusinessCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addresses<T extends Business$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Business$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Business$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Business$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Business$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Business$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly name: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly photo: FieldRef<"Business", 'String'>
    readonly link: FieldRef<"Business", 'String'>
    readonly summary: FieldRef<"Business", 'String'>
    readonly richContent: FieldRef<"Business", 'String'>
    readonly isActive: FieldRef<"Business", 'Boolean'>
    readonly isInsideMall: FieldRef<"Business", 'Boolean'>
    readonly description: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
    readonly categoryId: FieldRef<"Business", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.addresses
   */
  export type Business$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    where?: BusinessAddressWhereInput
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    cursor?: BusinessAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * Business.reviews
   */
  export type Business$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Business.admins
   */
  export type Business$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    where?: BusinessAdminWhereInput
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    cursor?: BusinessAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessAdminScalarFieldEnum | BusinessAdminScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model BusinessAddress
   */

  export type AggregateBusinessAddress = {
    _count: BusinessAddressCountAggregateOutputType | null
    _avg: BusinessAddressAvgAggregateOutputType | null
    _sum: BusinessAddressSumAggregateOutputType | null
    _min: BusinessAddressMinAggregateOutputType | null
    _max: BusinessAddressMaxAggregateOutputType | null
  }

  export type BusinessAddressAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BusinessAddressSumAggregateOutputType = {
    id: number | null
    businessId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type BusinessAddressMinAggregateOutputType = {
    id: number | null
    businessId: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessAddressMaxAggregateOutputType = {
    id: number | null
    businessId: number | null
    address: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessAddressCountAggregateOutputType = {
    id: number
    businessId: number
    address: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessAddressAvgAggregateInputType = {
    id?: true
    businessId?: true
    latitude?: true
    longitude?: true
  }

  export type BusinessAddressSumAggregateInputType = {
    id?: true
    businessId?: true
    latitude?: true
    longitude?: true
  }

  export type BusinessAddressMinAggregateInputType = {
    id?: true
    businessId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessAddressMaxAggregateInputType = {
    id?: true
    businessId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessAddressCountAggregateInputType = {
    id?: true
    businessId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAddress to aggregate.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessAddresses
    **/
    _count?: true | BusinessAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessAddressMaxAggregateInputType
  }

  export type GetBusinessAddressAggregateType<T extends BusinessAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessAddress[P]>
      : GetScalarType<T[P], AggregateBusinessAddress[P]>
  }




  export type BusinessAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAddressWhereInput
    orderBy?: BusinessAddressOrderByWithAggregationInput | BusinessAddressOrderByWithAggregationInput[]
    by: BusinessAddressScalarFieldEnum[] | BusinessAddressScalarFieldEnum
    having?: BusinessAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessAddressCountAggregateInputType | true
    _avg?: BusinessAddressAvgAggregateInputType
    _sum?: BusinessAddressSumAggregateInputType
    _min?: BusinessAddressMinAggregateInputType
    _max?: BusinessAddressMaxAggregateInputType
  }

  export type BusinessAddressGroupByOutputType = {
    id: number
    businessId: number
    address: string
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    _count: BusinessAddressCountAggregateOutputType | null
    _avg: BusinessAddressAvgAggregateOutputType | null
    _sum: BusinessAddressSumAggregateOutputType | null
    _min: BusinessAddressMinAggregateOutputType | null
    _max: BusinessAddressMaxAggregateOutputType | null
  }

  type GetBusinessAddressGroupByPayload<T extends BusinessAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessAddressGroupByOutputType[P]>
        }
      >
    >


  export type BusinessAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessAddress"]>



  export type BusinessAddressSelectScalar = {
    id?: boolean
    businessId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "address" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["businessAddress"]>
  export type BusinessAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $BusinessAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessAddress"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessId: number
      address: string
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessAddress"]>
    composites: {}
  }

  type BusinessAddressGetPayload<S extends boolean | null | undefined | BusinessAddressDefaultArgs> = $Result.GetResult<Prisma.$BusinessAddressPayload, S>

  type BusinessAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessAddressCountAggregateInputType | true
    }

  export interface BusinessAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessAddress'], meta: { name: 'BusinessAddress' } }
    /**
     * Find zero or one BusinessAddress that matches the filter.
     * @param {BusinessAddressFindUniqueArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessAddressFindUniqueArgs>(args: SelectSubset<T, BusinessAddressFindUniqueArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessAddressFindUniqueOrThrowArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindFirstArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessAddressFindFirstArgs>(args?: SelectSubset<T, BusinessAddressFindFirstArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindFirstOrThrowArgs} args - Arguments to find a BusinessAddress
     * @example
     * // Get one BusinessAddress
     * const businessAddress = await prisma.businessAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessAddresses
     * const businessAddresses = await prisma.businessAddress.findMany()
     * 
     * // Get first 10 BusinessAddresses
     * const businessAddresses = await prisma.businessAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessAddressWithIdOnly = await prisma.businessAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessAddressFindManyArgs>(args?: SelectSubset<T, BusinessAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessAddress.
     * @param {BusinessAddressCreateArgs} args - Arguments to create a BusinessAddress.
     * @example
     * // Create one BusinessAddress
     * const BusinessAddress = await prisma.businessAddress.create({
     *   data: {
     *     // ... data to create a BusinessAddress
     *   }
     * })
     * 
     */
    create<T extends BusinessAddressCreateArgs>(args: SelectSubset<T, BusinessAddressCreateArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessAddresses.
     * @param {BusinessAddressCreateManyArgs} args - Arguments to create many BusinessAddresses.
     * @example
     * // Create many BusinessAddresses
     * const businessAddress = await prisma.businessAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessAddressCreateManyArgs>(args?: SelectSubset<T, BusinessAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessAddress.
     * @param {BusinessAddressDeleteArgs} args - Arguments to delete one BusinessAddress.
     * @example
     * // Delete one BusinessAddress
     * const BusinessAddress = await prisma.businessAddress.delete({
     *   where: {
     *     // ... filter to delete one BusinessAddress
     *   }
     * })
     * 
     */
    delete<T extends BusinessAddressDeleteArgs>(args: SelectSubset<T, BusinessAddressDeleteArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessAddress.
     * @param {BusinessAddressUpdateArgs} args - Arguments to update one BusinessAddress.
     * @example
     * // Update one BusinessAddress
     * const businessAddress = await prisma.businessAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessAddressUpdateArgs>(args: SelectSubset<T, BusinessAddressUpdateArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessAddresses.
     * @param {BusinessAddressDeleteManyArgs} args - Arguments to filter BusinessAddresses to delete.
     * @example
     * // Delete a few BusinessAddresses
     * const { count } = await prisma.businessAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessAddressDeleteManyArgs>(args?: SelectSubset<T, BusinessAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessAddresses
     * const businessAddress = await prisma.businessAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessAddressUpdateManyArgs>(args: SelectSubset<T, BusinessAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessAddress.
     * @param {BusinessAddressUpsertArgs} args - Arguments to update or create a BusinessAddress.
     * @example
     * // Update or create a BusinessAddress
     * const businessAddress = await prisma.businessAddress.upsert({
     *   create: {
     *     // ... data to create a BusinessAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessAddress we want to update
     *   }
     * })
     */
    upsert<T extends BusinessAddressUpsertArgs>(args: SelectSubset<T, BusinessAddressUpsertArgs<ExtArgs>>): Prisma__BusinessAddressClient<$Result.GetResult<Prisma.$BusinessAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressCountArgs} args - Arguments to filter BusinessAddresses to count.
     * @example
     * // Count the number of BusinessAddresses
     * const count = await prisma.businessAddress.count({
     *   where: {
     *     // ... the filter for the BusinessAddresses we want to count
     *   }
     * })
    **/
    count<T extends BusinessAddressCountArgs>(
      args?: Subset<T, BusinessAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAddressAggregateArgs>(args: Subset<T, BusinessAddressAggregateArgs>): Prisma.PrismaPromise<GetBusinessAddressAggregateType<T>>

    /**
     * Group by BusinessAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessAddressGroupByArgs['orderBy'] }
        : { orderBy?: BusinessAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessAddress model
   */
  readonly fields: BusinessAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessAddress model
   */
  interface BusinessAddressFieldRefs {
    readonly id: FieldRef<"BusinessAddress", 'Int'>
    readonly businessId: FieldRef<"BusinessAddress", 'Int'>
    readonly address: FieldRef<"BusinessAddress", 'String'>
    readonly latitude: FieldRef<"BusinessAddress", 'Float'>
    readonly longitude: FieldRef<"BusinessAddress", 'Float'>
    readonly createdAt: FieldRef<"BusinessAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessAddress findUnique
   */
  export type BusinessAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress findUniqueOrThrow
   */
  export type BusinessAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress findFirst
   */
  export type BusinessAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAddresses.
     */
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress findFirstOrThrow
   */
  export type BusinessAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddress to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAddresses.
     */
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress findMany
   */
  export type BusinessAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAddresses to fetch.
     */
    where?: BusinessAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAddresses to fetch.
     */
    orderBy?: BusinessAddressOrderByWithRelationInput | BusinessAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessAddresses.
     */
    cursor?: BusinessAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAddresses.
     */
    skip?: number
    distinct?: BusinessAddressScalarFieldEnum | BusinessAddressScalarFieldEnum[]
  }

  /**
   * BusinessAddress create
   */
  export type BusinessAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessAddress.
     */
    data: XOR<BusinessAddressCreateInput, BusinessAddressUncheckedCreateInput>
  }

  /**
   * BusinessAddress createMany
   */
  export type BusinessAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessAddresses.
     */
    data: BusinessAddressCreateManyInput | BusinessAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessAddress update
   */
  export type BusinessAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessAddress.
     */
    data: XOR<BusinessAddressUpdateInput, BusinessAddressUncheckedUpdateInput>
    /**
     * Choose, which BusinessAddress to update.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress updateMany
   */
  export type BusinessAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessAddresses.
     */
    data: XOR<BusinessAddressUpdateManyMutationInput, BusinessAddressUncheckedUpdateManyInput>
    /**
     * Filter which BusinessAddresses to update
     */
    where?: BusinessAddressWhereInput
    /**
     * Limit how many BusinessAddresses to update.
     */
    limit?: number
  }

  /**
   * BusinessAddress upsert
   */
  export type BusinessAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessAddress to update in case it exists.
     */
    where: BusinessAddressWhereUniqueInput
    /**
     * In case the BusinessAddress found by the `where` argument doesn't exist, create a new BusinessAddress with this data.
     */
    create: XOR<BusinessAddressCreateInput, BusinessAddressUncheckedCreateInput>
    /**
     * In case the BusinessAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessAddressUpdateInput, BusinessAddressUncheckedUpdateInput>
  }

  /**
   * BusinessAddress delete
   */
  export type BusinessAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
    /**
     * Filter which BusinessAddress to delete.
     */
    where: BusinessAddressWhereUniqueInput
  }

  /**
   * BusinessAddress deleteMany
   */
  export type BusinessAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAddresses to delete
     */
    where?: BusinessAddressWhereInput
    /**
     * Limit how many BusinessAddresses to delete.
     */
    limit?: number
  }

  /**
   * BusinessAddress without action
   */
  export type BusinessAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAddress
     */
    select?: BusinessAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAddress
     */
    omit?: BusinessAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAddressInclude<ExtArgs> | null
  }


  /**
   * Model BusinessAdmin
   */

  export type AggregateBusinessAdmin = {
    _count: BusinessAdminCountAggregateOutputType | null
    _avg: BusinessAdminAvgAggregateOutputType | null
    _sum: BusinessAdminSumAggregateOutputType | null
    _min: BusinessAdminMinAggregateOutputType | null
    _max: BusinessAdminMaxAggregateOutputType | null
  }

  export type BusinessAdminAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
  }

  export type BusinessAdminSumAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
  }

  export type BusinessAdminMinAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessAdminMaxAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessAdminCountAggregateOutputType = {
    id: number
    businessId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessAdminAvgAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
  }

  export type BusinessAdminSumAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
  }

  export type BusinessAdminMinAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessAdminMaxAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessAdminCountAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAdmin to aggregate.
     */
    where?: BusinessAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAdmins to fetch.
     */
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessAdmins
    **/
    _count?: true | BusinessAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessAdminMaxAggregateInputType
  }

  export type GetBusinessAdminAggregateType<T extends BusinessAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessAdmin[P]>
      : GetScalarType<T[P], AggregateBusinessAdmin[P]>
  }




  export type BusinessAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessAdminWhereInput
    orderBy?: BusinessAdminOrderByWithAggregationInput | BusinessAdminOrderByWithAggregationInput[]
    by: BusinessAdminScalarFieldEnum[] | BusinessAdminScalarFieldEnum
    having?: BusinessAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessAdminCountAggregateInputType | true
    _avg?: BusinessAdminAvgAggregateInputType
    _sum?: BusinessAdminSumAggregateInputType
    _min?: BusinessAdminMinAggregateInputType
    _max?: BusinessAdminMaxAggregateInputType
  }

  export type BusinessAdminGroupByOutputType = {
    id: number
    businessId: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: BusinessAdminCountAggregateOutputType | null
    _avg: BusinessAdminAvgAggregateOutputType | null
    _sum: BusinessAdminSumAggregateOutputType | null
    _min: BusinessAdminMinAggregateOutputType | null
    _max: BusinessAdminMaxAggregateOutputType | null
  }

  type GetBusinessAdminGroupByPayload<T extends BusinessAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessAdminGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessAdminGroupByOutputType[P]>
        }
      >
    >


  export type BusinessAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessAdmin"]>



  export type BusinessAdminSelectScalar = {
    id?: boolean
    businessId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["businessAdmin"]>
  export type BusinessAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BusinessAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessAdmin"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessId: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessAdmin"]>
    composites: {}
  }

  type BusinessAdminGetPayload<S extends boolean | null | undefined | BusinessAdminDefaultArgs> = $Result.GetResult<Prisma.$BusinessAdminPayload, S>

  type BusinessAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessAdminCountAggregateInputType | true
    }

  export interface BusinessAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessAdmin'], meta: { name: 'BusinessAdmin' } }
    /**
     * Find zero or one BusinessAdmin that matches the filter.
     * @param {BusinessAdminFindUniqueArgs} args - Arguments to find a BusinessAdmin
     * @example
     * // Get one BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessAdminFindUniqueArgs>(args: SelectSubset<T, BusinessAdminFindUniqueArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessAdminFindUniqueOrThrowArgs} args - Arguments to find a BusinessAdmin
     * @example
     * // Get one BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminFindFirstArgs} args - Arguments to find a BusinessAdmin
     * @example
     * // Get one BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessAdminFindFirstArgs>(args?: SelectSubset<T, BusinessAdminFindFirstArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminFindFirstOrThrowArgs} args - Arguments to find a BusinessAdmin
     * @example
     * // Get one BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessAdmins
     * const businessAdmins = await prisma.businessAdmin.findMany()
     * 
     * // Get first 10 BusinessAdmins
     * const businessAdmins = await prisma.businessAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessAdminWithIdOnly = await prisma.businessAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessAdminFindManyArgs>(args?: SelectSubset<T, BusinessAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessAdmin.
     * @param {BusinessAdminCreateArgs} args - Arguments to create a BusinessAdmin.
     * @example
     * // Create one BusinessAdmin
     * const BusinessAdmin = await prisma.businessAdmin.create({
     *   data: {
     *     // ... data to create a BusinessAdmin
     *   }
     * })
     * 
     */
    create<T extends BusinessAdminCreateArgs>(args: SelectSubset<T, BusinessAdminCreateArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessAdmins.
     * @param {BusinessAdminCreateManyArgs} args - Arguments to create many BusinessAdmins.
     * @example
     * // Create many BusinessAdmins
     * const businessAdmin = await prisma.businessAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessAdminCreateManyArgs>(args?: SelectSubset<T, BusinessAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessAdmin.
     * @param {BusinessAdminDeleteArgs} args - Arguments to delete one BusinessAdmin.
     * @example
     * // Delete one BusinessAdmin
     * const BusinessAdmin = await prisma.businessAdmin.delete({
     *   where: {
     *     // ... filter to delete one BusinessAdmin
     *   }
     * })
     * 
     */
    delete<T extends BusinessAdminDeleteArgs>(args: SelectSubset<T, BusinessAdminDeleteArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessAdmin.
     * @param {BusinessAdminUpdateArgs} args - Arguments to update one BusinessAdmin.
     * @example
     * // Update one BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessAdminUpdateArgs>(args: SelectSubset<T, BusinessAdminUpdateArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessAdmins.
     * @param {BusinessAdminDeleteManyArgs} args - Arguments to filter BusinessAdmins to delete.
     * @example
     * // Delete a few BusinessAdmins
     * const { count } = await prisma.businessAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessAdminDeleteManyArgs>(args?: SelectSubset<T, BusinessAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessAdmins
     * const businessAdmin = await prisma.businessAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessAdminUpdateManyArgs>(args: SelectSubset<T, BusinessAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessAdmin.
     * @param {BusinessAdminUpsertArgs} args - Arguments to update or create a BusinessAdmin.
     * @example
     * // Update or create a BusinessAdmin
     * const businessAdmin = await prisma.businessAdmin.upsert({
     *   create: {
     *     // ... data to create a BusinessAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessAdmin we want to update
     *   }
     * })
     */
    upsert<T extends BusinessAdminUpsertArgs>(args: SelectSubset<T, BusinessAdminUpsertArgs<ExtArgs>>): Prisma__BusinessAdminClient<$Result.GetResult<Prisma.$BusinessAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminCountArgs} args - Arguments to filter BusinessAdmins to count.
     * @example
     * // Count the number of BusinessAdmins
     * const count = await prisma.businessAdmin.count({
     *   where: {
     *     // ... the filter for the BusinessAdmins we want to count
     *   }
     * })
    **/
    count<T extends BusinessAdminCountArgs>(
      args?: Subset<T, BusinessAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAdminAggregateArgs>(args: Subset<T, BusinessAdminAggregateArgs>): Prisma.PrismaPromise<GetBusinessAdminAggregateType<T>>

    /**
     * Group by BusinessAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessAdminGroupByArgs['orderBy'] }
        : { orderBy?: BusinessAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessAdmin model
   */
  readonly fields: BusinessAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessAdmin model
   */
  interface BusinessAdminFieldRefs {
    readonly id: FieldRef<"BusinessAdmin", 'Int'>
    readonly businessId: FieldRef<"BusinessAdmin", 'Int'>
    readonly userId: FieldRef<"BusinessAdmin", 'Int'>
    readonly createdAt: FieldRef<"BusinessAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessAdmin findUnique
   */
  export type BusinessAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAdmin to fetch.
     */
    where: BusinessAdminWhereUniqueInput
  }

  /**
   * BusinessAdmin findUniqueOrThrow
   */
  export type BusinessAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAdmin to fetch.
     */
    where: BusinessAdminWhereUniqueInput
  }

  /**
   * BusinessAdmin findFirst
   */
  export type BusinessAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAdmin to fetch.
     */
    where?: BusinessAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAdmins to fetch.
     */
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAdmins.
     */
    cursor?: BusinessAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAdmins.
     */
    distinct?: BusinessAdminScalarFieldEnum | BusinessAdminScalarFieldEnum[]
  }

  /**
   * BusinessAdmin findFirstOrThrow
   */
  export type BusinessAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAdmin to fetch.
     */
    where?: BusinessAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAdmins to fetch.
     */
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessAdmins.
     */
    cursor?: BusinessAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessAdmins.
     */
    distinct?: BusinessAdminScalarFieldEnum | BusinessAdminScalarFieldEnum[]
  }

  /**
   * BusinessAdmin findMany
   */
  export type BusinessAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter, which BusinessAdmins to fetch.
     */
    where?: BusinessAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessAdmins to fetch.
     */
    orderBy?: BusinessAdminOrderByWithRelationInput | BusinessAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessAdmins.
     */
    cursor?: BusinessAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessAdmins.
     */
    skip?: number
    distinct?: BusinessAdminScalarFieldEnum | BusinessAdminScalarFieldEnum[]
  }

  /**
   * BusinessAdmin create
   */
  export type BusinessAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessAdmin.
     */
    data: XOR<BusinessAdminCreateInput, BusinessAdminUncheckedCreateInput>
  }

  /**
   * BusinessAdmin createMany
   */
  export type BusinessAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessAdmins.
     */
    data: BusinessAdminCreateManyInput | BusinessAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessAdmin update
   */
  export type BusinessAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessAdmin.
     */
    data: XOR<BusinessAdminUpdateInput, BusinessAdminUncheckedUpdateInput>
    /**
     * Choose, which BusinessAdmin to update.
     */
    where: BusinessAdminWhereUniqueInput
  }

  /**
   * BusinessAdmin updateMany
   */
  export type BusinessAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessAdmins.
     */
    data: XOR<BusinessAdminUpdateManyMutationInput, BusinessAdminUncheckedUpdateManyInput>
    /**
     * Filter which BusinessAdmins to update
     */
    where?: BusinessAdminWhereInput
    /**
     * Limit how many BusinessAdmins to update.
     */
    limit?: number
  }

  /**
   * BusinessAdmin upsert
   */
  export type BusinessAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessAdmin to update in case it exists.
     */
    where: BusinessAdminWhereUniqueInput
    /**
     * In case the BusinessAdmin found by the `where` argument doesn't exist, create a new BusinessAdmin with this data.
     */
    create: XOR<BusinessAdminCreateInput, BusinessAdminUncheckedCreateInput>
    /**
     * In case the BusinessAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessAdminUpdateInput, BusinessAdminUncheckedUpdateInput>
  }

  /**
   * BusinessAdmin delete
   */
  export type BusinessAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
    /**
     * Filter which BusinessAdmin to delete.
     */
    where: BusinessAdminWhereUniqueInput
  }

  /**
   * BusinessAdmin deleteMany
   */
  export type BusinessAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessAdmins to delete
     */
    where?: BusinessAdminWhereInput
    /**
     * Limit how many BusinessAdmins to delete.
     */
    limit?: number
  }

  /**
   * BusinessAdmin without action
   */
  export type BusinessAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessAdmin
     */
    select?: BusinessAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessAdmin
     */
    omit?: BusinessAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessAdminInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    businessId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    businessId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    businessId: number
    userId: number
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    richContent?: boolean | Reviews$richContentArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>



  export type ReviewsSelectScalar = {
    id?: boolean
    businessId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "businessId" | "userId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    richContent?: boolean | Reviews$richContentArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      richContent: Prisma.$RichReviewContentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      businessId: number
      userId: number
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    richContent<T extends Reviews$richContentArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$richContentArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly businessId: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
    readonly updatedAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews.richContent
   */
  export type Reviews$richContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    where?: RichReviewContentWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model RichReviewContent
   */

  export type AggregateRichReviewContent = {
    _count: RichReviewContentCountAggregateOutputType | null
    _avg: RichReviewContentAvgAggregateOutputType | null
    _sum: RichReviewContentSumAggregateOutputType | null
    _min: RichReviewContentMinAggregateOutputType | null
    _max: RichReviewContentMaxAggregateOutputType | null
  }

  export type RichReviewContentAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type RichReviewContentSumAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type RichReviewContentMinAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewId: number | null
  }

  export type RichReviewContentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewId: number | null
  }

  export type RichReviewContentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    reviewId: number
    _all: number
  }


  export type RichReviewContentAvgAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type RichReviewContentSumAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type RichReviewContentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
  }

  export type RichReviewContentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
  }

  export type RichReviewContentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    reviewId?: true
    _all?: true
  }

  export type RichReviewContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RichReviewContent to aggregate.
     */
    where?: RichReviewContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichReviewContents to fetch.
     */
    orderBy?: RichReviewContentOrderByWithRelationInput | RichReviewContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RichReviewContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichReviewContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichReviewContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RichReviewContents
    **/
    _count?: true | RichReviewContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RichReviewContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RichReviewContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RichReviewContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RichReviewContentMaxAggregateInputType
  }

  export type GetRichReviewContentAggregateType<T extends RichReviewContentAggregateArgs> = {
        [P in keyof T & keyof AggregateRichReviewContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRichReviewContent[P]>
      : GetScalarType<T[P], AggregateRichReviewContent[P]>
  }




  export type RichReviewContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RichReviewContentWhereInput
    orderBy?: RichReviewContentOrderByWithAggregationInput | RichReviewContentOrderByWithAggregationInput[]
    by: RichReviewContentScalarFieldEnum[] | RichReviewContentScalarFieldEnum
    having?: RichReviewContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RichReviewContentCountAggregateInputType | true
    _avg?: RichReviewContentAvgAggregateInputType
    _sum?: RichReviewContentSumAggregateInputType
    _min?: RichReviewContentMinAggregateInputType
    _max?: RichReviewContentMaxAggregateInputType
  }

  export type RichReviewContentGroupByOutputType = {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
    reviewId: number
    _count: RichReviewContentCountAggregateOutputType | null
    _avg: RichReviewContentAvgAggregateOutputType | null
    _sum: RichReviewContentSumAggregateOutputType | null
    _min: RichReviewContentMinAggregateOutputType | null
    _max: RichReviewContentMaxAggregateOutputType | null
  }

  type GetRichReviewContentGroupByPayload<T extends RichReviewContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RichReviewContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RichReviewContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RichReviewContentGroupByOutputType[P]>
            : GetScalarType<T[P], RichReviewContentGroupByOutputType[P]>
        }
      >
    >


  export type RichReviewContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewId?: boolean
    review?: boolean | RichReviewContent$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["richReviewContent"]>



  export type RichReviewContentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewId?: boolean
  }

  export type RichReviewContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "reviewId", ExtArgs["result"]["richReviewContent"]>
  export type RichReviewContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | RichReviewContent$reviewArgs<ExtArgs>
  }

  export type $RichReviewContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RichReviewContent"
    objects: {
      review: Prisma.$ReviewsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      createdAt: Date
      updatedAt: Date
      reviewId: number
    }, ExtArgs["result"]["richReviewContent"]>
    composites: {}
  }

  type RichReviewContentGetPayload<S extends boolean | null | undefined | RichReviewContentDefaultArgs> = $Result.GetResult<Prisma.$RichReviewContentPayload, S>

  type RichReviewContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RichReviewContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RichReviewContentCountAggregateInputType | true
    }

  export interface RichReviewContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RichReviewContent'], meta: { name: 'RichReviewContent' } }
    /**
     * Find zero or one RichReviewContent that matches the filter.
     * @param {RichReviewContentFindUniqueArgs} args - Arguments to find a RichReviewContent
     * @example
     * // Get one RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RichReviewContentFindUniqueArgs>(args: SelectSubset<T, RichReviewContentFindUniqueArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RichReviewContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RichReviewContentFindUniqueOrThrowArgs} args - Arguments to find a RichReviewContent
     * @example
     * // Get one RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RichReviewContentFindUniqueOrThrowArgs>(args: SelectSubset<T, RichReviewContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RichReviewContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentFindFirstArgs} args - Arguments to find a RichReviewContent
     * @example
     * // Get one RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RichReviewContentFindFirstArgs>(args?: SelectSubset<T, RichReviewContentFindFirstArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RichReviewContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentFindFirstOrThrowArgs} args - Arguments to find a RichReviewContent
     * @example
     * // Get one RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RichReviewContentFindFirstOrThrowArgs>(args?: SelectSubset<T, RichReviewContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RichReviewContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RichReviewContents
     * const richReviewContents = await prisma.richReviewContent.findMany()
     * 
     * // Get first 10 RichReviewContents
     * const richReviewContents = await prisma.richReviewContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const richReviewContentWithIdOnly = await prisma.richReviewContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RichReviewContentFindManyArgs>(args?: SelectSubset<T, RichReviewContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RichReviewContent.
     * @param {RichReviewContentCreateArgs} args - Arguments to create a RichReviewContent.
     * @example
     * // Create one RichReviewContent
     * const RichReviewContent = await prisma.richReviewContent.create({
     *   data: {
     *     // ... data to create a RichReviewContent
     *   }
     * })
     * 
     */
    create<T extends RichReviewContentCreateArgs>(args: SelectSubset<T, RichReviewContentCreateArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RichReviewContents.
     * @param {RichReviewContentCreateManyArgs} args - Arguments to create many RichReviewContents.
     * @example
     * // Create many RichReviewContents
     * const richReviewContent = await prisma.richReviewContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RichReviewContentCreateManyArgs>(args?: SelectSubset<T, RichReviewContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RichReviewContent.
     * @param {RichReviewContentDeleteArgs} args - Arguments to delete one RichReviewContent.
     * @example
     * // Delete one RichReviewContent
     * const RichReviewContent = await prisma.richReviewContent.delete({
     *   where: {
     *     // ... filter to delete one RichReviewContent
     *   }
     * })
     * 
     */
    delete<T extends RichReviewContentDeleteArgs>(args: SelectSubset<T, RichReviewContentDeleteArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RichReviewContent.
     * @param {RichReviewContentUpdateArgs} args - Arguments to update one RichReviewContent.
     * @example
     * // Update one RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RichReviewContentUpdateArgs>(args: SelectSubset<T, RichReviewContentUpdateArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RichReviewContents.
     * @param {RichReviewContentDeleteManyArgs} args - Arguments to filter RichReviewContents to delete.
     * @example
     * // Delete a few RichReviewContents
     * const { count } = await prisma.richReviewContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RichReviewContentDeleteManyArgs>(args?: SelectSubset<T, RichReviewContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RichReviewContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RichReviewContents
     * const richReviewContent = await prisma.richReviewContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RichReviewContentUpdateManyArgs>(args: SelectSubset<T, RichReviewContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RichReviewContent.
     * @param {RichReviewContentUpsertArgs} args - Arguments to update or create a RichReviewContent.
     * @example
     * // Update or create a RichReviewContent
     * const richReviewContent = await prisma.richReviewContent.upsert({
     *   create: {
     *     // ... data to create a RichReviewContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RichReviewContent we want to update
     *   }
     * })
     */
    upsert<T extends RichReviewContentUpsertArgs>(args: SelectSubset<T, RichReviewContentUpsertArgs<ExtArgs>>): Prisma__RichReviewContentClient<$Result.GetResult<Prisma.$RichReviewContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RichReviewContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentCountArgs} args - Arguments to filter RichReviewContents to count.
     * @example
     * // Count the number of RichReviewContents
     * const count = await prisma.richReviewContent.count({
     *   where: {
     *     // ... the filter for the RichReviewContents we want to count
     *   }
     * })
    **/
    count<T extends RichReviewContentCountArgs>(
      args?: Subset<T, RichReviewContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RichReviewContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RichReviewContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RichReviewContentAggregateArgs>(args: Subset<T, RichReviewContentAggregateArgs>): Prisma.PrismaPromise<GetRichReviewContentAggregateType<T>>

    /**
     * Group by RichReviewContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichReviewContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RichReviewContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RichReviewContentGroupByArgs['orderBy'] }
        : { orderBy?: RichReviewContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RichReviewContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRichReviewContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RichReviewContent model
   */
  readonly fields: RichReviewContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RichReviewContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RichReviewContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends RichReviewContent$reviewArgs<ExtArgs> = {}>(args?: Subset<T, RichReviewContent$reviewArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RichReviewContent model
   */
  interface RichReviewContentFieldRefs {
    readonly id: FieldRef<"RichReviewContent", 'Int'>
    readonly content: FieldRef<"RichReviewContent", 'String'>
    readonly createdAt: FieldRef<"RichReviewContent", 'DateTime'>
    readonly updatedAt: FieldRef<"RichReviewContent", 'DateTime'>
    readonly reviewId: FieldRef<"RichReviewContent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RichReviewContent findUnique
   */
  export type RichReviewContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter, which RichReviewContent to fetch.
     */
    where: RichReviewContentWhereUniqueInput
  }

  /**
   * RichReviewContent findUniqueOrThrow
   */
  export type RichReviewContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter, which RichReviewContent to fetch.
     */
    where: RichReviewContentWhereUniqueInput
  }

  /**
   * RichReviewContent findFirst
   */
  export type RichReviewContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter, which RichReviewContent to fetch.
     */
    where?: RichReviewContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichReviewContents to fetch.
     */
    orderBy?: RichReviewContentOrderByWithRelationInput | RichReviewContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RichReviewContents.
     */
    cursor?: RichReviewContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichReviewContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichReviewContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RichReviewContents.
     */
    distinct?: RichReviewContentScalarFieldEnum | RichReviewContentScalarFieldEnum[]
  }

  /**
   * RichReviewContent findFirstOrThrow
   */
  export type RichReviewContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter, which RichReviewContent to fetch.
     */
    where?: RichReviewContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichReviewContents to fetch.
     */
    orderBy?: RichReviewContentOrderByWithRelationInput | RichReviewContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RichReviewContents.
     */
    cursor?: RichReviewContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichReviewContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichReviewContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RichReviewContents.
     */
    distinct?: RichReviewContentScalarFieldEnum | RichReviewContentScalarFieldEnum[]
  }

  /**
   * RichReviewContent findMany
   */
  export type RichReviewContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter, which RichReviewContents to fetch.
     */
    where?: RichReviewContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichReviewContents to fetch.
     */
    orderBy?: RichReviewContentOrderByWithRelationInput | RichReviewContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RichReviewContents.
     */
    cursor?: RichReviewContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichReviewContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichReviewContents.
     */
    skip?: number
    distinct?: RichReviewContentScalarFieldEnum | RichReviewContentScalarFieldEnum[]
  }

  /**
   * RichReviewContent create
   */
  export type RichReviewContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * The data needed to create a RichReviewContent.
     */
    data: XOR<RichReviewContentCreateInput, RichReviewContentUncheckedCreateInput>
  }

  /**
   * RichReviewContent createMany
   */
  export type RichReviewContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RichReviewContents.
     */
    data: RichReviewContentCreateManyInput | RichReviewContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RichReviewContent update
   */
  export type RichReviewContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * The data needed to update a RichReviewContent.
     */
    data: XOR<RichReviewContentUpdateInput, RichReviewContentUncheckedUpdateInput>
    /**
     * Choose, which RichReviewContent to update.
     */
    where: RichReviewContentWhereUniqueInput
  }

  /**
   * RichReviewContent updateMany
   */
  export type RichReviewContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RichReviewContents.
     */
    data: XOR<RichReviewContentUpdateManyMutationInput, RichReviewContentUncheckedUpdateManyInput>
    /**
     * Filter which RichReviewContents to update
     */
    where?: RichReviewContentWhereInput
    /**
     * Limit how many RichReviewContents to update.
     */
    limit?: number
  }

  /**
   * RichReviewContent upsert
   */
  export type RichReviewContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * The filter to search for the RichReviewContent to update in case it exists.
     */
    where: RichReviewContentWhereUniqueInput
    /**
     * In case the RichReviewContent found by the `where` argument doesn't exist, create a new RichReviewContent with this data.
     */
    create: XOR<RichReviewContentCreateInput, RichReviewContentUncheckedCreateInput>
    /**
     * In case the RichReviewContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RichReviewContentUpdateInput, RichReviewContentUncheckedUpdateInput>
  }

  /**
   * RichReviewContent delete
   */
  export type RichReviewContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
    /**
     * Filter which RichReviewContent to delete.
     */
    where: RichReviewContentWhereUniqueInput
  }

  /**
   * RichReviewContent deleteMany
   */
  export type RichReviewContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RichReviewContents to delete
     */
    where?: RichReviewContentWhereInput
    /**
     * Limit how many RichReviewContents to delete.
     */
    limit?: number
  }

  /**
   * RichReviewContent.review
   */
  export type RichReviewContent$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
  }

  /**
   * RichReviewContent without action
   */
  export type RichReviewContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichReviewContent
     */
    select?: RichReviewContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichReviewContent
     */
    omit?: RichReviewContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichReviewContentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    hashedPassword: 'hashedPassword',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    action: 'action'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const BusinessCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessCategoryScalarFieldEnum = (typeof BusinessCategoryScalarFieldEnum)[keyof typeof BusinessCategoryScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    photo: 'photo',
    link: 'link',
    summary: 'summary',
    richContent: 'richContent',
    isActive: 'isActive',
    isInsideMall: 'isInsideMall',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const BusinessAddressScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessAddressScalarFieldEnum = (typeof BusinessAddressScalarFieldEnum)[keyof typeof BusinessAddressScalarFieldEnum]


  export const BusinessAdminScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessAdminScalarFieldEnum = (typeof BusinessAdminScalarFieldEnum)[keyof typeof BusinessAdminScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const RichReviewContentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewId: 'reviewId'
  };

  export type RichReviewContentScalarFieldEnum = (typeof RichReviewContentScalarFieldEnum)[keyof typeof RichReviewContentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    hashedPassword: 'hashedPassword'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    email: 'email',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const BusinessCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type BusinessCategoryOrderByRelevanceFieldEnum = (typeof BusinessCategoryOrderByRelevanceFieldEnum)[keyof typeof BusinessCategoryOrderByRelevanceFieldEnum]


  export const BusinessOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    photo: 'photo',
    link: 'link',
    summary: 'summary',
    richContent: 'richContent',
    description: 'description'
  };

  export type BusinessOrderByRelevanceFieldEnum = (typeof BusinessOrderByRelevanceFieldEnum)[keyof typeof BusinessOrderByRelevanceFieldEnum]


  export const BusinessAddressOrderByRelevanceFieldEnum: {
    address: 'address'
  };

  export type BusinessAddressOrderByRelevanceFieldEnum = (typeof BusinessAddressOrderByRelevanceFieldEnum)[keyof typeof BusinessAddressOrderByRelevanceFieldEnum]


  export const ReviewsOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ReviewsOrderByRelevanceFieldEnum = (typeof ReviewsOrderByRelevanceFieldEnum)[keyof typeof ReviewsOrderByRelevanceFieldEnum]


  export const RichReviewContentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type RichReviewContentOrderByRelevanceFieldEnum = (typeof RichReviewContentOrderByRelevanceFieldEnum)[keyof typeof RichReviewContentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'VerificationTokenAction'
   */
  export type EnumVerificationTokenActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationTokenAction'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewsListRelationFilter
    admins?: BusinessAdminListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewsOrderByRelationAggregateInput
    admins?: BusinessAdminOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewsListRelationFilter
    admins?: BusinessAdminListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: IntFilter<"VerificationToken"> | number
    email?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
    action?: EnumVerificationTokenActionFilter<"VerificationToken"> | $Enums.VerificationTokenAction
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    action?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email_action?: VerificationTokenEmailActionCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    email?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"VerificationToken"> | Date | string
    action?: EnumVerificationTokenActionFilter<"VerificationToken"> | $Enums.VerificationTokenAction
  }, "id" | "email_action">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    action?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _avg?: VerificationTokenAvgOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
    _sum?: VerificationTokenSumOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VerificationToken"> | number
    email?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
    action?: EnumVerificationTokenActionWithAggregatesFilter<"VerificationToken"> | $Enums.VerificationTokenAction
  }

  export type BusinessCategoryWhereInput = {
    AND?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    OR?: BusinessCategoryWhereInput[]
    NOT?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    id?: IntFilter<"BusinessCategory"> | number
    name?: StringFilter<"BusinessCategory"> | string
    description?: StringFilter<"BusinessCategory"> | string
    createdAt?: DateTimeFilter<"BusinessCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCategory"> | Date | string
    businesses?: BusinessListRelationFilter
  }

  export type BusinessCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businesses?: BusinessOrderByRelationAggregateInput
    _relevance?: BusinessCategoryOrderByRelevanceInput
  }

  export type BusinessCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    OR?: BusinessCategoryWhereInput[]
    NOT?: BusinessCategoryWhereInput | BusinessCategoryWhereInput[]
    name?: StringFilter<"BusinessCategory"> | string
    description?: StringFilter<"BusinessCategory"> | string
    createdAt?: DateTimeFilter<"BusinessCategory"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessCategory"> | Date | string
    businesses?: BusinessListRelationFilter
  }, "id">

  export type BusinessCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCategoryCountOrderByAggregateInput
    _avg?: BusinessCategoryAvgOrderByAggregateInput
    _max?: BusinessCategoryMaxOrderByAggregateInput
    _min?: BusinessCategoryMinOrderByAggregateInput
    _sum?: BusinessCategorySumOrderByAggregateInput
  }

  export type BusinessCategoryScalarWhereWithAggregatesInput = {
    AND?: BusinessCategoryScalarWhereWithAggregatesInput | BusinessCategoryScalarWhereWithAggregatesInput[]
    OR?: BusinessCategoryScalarWhereWithAggregatesInput[]
    NOT?: BusinessCategoryScalarWhereWithAggregatesInput | BusinessCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessCategory"> | number
    name?: StringWithAggregatesFilter<"BusinessCategory"> | string
    description?: StringWithAggregatesFilter<"BusinessCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessCategory"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    photo?: StringFilter<"Business"> | string
    link?: StringNullableFilter<"Business"> | string | null
    summary?: StringFilter<"Business"> | string
    richContent?: StringFilter<"Business"> | string
    isActive?: BoolFilter<"Business"> | boolean
    isInsideMall?: BoolFilter<"Business"> | boolean
    description?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    categoryId?: IntFilter<"Business"> | number
    category?: XOR<BusinessCategoryScalarRelationFilter, BusinessCategoryWhereInput>
    addresses?: BusinessAddressListRelationFilter
    reviews?: ReviewsListRelationFilter
    admins?: BusinessAdminListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    link?: SortOrderInput | SortOrder
    summary?: SortOrder
    richContent?: SortOrder
    isActive?: SortOrder
    isInsideMall?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: BusinessCategoryOrderByWithRelationInput
    addresses?: BusinessAddressOrderByRelationAggregateInput
    reviews?: ReviewsOrderByRelationAggregateInput
    admins?: BusinessAdminOrderByRelationAggregateInput
    _relevance?: BusinessOrderByRelevanceInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    photo?: StringFilter<"Business"> | string
    link?: StringNullableFilter<"Business"> | string | null
    summary?: StringFilter<"Business"> | string
    richContent?: StringFilter<"Business"> | string
    isActive?: BoolFilter<"Business"> | boolean
    isInsideMall?: BoolFilter<"Business"> | boolean
    description?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    categoryId?: IntFilter<"Business"> | number
    category?: XOR<BusinessCategoryScalarRelationFilter, BusinessCategoryWhereInput>
    addresses?: BusinessAddressListRelationFilter
    reviews?: ReviewsListRelationFilter
    admins?: BusinessAdminListRelationFilter
  }, "id">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    link?: SortOrderInput | SortOrder
    summary?: SortOrder
    richContent?: SortOrder
    isActive?: SortOrder
    isInsideMall?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    name?: StringWithAggregatesFilter<"Business"> | string
    email?: StringWithAggregatesFilter<"Business"> | string
    photo?: StringWithAggregatesFilter<"Business"> | string
    link?: StringNullableWithAggregatesFilter<"Business"> | string | null
    summary?: StringWithAggregatesFilter<"Business"> | string
    richContent?: StringWithAggregatesFilter<"Business"> | string
    isActive?: BoolWithAggregatesFilter<"Business"> | boolean
    isInsideMall?: BoolWithAggregatesFilter<"Business"> | boolean
    description?: StringNullableWithAggregatesFilter<"Business"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Business"> | number
  }

  export type BusinessAddressWhereInput = {
    AND?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    OR?: BusinessAddressWhereInput[]
    NOT?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    id?: IntFilter<"BusinessAddress"> | number
    businessId?: IntFilter<"BusinessAddress"> | number
    address?: StringFilter<"BusinessAddress"> | string
    latitude?: FloatFilter<"BusinessAddress"> | number
    longitude?: FloatFilter<"BusinessAddress"> | number
    createdAt?: DateTimeFilter<"BusinessAddress"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAddress"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }

  export type BusinessAddressOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    _relevance?: BusinessAddressOrderByRelevanceInput
  }

  export type BusinessAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    OR?: BusinessAddressWhereInput[]
    NOT?: BusinessAddressWhereInput | BusinessAddressWhereInput[]
    businessId?: IntFilter<"BusinessAddress"> | number
    address?: StringFilter<"BusinessAddress"> | string
    latitude?: FloatFilter<"BusinessAddress"> | number
    longitude?: FloatFilter<"BusinessAddress"> | number
    createdAt?: DateTimeFilter<"BusinessAddress"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAddress"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
  }, "id">

  export type BusinessAddressOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessAddressCountOrderByAggregateInput
    _avg?: BusinessAddressAvgOrderByAggregateInput
    _max?: BusinessAddressMaxOrderByAggregateInput
    _min?: BusinessAddressMinOrderByAggregateInput
    _sum?: BusinessAddressSumOrderByAggregateInput
  }

  export type BusinessAddressScalarWhereWithAggregatesInput = {
    AND?: BusinessAddressScalarWhereWithAggregatesInput | BusinessAddressScalarWhereWithAggregatesInput[]
    OR?: BusinessAddressScalarWhereWithAggregatesInput[]
    NOT?: BusinessAddressScalarWhereWithAggregatesInput | BusinessAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessAddress"> | number
    businessId?: IntWithAggregatesFilter<"BusinessAddress"> | number
    address?: StringWithAggregatesFilter<"BusinessAddress"> | string
    latitude?: FloatWithAggregatesFilter<"BusinessAddress"> | number
    longitude?: FloatWithAggregatesFilter<"BusinessAddress"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BusinessAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessAddress"> | Date | string
  }

  export type BusinessAdminWhereInput = {
    AND?: BusinessAdminWhereInput | BusinessAdminWhereInput[]
    OR?: BusinessAdminWhereInput[]
    NOT?: BusinessAdminWhereInput | BusinessAdminWhereInput[]
    id?: IntFilter<"BusinessAdmin"> | number
    businessId?: IntFilter<"BusinessAdmin"> | number
    userId?: IntFilter<"BusinessAdmin"> | number
    createdAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BusinessAdminOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BusinessAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    businessId_userId?: BusinessAdminBusinessIdUserIdCompoundUniqueInput
    AND?: BusinessAdminWhereInput | BusinessAdminWhereInput[]
    OR?: BusinessAdminWhereInput[]
    NOT?: BusinessAdminWhereInput | BusinessAdminWhereInput[]
    businessId?: IntFilter<"BusinessAdmin"> | number
    userId?: IntFilter<"BusinessAdmin"> | number
    createdAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "businessId_userId">

  export type BusinessAdminOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessAdminCountOrderByAggregateInput
    _avg?: BusinessAdminAvgOrderByAggregateInput
    _max?: BusinessAdminMaxOrderByAggregateInput
    _min?: BusinessAdminMinOrderByAggregateInput
    _sum?: BusinessAdminSumOrderByAggregateInput
  }

  export type BusinessAdminScalarWhereWithAggregatesInput = {
    AND?: BusinessAdminScalarWhereWithAggregatesInput | BusinessAdminScalarWhereWithAggregatesInput[]
    OR?: BusinessAdminScalarWhereWithAggregatesInput[]
    NOT?: BusinessAdminScalarWhereWithAggregatesInput | BusinessAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessAdmin"> | number
    businessId?: IntWithAggregatesFilter<"BusinessAdmin"> | number
    userId?: IntWithAggregatesFilter<"BusinessAdmin"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BusinessAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessAdmin"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    businessId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    richContent?: XOR<RichReviewContentNullableScalarRelationFilter, RichReviewContentWhereInput> | null
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    richContent?: RichReviewContentOrderByWithRelationInput
    _relevance?: ReviewsOrderByRelevanceInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    businessId_userId?: ReviewsBusinessIdUserIdCompoundUniqueInput
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    businessId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    richContent?: XOR<RichReviewContentNullableScalarRelationFilter, RichReviewContentWhereInput> | null
  }, "id" | "businessId_userId">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    businessId?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type RichReviewContentWhereInput = {
    AND?: RichReviewContentWhereInput | RichReviewContentWhereInput[]
    OR?: RichReviewContentWhereInput[]
    NOT?: RichReviewContentWhereInput | RichReviewContentWhereInput[]
    id?: IntFilter<"RichReviewContent"> | number
    content?: StringFilter<"RichReviewContent"> | string
    createdAt?: DateTimeFilter<"RichReviewContent"> | Date | string
    updatedAt?: DateTimeFilter<"RichReviewContent"> | Date | string
    reviewId?: IntFilter<"RichReviewContent"> | number
    review?: XOR<ReviewsNullableScalarRelationFilter, ReviewsWhereInput> | null
  }

  export type RichReviewContentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    review?: ReviewsOrderByWithRelationInput
    _relevance?: RichReviewContentOrderByRelevanceInput
  }

  export type RichReviewContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reviewId?: number
    AND?: RichReviewContentWhereInput | RichReviewContentWhereInput[]
    OR?: RichReviewContentWhereInput[]
    NOT?: RichReviewContentWhereInput | RichReviewContentWhereInput[]
    content?: StringFilter<"RichReviewContent"> | string
    createdAt?: DateTimeFilter<"RichReviewContent"> | Date | string
    updatedAt?: DateTimeFilter<"RichReviewContent"> | Date | string
    review?: XOR<ReviewsNullableScalarRelationFilter, ReviewsWhereInput> | null
  }, "id" | "reviewId">

  export type RichReviewContentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
    _count?: RichReviewContentCountOrderByAggregateInput
    _avg?: RichReviewContentAvgOrderByAggregateInput
    _max?: RichReviewContentMaxOrderByAggregateInput
    _min?: RichReviewContentMinOrderByAggregateInput
    _sum?: RichReviewContentSumOrderByAggregateInput
  }

  export type RichReviewContentScalarWhereWithAggregatesInput = {
    AND?: RichReviewContentScalarWhereWithAggregatesInput | RichReviewContentScalarWhereWithAggregatesInput[]
    OR?: RichReviewContentScalarWhereWithAggregatesInput[]
    NOT?: RichReviewContentScalarWhereWithAggregatesInput | RichReviewContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RichReviewContent"> | number
    content?: StringWithAggregatesFilter<"RichReviewContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RichReviewContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RichReviewContent"> | Date | string
    reviewId?: IntWithAggregatesFilter<"RichReviewContent"> | number
  }

  export type UserCreateInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    admins?: BusinessAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    admins?: BusinessAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    admins?: BusinessAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    action: $Enums.VerificationTokenAction
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    action: $Enums.VerificationTokenAction
  }

  export type VerificationTokenUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumVerificationTokenActionFieldUpdateOperationsInput | $Enums.VerificationTokenAction
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumVerificationTokenActionFieldUpdateOperationsInput | $Enums.VerificationTokenAction
  }

  export type VerificationTokenCreateManyInput = {
    id?: number
    email: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    action: $Enums.VerificationTokenAction
  }

  export type VerificationTokenUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumVerificationTokenActionFieldUpdateOperationsInput | $Enums.VerificationTokenAction
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: EnumVerificationTokenActionFieldUpdateOperationsInput | $Enums.VerificationTokenAction
  }

  export type BusinessCategoryCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businesses?: BusinessCreateNestedManyWithoutCategoryInput
  }

  export type BusinessCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    businesses?: BusinessUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type BusinessCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businesses?: BusinessUpdateManyWithoutCategoryNestedInput
  }

  export type BusinessCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businesses?: BusinessUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BusinessCategoryCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BusinessCategoryCreateNestedOneWithoutBusinessesInput
    addresses?: BusinessAddressCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    addresses?: BusinessAddressUncheckedCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BusinessCategoryUpdateOneRequiredWithoutBusinessesNestedInput
    addresses?: BusinessAddressUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    addresses?: BusinessAddressUncheckedUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type BusinessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type BusinessAddressCreateInput = {
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAddressesInput
  }

  export type BusinessAddressUncheckedCreateInput = {
    id?: number
    businessId: number
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAddressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type BusinessAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressCreateManyInput = {
    id?: number
    businessId: number
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAddressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAdminsInput
    user: UserCreateNestedOneWithoutAdminsInput
  }

  export type BusinessAdminUncheckedCreateInput = {
    id?: number
    businessId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAdminsNestedInput
    user?: UserUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type BusinessAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminCreateManyInput = {
    id?: number
    businessId: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
    richContent?: RichReviewContentCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    businessId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    richContent?: RichReviewContentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    richContent?: RichReviewContentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richContent?: RichReviewContentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsCreateManyInput = {
    id?: number
    businessId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichReviewContentCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewsCreateNestedOneWithoutRichContentInput
  }

  export type RichReviewContentUncheckedCreateInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
  }

  export type RichReviewContentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewsUpdateOneWithoutRichContentNestedInput
  }

  export type RichReviewContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type RichReviewContentCreateManyInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
  }

  export type RichReviewContentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichReviewContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type BusinessAdminListRelationFilter = {
    every?: BusinessAdminWhereInput
    some?: BusinessAdminWhereInput
    none?: BusinessAdminWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumVerificationTokenActionFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenAction | EnumVerificationTokenActionFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenAction[]
    notIn?: $Enums.VerificationTokenAction[]
    not?: NestedEnumVerificationTokenActionFilter<$PrismaModel> | $Enums.VerificationTokenAction
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenEmailActionCompoundUniqueInput = {
    email: string
    action: $Enums.VerificationTokenAction
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    action?: SortOrder
  }

  export type VerificationTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    action?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    action?: SortOrder
  }

  export type VerificationTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumVerificationTokenActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenAction | EnumVerificationTokenActionFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenAction[]
    notIn?: $Enums.VerificationTokenAction[]
    not?: NestedEnumVerificationTokenActionWithAggregatesFilter<$PrismaModel> | $Enums.VerificationTokenAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTokenActionFilter<$PrismaModel>
    _max?: NestedEnumVerificationTokenActionFilter<$PrismaModel>
  }

  export type BusinessListRelationFilter = {
    every?: BusinessWhereInput
    some?: BusinessWhereInput
    none?: BusinessWhereInput
  }

  export type BusinessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCategoryOrderByRelevanceInput = {
    fields: BusinessCategoryOrderByRelevanceFieldEnum | BusinessCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusinessCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BusinessCategoryScalarRelationFilter = {
    is?: BusinessCategoryWhereInput
    isNot?: BusinessCategoryWhereInput
  }

  export type BusinessAddressListRelationFilter = {
    every?: BusinessAddressWhereInput
    some?: BusinessAddressWhereInput
    none?: BusinessAddressWhereInput
  }

  export type BusinessAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessOrderByRelevanceInput = {
    fields: BusinessOrderByRelevanceFieldEnum | BusinessOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    link?: SortOrder
    summary?: SortOrder
    richContent?: SortOrder
    isActive?: SortOrder
    isInsideMall?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    link?: SortOrder
    summary?: SortOrder
    richContent?: SortOrder
    isActive?: SortOrder
    isInsideMall?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    link?: SortOrder
    summary?: SortOrder
    richContent?: SortOrder
    isActive?: SortOrder
    isInsideMall?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type BusinessAddressOrderByRelevanceInput = {
    fields: BusinessAddressOrderByRelevanceFieldEnum | BusinessAddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BusinessAddressCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type BusinessAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAddressMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAddressSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BusinessAdminBusinessIdUserIdCompoundUniqueInput = {
    businessId: number
    userId: number
  }

  export type BusinessAdminCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAdminAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
  }

  export type BusinessAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAdminMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessAdminSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
  }

  export type RichReviewContentNullableScalarRelationFilter = {
    is?: RichReviewContentWhereInput | null
    isNot?: RichReviewContentWhereInput | null
  }

  export type ReviewsOrderByRelevanceInput = {
    fields: ReviewsOrderByRelevanceFieldEnum | ReviewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewsBusinessIdUserIdCompoundUniqueInput = {
    businessId: number
    userId: number
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsNullableScalarRelationFilter = {
    is?: ReviewsWhereInput | null
    isNot?: ReviewsWhereInput | null
  }

  export type RichReviewContentOrderByRelevanceInput = {
    fields: RichReviewContentOrderByRelevanceFieldEnum | RichReviewContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RichReviewContentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
  }

  export type RichReviewContentAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type RichReviewContentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
  }

  export type RichReviewContentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewId?: SortOrder
  }

  export type RichReviewContentSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BusinessAdminCreateNestedManyWithoutUserInput = {
    create?: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput> | BusinessAdminCreateWithoutUserInput[] | BusinessAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutUserInput | BusinessAdminCreateOrConnectWithoutUserInput[]
    createMany?: BusinessAdminCreateManyUserInputEnvelope
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BusinessAdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput> | BusinessAdminCreateWithoutUserInput[] | BusinessAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutUserInput | BusinessAdminCreateOrConnectWithoutUserInput[]
    createMany?: BusinessAdminCreateManyUserInputEnvelope
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BusinessAdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput> | BusinessAdminCreateWithoutUserInput[] | BusinessAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutUserInput | BusinessAdminCreateOrConnectWithoutUserInput[]
    upsert?: BusinessAdminUpsertWithWhereUniqueWithoutUserInput | BusinessAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusinessAdminCreateManyUserInputEnvelope
    set?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    disconnect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    delete?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    update?: BusinessAdminUpdateWithWhereUniqueWithoutUserInput | BusinessAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusinessAdminUpdateManyWithWhereWithoutUserInput | BusinessAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BusinessAdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput> | BusinessAdminCreateWithoutUserInput[] | BusinessAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutUserInput | BusinessAdminCreateOrConnectWithoutUserInput[]
    upsert?: BusinessAdminUpsertWithWhereUniqueWithoutUserInput | BusinessAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BusinessAdminCreateManyUserInputEnvelope
    set?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    disconnect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    delete?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    update?: BusinessAdminUpdateWithWhereUniqueWithoutUserInput | BusinessAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BusinessAdminUpdateManyWithWhereWithoutUserInput | BusinessAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
  }

  export type EnumVerificationTokenActionFieldUpdateOperationsInput = {
    set?: $Enums.VerificationTokenAction
  }

  export type BusinessCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type BusinessUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
  }

  export type BusinessUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCategoryInput | BusinessUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCategoryInput | BusinessUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCategoryInput | BusinessUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type BusinessUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput> | BusinessCreateWithoutCategoryInput[] | BusinessUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BusinessCreateOrConnectWithoutCategoryInput | BusinessCreateOrConnectWithoutCategoryInput[]
    upsert?: BusinessUpsertWithWhereUniqueWithoutCategoryInput | BusinessUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BusinessCreateManyCategoryInputEnvelope
    set?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    disconnect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    delete?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    connect?: BusinessWhereUniqueInput | BusinessWhereUniqueInput[]
    update?: BusinessUpdateWithWhereUniqueWithoutCategoryInput | BusinessUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BusinessUpdateManyWithWhereWithoutCategoryInput | BusinessUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
  }

  export type BusinessCategoryCreateNestedOneWithoutBusinessesInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessesInput, BusinessCategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessesInput
    connect?: BusinessCategoryWhereUniqueInput
  }

  export type BusinessAddressCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput> | BusinessAddressCreateWithoutBusinessInput[] | BusinessAddressUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput | BusinessAddressCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessAddressCreateManyBusinessInputEnvelope
    connect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput> | ReviewsCreateWithoutBusinessInput[] | ReviewsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutBusinessInput | ReviewsCreateOrConnectWithoutBusinessInput[]
    createMany?: ReviewsCreateManyBusinessInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BusinessAdminCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput> | BusinessAdminCreateWithoutBusinessInput[] | BusinessAdminUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutBusinessInput | BusinessAdminCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessAdminCreateManyBusinessInputEnvelope
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
  }

  export type BusinessAddressUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput> | BusinessAddressCreateWithoutBusinessInput[] | BusinessAddressUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput | BusinessAddressCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessAddressCreateManyBusinessInputEnvelope
    connect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput> | ReviewsCreateWithoutBusinessInput[] | ReviewsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutBusinessInput | ReviewsCreateOrConnectWithoutBusinessInput[]
    createMany?: ReviewsCreateManyBusinessInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BusinessAdminUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput> | BusinessAdminCreateWithoutBusinessInput[] | BusinessAdminUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutBusinessInput | BusinessAdminCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessAdminCreateManyBusinessInputEnvelope
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BusinessCategoryUpdateOneRequiredWithoutBusinessesNestedInput = {
    create?: XOR<BusinessCategoryCreateWithoutBusinessesInput, BusinessCategoryUncheckedCreateWithoutBusinessesInput>
    connectOrCreate?: BusinessCategoryCreateOrConnectWithoutBusinessesInput
    upsert?: BusinessCategoryUpsertWithoutBusinessesInput
    connect?: BusinessCategoryWhereUniqueInput
    update?: XOR<XOR<BusinessCategoryUpdateToOneWithWhereWithoutBusinessesInput, BusinessCategoryUpdateWithoutBusinessesInput>, BusinessCategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type BusinessAddressUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput> | BusinessAddressCreateWithoutBusinessInput[] | BusinessAddressUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput | BusinessAddressCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessAddressUpsertWithWhereUniqueWithoutBusinessInput | BusinessAddressUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessAddressCreateManyBusinessInputEnvelope
    set?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    disconnect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    delete?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    connect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    update?: BusinessAddressUpdateWithWhereUniqueWithoutBusinessInput | BusinessAddressUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessAddressUpdateManyWithWhereWithoutBusinessInput | BusinessAddressUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessAddressScalarWhereInput | BusinessAddressScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput> | ReviewsCreateWithoutBusinessInput[] | ReviewsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutBusinessInput | ReviewsCreateOrConnectWithoutBusinessInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutBusinessInput | ReviewsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReviewsCreateManyBusinessInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutBusinessInput | ReviewsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutBusinessInput | ReviewsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BusinessAdminUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput> | BusinessAdminCreateWithoutBusinessInput[] | BusinessAdminUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutBusinessInput | BusinessAdminCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessAdminUpsertWithWhereUniqueWithoutBusinessInput | BusinessAdminUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessAdminCreateManyBusinessInputEnvelope
    set?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    disconnect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    delete?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    update?: BusinessAdminUpdateWithWhereUniqueWithoutBusinessInput | BusinessAdminUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessAdminUpdateManyWithWhereWithoutBusinessInput | BusinessAdminUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
  }

  export type BusinessAddressUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput> | BusinessAddressCreateWithoutBusinessInput[] | BusinessAddressUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAddressCreateOrConnectWithoutBusinessInput | BusinessAddressCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessAddressUpsertWithWhereUniqueWithoutBusinessInput | BusinessAddressUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessAddressCreateManyBusinessInputEnvelope
    set?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    disconnect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    delete?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    connect?: BusinessAddressWhereUniqueInput | BusinessAddressWhereUniqueInput[]
    update?: BusinessAddressUpdateWithWhereUniqueWithoutBusinessInput | BusinessAddressUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessAddressUpdateManyWithWhereWithoutBusinessInput | BusinessAddressUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessAddressScalarWhereInput | BusinessAddressScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput> | ReviewsCreateWithoutBusinessInput[] | ReviewsUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutBusinessInput | ReviewsCreateOrConnectWithoutBusinessInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutBusinessInput | ReviewsUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ReviewsCreateManyBusinessInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutBusinessInput | ReviewsUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutBusinessInput | ReviewsUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type BusinessAdminUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput> | BusinessAdminCreateWithoutBusinessInput[] | BusinessAdminUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessAdminCreateOrConnectWithoutBusinessInput | BusinessAdminCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessAdminUpsertWithWhereUniqueWithoutBusinessInput | BusinessAdminUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessAdminCreateManyBusinessInputEnvelope
    set?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    disconnect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    delete?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    connect?: BusinessAdminWhereUniqueInput | BusinessAdminWhereUniqueInput[]
    update?: BusinessAdminUpdateWithWhereUniqueWithoutBusinessInput | BusinessAdminUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessAdminUpdateManyWithWhereWithoutBusinessInput | BusinessAdminUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutAddressesInput = {
    create?: XOR<BusinessCreateWithoutAddressesInput, BusinessUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressesInput
    connect?: BusinessWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<BusinessCreateWithoutAddressesInput, BusinessUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAddressesInput
    upsert?: BusinessUpsertWithoutAddressesInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAddressesInput, BusinessUpdateWithoutAddressesInput>, BusinessUncheckedUpdateWithoutAddressesInput>
  }

  export type BusinessCreateNestedOneWithoutAdminsInput = {
    create?: XOR<BusinessCreateWithoutAdminsInput, BusinessUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAdminsInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdminsInput = {
    create?: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminsInput
    connect?: UserWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<BusinessCreateWithoutAdminsInput, BusinessUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutAdminsInput
    upsert?: BusinessUpsertWithoutAdminsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutAdminsInput, BusinessUpdateWithoutAdminsInput>, BusinessUncheckedUpdateWithoutAdminsInput>
  }

  export type UserUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminsInput
    upsert?: UserUpsertWithoutAdminsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminsInput, UserUpdateWithoutAdminsInput>, UserUncheckedUpdateWithoutAdminsInput>
  }

  export type BusinessCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BusinessCreateWithoutReviewsInput, BusinessUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReviewsInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type RichReviewContentCreateNestedOneWithoutReviewInput = {
    create?: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RichReviewContentCreateOrConnectWithoutReviewInput
    connect?: RichReviewContentWhereUniqueInput
  }

  export type RichReviewContentUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RichReviewContentCreateOrConnectWithoutReviewInput
    connect?: RichReviewContentWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BusinessCreateWithoutReviewsInput, BusinessUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutReviewsInput
    upsert?: BusinessUpsertWithoutReviewsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutReviewsInput, BusinessUpdateWithoutReviewsInput>, BusinessUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type RichReviewContentUpdateOneWithoutReviewNestedInput = {
    create?: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RichReviewContentCreateOrConnectWithoutReviewInput
    upsert?: RichReviewContentUpsertWithoutReviewInput
    disconnect?: RichReviewContentWhereInput | boolean
    delete?: RichReviewContentWhereInput | boolean
    connect?: RichReviewContentWhereUniqueInput
    update?: XOR<XOR<RichReviewContentUpdateToOneWithWhereWithoutReviewInput, RichReviewContentUpdateWithoutReviewInput>, RichReviewContentUncheckedUpdateWithoutReviewInput>
  }

  export type RichReviewContentUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RichReviewContentCreateOrConnectWithoutReviewInput
    upsert?: RichReviewContentUpsertWithoutReviewInput
    disconnect?: RichReviewContentWhereInput | boolean
    delete?: RichReviewContentWhereInput | boolean
    connect?: RichReviewContentWhereUniqueInput
    update?: XOR<XOR<RichReviewContentUpdateToOneWithWhereWithoutReviewInput, RichReviewContentUpdateWithoutReviewInput>, RichReviewContentUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewsCreateNestedOneWithoutRichContentInput = {
    create?: XOR<ReviewsCreateWithoutRichContentInput, ReviewsUncheckedCreateWithoutRichContentInput>
    connectOrCreate?: ReviewsCreateOrConnectWithoutRichContentInput
    connect?: ReviewsWhereUniqueInput
  }

  export type ReviewsUpdateOneWithoutRichContentNestedInput = {
    create?: XOR<ReviewsCreateWithoutRichContentInput, ReviewsUncheckedCreateWithoutRichContentInput>
    connectOrCreate?: ReviewsCreateOrConnectWithoutRichContentInput
    upsert?: ReviewsUpsertWithoutRichContentInput
    disconnect?: ReviewsWhereInput | boolean
    delete?: ReviewsWhereInput | boolean
    connect?: ReviewsWhereUniqueInput
    update?: XOR<XOR<ReviewsUpdateToOneWithWhereWithoutRichContentInput, ReviewsUpdateWithoutRichContentInput>, ReviewsUncheckedUpdateWithoutRichContentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationTokenActionFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenAction | EnumVerificationTokenActionFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenAction[]
    notIn?: $Enums.VerificationTokenAction[]
    not?: NestedEnumVerificationTokenActionFilter<$PrismaModel> | $Enums.VerificationTokenAction
  }

  export type NestedEnumVerificationTokenActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationTokenAction | EnumVerificationTokenActionFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationTokenAction[]
    notIn?: $Enums.VerificationTokenAction[]
    not?: NestedEnumVerificationTokenActionWithAggregatesFilter<$PrismaModel> | $Enums.VerificationTokenAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTokenActionFilter<$PrismaModel>
    _max?: NestedEnumVerificationTokenActionFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReviewsCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutReviewsInput
    richContent?: RichReviewContentCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: number
    businessId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    richContent?: RichReviewContentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessAdminCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutAdminsInput
  }

  export type BusinessAdminUncheckedCreateWithoutUserInput = {
    id?: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminCreateOrConnectWithoutUserInput = {
    where: BusinessAdminWhereUniqueInput
    create: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput>
  }

  export type BusinessAdminCreateManyUserInputEnvelope = {
    data: BusinessAdminCreateManyUserInput | BusinessAdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    businessId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type BusinessAdminUpsertWithWhereUniqueWithoutUserInput = {
    where: BusinessAdminWhereUniqueInput
    update: XOR<BusinessAdminUpdateWithoutUserInput, BusinessAdminUncheckedUpdateWithoutUserInput>
    create: XOR<BusinessAdminCreateWithoutUserInput, BusinessAdminUncheckedCreateWithoutUserInput>
  }

  export type BusinessAdminUpdateWithWhereUniqueWithoutUserInput = {
    where: BusinessAdminWhereUniqueInput
    data: XOR<BusinessAdminUpdateWithoutUserInput, BusinessAdminUncheckedUpdateWithoutUserInput>
  }

  export type BusinessAdminUpdateManyWithWhereWithoutUserInput = {
    where: BusinessAdminScalarWhereInput
    data: XOR<BusinessAdminUpdateManyMutationInput, BusinessAdminUncheckedUpdateManyWithoutUserInput>
  }

  export type BusinessAdminScalarWhereInput = {
    AND?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
    OR?: BusinessAdminScalarWhereInput[]
    NOT?: BusinessAdminScalarWhereInput | BusinessAdminScalarWhereInput[]
    id?: IntFilter<"BusinessAdmin"> | number
    businessId?: IntFilter<"BusinessAdmin"> | number
    userId?: IntFilter<"BusinessAdmin"> | number
    createdAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAdmin"> | Date | string
  }

  export type BusinessCreateWithoutCategoryInput = {
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: BusinessAddressCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: BusinessAddressUncheckedCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessCreateManyCategoryInputEnvelope = {
    data: BusinessCreateManyCategoryInput | BusinessCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    update: XOR<BusinessUpdateWithoutCategoryInput, BusinessUncheckedUpdateWithoutCategoryInput>
    create: XOR<BusinessCreateWithoutCategoryInput, BusinessUncheckedCreateWithoutCategoryInput>
  }

  export type BusinessUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BusinessWhereUniqueInput
    data: XOR<BusinessUpdateWithoutCategoryInput, BusinessUncheckedUpdateWithoutCategoryInput>
  }

  export type BusinessUpdateManyWithWhereWithoutCategoryInput = {
    where: BusinessScalarWhereInput
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BusinessScalarWhereInput = {
    AND?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    OR?: BusinessScalarWhereInput[]
    NOT?: BusinessScalarWhereInput | BusinessScalarWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    photo?: StringFilter<"Business"> | string
    link?: StringNullableFilter<"Business"> | string | null
    summary?: StringFilter<"Business"> | string
    richContent?: StringFilter<"Business"> | string
    isActive?: BoolFilter<"Business"> | boolean
    isInsideMall?: BoolFilter<"Business"> | boolean
    description?: StringNullableFilter<"Business"> | string | null
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    categoryId?: IntFilter<"Business"> | number
  }

  export type BusinessCategoryCreateWithoutBusinessesInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessCategoryUncheckedCreateWithoutBusinessesInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessCategoryCreateOrConnectWithoutBusinessesInput = {
    where: BusinessCategoryWhereUniqueInput
    create: XOR<BusinessCategoryCreateWithoutBusinessesInput, BusinessCategoryUncheckedCreateWithoutBusinessesInput>
  }

  export type BusinessAddressCreateWithoutBusinessInput = {
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAddressUncheckedCreateWithoutBusinessInput = {
    id?: number
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAddressCreateOrConnectWithoutBusinessInput = {
    where: BusinessAddressWhereUniqueInput
    create: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessAddressCreateManyBusinessInputEnvelope = {
    data: BusinessAddressCreateManyBusinessInput | BusinessAddressCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutBusinessInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    richContent?: RichReviewContentCreateNestedOneWithoutReviewInput
  }

  export type ReviewsUncheckedCreateWithoutBusinessInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    richContent?: RichReviewContentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewsCreateOrConnectWithoutBusinessInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput>
  }

  export type ReviewsCreateManyBusinessInputEnvelope = {
    data: ReviewsCreateManyBusinessInput | ReviewsCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessAdminCreateWithoutBusinessInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminsInput
  }

  export type BusinessAdminUncheckedCreateWithoutBusinessInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminCreateOrConnectWithoutBusinessInput = {
    where: BusinessAdminWhereUniqueInput
    create: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessAdminCreateManyBusinessInputEnvelope = {
    data: BusinessAdminCreateManyBusinessInput | BusinessAdminCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessCategoryUpsertWithoutBusinessesInput = {
    update: XOR<BusinessCategoryUpdateWithoutBusinessesInput, BusinessCategoryUncheckedUpdateWithoutBusinessesInput>
    create: XOR<BusinessCategoryCreateWithoutBusinessesInput, BusinessCategoryUncheckedCreateWithoutBusinessesInput>
    where?: BusinessCategoryWhereInput
  }

  export type BusinessCategoryUpdateToOneWithWhereWithoutBusinessesInput = {
    where?: BusinessCategoryWhereInput
    data: XOR<BusinessCategoryUpdateWithoutBusinessesInput, BusinessCategoryUncheckedUpdateWithoutBusinessesInput>
  }

  export type BusinessCategoryUpdateWithoutBusinessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCategoryUncheckedUpdateWithoutBusinessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessAddressWhereUniqueInput
    update: XOR<BusinessAddressUpdateWithoutBusinessInput, BusinessAddressUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessAddressCreateWithoutBusinessInput, BusinessAddressUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessAddressUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessAddressWhereUniqueInput
    data: XOR<BusinessAddressUpdateWithoutBusinessInput, BusinessAddressUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessAddressUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessAddressScalarWhereInput
    data: XOR<BusinessAddressUpdateManyMutationInput, BusinessAddressUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessAddressScalarWhereInput = {
    AND?: BusinessAddressScalarWhereInput | BusinessAddressScalarWhereInput[]
    OR?: BusinessAddressScalarWhereInput[]
    NOT?: BusinessAddressScalarWhereInput | BusinessAddressScalarWhereInput[]
    id?: IntFilter<"BusinessAddress"> | number
    businessId?: IntFilter<"BusinessAddress"> | number
    address?: StringFilter<"BusinessAddress"> | string
    latitude?: FloatFilter<"BusinessAddress"> | number
    longitude?: FloatFilter<"BusinessAddress"> | number
    createdAt?: DateTimeFilter<"BusinessAddress"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessAddress"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutBusinessInput, ReviewsUncheckedUpdateWithoutBusinessInput>
    create: XOR<ReviewsCreateWithoutBusinessInput, ReviewsUncheckedCreateWithoutBusinessInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutBusinessInput, ReviewsUncheckedUpdateWithoutBusinessInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutBusinessInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessAdminUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessAdminWhereUniqueInput
    update: XOR<BusinessAdminUpdateWithoutBusinessInput, BusinessAdminUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessAdminCreateWithoutBusinessInput, BusinessAdminUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessAdminUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessAdminWhereUniqueInput
    data: XOR<BusinessAdminUpdateWithoutBusinessInput, BusinessAdminUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessAdminUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessAdminScalarWhereInput
    data: XOR<BusinessAdminUpdateManyMutationInput, BusinessAdminUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessCreateWithoutAddressesInput = {
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BusinessCategoryCreateNestedOneWithoutBusinessesInput
    reviews?: ReviewsCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAddressesInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAddressesInput, BusinessUncheckedCreateWithoutAddressesInput>
  }

  export type BusinessUpsertWithoutAddressesInput = {
    update: XOR<BusinessUpdateWithoutAddressesInput, BusinessUncheckedUpdateWithoutAddressesInput>
    create: XOR<BusinessCreateWithoutAddressesInput, BusinessUncheckedCreateWithoutAddressesInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAddressesInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAddressesInput, BusinessUncheckedUpdateWithoutAddressesInput>
  }

  export type BusinessUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BusinessCategoryUpdateOneRequiredWithoutBusinessesNestedInput
    reviews?: ReviewsUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutAdminsInput = {
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BusinessCategoryCreateNestedOneWithoutBusinessesInput
    addresses?: BusinessAddressCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutAdminsInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    addresses?: BusinessAddressUncheckedCreateNestedManyWithoutBusinessInput
    reviews?: ReviewsUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutAdminsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutAdminsInput, BusinessUncheckedCreateWithoutAdminsInput>
  }

  export type UserCreateWithoutAdminsInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminsInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
  }

  export type BusinessUpsertWithoutAdminsInput = {
    update: XOR<BusinessUpdateWithoutAdminsInput, BusinessUncheckedUpdateWithoutAdminsInput>
    create: XOR<BusinessCreateWithoutAdminsInput, BusinessUncheckedCreateWithoutAdminsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutAdminsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutAdminsInput, BusinessUncheckedUpdateWithoutAdminsInput>
  }

  export type BusinessUpdateWithoutAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BusinessCategoryUpdateOneRequiredWithoutBusinessesNestedInput
    addresses?: BusinessAddressUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    addresses?: BusinessAddressUncheckedUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserUpsertWithoutAdminsInput = {
    update: XOR<UserUpdateWithoutAdminsInput, UserUncheckedUpdateWithoutAdminsInput>
    create: XOR<UserCreateWithoutAdminsInput, UserUncheckedCreateWithoutAdminsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminsInput, UserUncheckedUpdateWithoutAdminsInput>
  }

  export type UserUpdateWithoutAdminsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BusinessCreateWithoutReviewsInput = {
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: BusinessCategoryCreateNestedOneWithoutBusinessesInput
    addresses?: BusinessAddressCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    addresses?: BusinessAddressUncheckedCreateNestedManyWithoutBusinessInput
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutReviewsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutReviewsInput, BusinessUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: BusinessAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    firstName?: string | null
    lastName?: string | null
    phone?: string | null
    hashedPassword?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    admins?: BusinessAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type RichReviewContentCreateWithoutReviewInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichReviewContentUncheckedCreateWithoutReviewInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichReviewContentCreateOrConnectWithoutReviewInput = {
    where: RichReviewContentWhereUniqueInput
    create: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
  }

  export type BusinessUpsertWithoutReviewsInput = {
    update: XOR<BusinessUpdateWithoutReviewsInput, BusinessUncheckedUpdateWithoutReviewsInput>
    create: XOR<BusinessCreateWithoutReviewsInput, BusinessUncheckedCreateWithoutReviewsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutReviewsInput, BusinessUncheckedUpdateWithoutReviewsInput>
  }

  export type BusinessUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: BusinessCategoryUpdateOneRequiredWithoutBusinessesNestedInput
    addresses?: BusinessAddressUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    addresses?: BusinessAddressUncheckedUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: BusinessAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admins?: BusinessAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RichReviewContentUpsertWithoutReviewInput = {
    update: XOR<RichReviewContentUpdateWithoutReviewInput, RichReviewContentUncheckedUpdateWithoutReviewInput>
    create: XOR<RichReviewContentCreateWithoutReviewInput, RichReviewContentUncheckedCreateWithoutReviewInput>
    where?: RichReviewContentWhereInput
  }

  export type RichReviewContentUpdateToOneWithWhereWithoutReviewInput = {
    where?: RichReviewContentWhereInput
    data: XOR<RichReviewContentUpdateWithoutReviewInput, RichReviewContentUncheckedUpdateWithoutReviewInput>
  }

  export type RichReviewContentUpdateWithoutReviewInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichReviewContentUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateWithoutRichContentInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutRichContentInput = {
    id?: number
    businessId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutRichContentInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutRichContentInput, ReviewsUncheckedCreateWithoutRichContentInput>
  }

  export type ReviewsUpsertWithoutRichContentInput = {
    update: XOR<ReviewsUpdateWithoutRichContentInput, ReviewsUncheckedUpdateWithoutRichContentInput>
    create: XOR<ReviewsCreateWithoutRichContentInput, ReviewsUncheckedCreateWithoutRichContentInput>
    where?: ReviewsWhereInput
  }

  export type ReviewsUpdateToOneWithWhereWithoutRichContentInput = {
    where?: ReviewsWhereInput
    data: XOR<ReviewsUpdateWithoutRichContentInput, ReviewsUncheckedUpdateWithoutRichContentInput>
  }

  export type ReviewsUpdateWithoutRichContentInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutRichContentInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyUserInput = {
    id?: number
    businessId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminCreateManyUserInput = {
    id?: number
    businessId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutReviewsNestedInput
    richContent?: RichReviewContentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richContent?: RichReviewContentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type BusinessAdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateManyCategoryInput = {
    id?: number
    name: string
    email: string
    photo: string
    link?: string | null
    summary: string
    richContent: string
    isActive?: boolean
    isInsideMall?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: BusinessAddressUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: BusinessAddressUncheckedUpdateManyWithoutBusinessNestedInput
    reviews?: ReviewsUncheckedUpdateManyWithoutBusinessNestedInput
    admins?: BusinessAdminUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: StringFieldUpdateOperationsInput | string
    richContent?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isInsideMall?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressCreateManyBusinessInput = {
    id?: number
    address: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyBusinessInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAdminCreateManyBusinessInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessAddressUpdateWithoutBusinessInput = {
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAddressUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutBusinessInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    richContent?: RichReviewContentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richContent?: RichReviewContentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewsUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminUpdateWithoutBusinessInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminsNestedInput
  }

  export type BusinessAdminUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessAdminUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}