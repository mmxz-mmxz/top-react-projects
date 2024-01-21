const arrayToObject = <T extends string[]>(arr: T): Record<T[number], string> =>
  arr.reduce(
    (acc, curr) => ({ ...acc, [curr]: "" }),
    {} as Record<T[number], string>,
  );

export { arrayToObject };
