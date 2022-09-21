export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** Alternative to ` & ` operator */
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

// /** Like Merge, but also merges nested object types instead of just replacing the whole thing */
// export type MergeDeep<
//   A extends Record<string, any>,
//   B extends DeepPartialAny<A>
// > = {
//   [K in keyof A]: B[K] extends never
//     ? A[K]
//     : B[K] extends Record<string, any>
//     ? MergeDeep<A[K], B[K]>
//     : B[K];
// } & (A extends Record<string, any> ? Omit<B, keyof A> : A);

// /** Makes each property optional and turns each leaf property into any, allowing for type overrides by narrowing any. */
// type DeepPartialAny<T> = {
//   [P in keyof T]?: T[P] extends Record<string, any>
//     ? DeepPartialAny<T[P]>
//     : any;
// };
