export const exclude = <T>(obj: Record<string, T>, keys: string[]): Record<string, T> => {
  let newObj = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    const { [key]: removed, ...everythingElse } = newObj;
    newObj = everythingElse;
  }

  return newObj;
};

export const getRand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
