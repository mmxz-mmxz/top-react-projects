const arrayToObject = <T extends string>(arr: T[]): Record<T, string> =>
  arr.reduce(
    (acc, curr) => ({ ...acc, [curr as string]: "" }),
    {} as Record<T, string>,
  );

export { arrayToObject };
