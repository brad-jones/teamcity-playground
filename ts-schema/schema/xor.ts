/**
 * Get the keys of T without any keys of U.
 */
export type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};

/**
 * Restrict using either exclusively the keys of T or exclusively the keys of U.
 *
 * No unique keys of T can be used simultaneously with any unique keys of U.
 *
 * Example:
 * `const myVar: XOR<T, U>`
 *
 * More: https://github.com/maninak/ts-xor/tree/master#description
 */
export type XOR<T, U> = (T | U) extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

/**
 * see: https://github.com/microsoft/TypeScript/issues/14094#issuecomment-723571692
 */
export type AllXOR<T extends unknown[]> = T extends [infer Only] ? Only
  : T extends [infer A, infer B, ...infer Rest] ? AllXOR<[XOR<A, B>, ...Rest]>
  : never;
