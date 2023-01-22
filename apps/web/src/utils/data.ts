export function exclude<T, Key extends keyof T>(
  object: T,
  ...keys: Key[]
): Omit<T, Key> {
  const newObj = { ...object };
  for (let key of keys) {
    delete newObj[key];
  }
  return newObj;
}
