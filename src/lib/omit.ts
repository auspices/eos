export const omit = <T extends {}>(obj: T, ...keys: string[]) =>
  Object.entries(obj)
    .filter(([key]) => !keys.includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
