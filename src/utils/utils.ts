export const isArrayWithData = <T extends unknown[]>(arrayData: T): boolean => {
  return Array.isArray(arrayData) && arrayData.length > 0
}
