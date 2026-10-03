interface HasId {
  id: string;
}

export function getById<Type extends HasId>(arg: Type[], id: string): Type {
  const foundItem: Type | undefined = arg.find((item) => item.id === id);
  if (!foundItem) {
    throw new Error("Item not found in the list");
  }
  return foundItem;
}

export function getIndexById<Type extends HasId>(
  arg: Type[],
  id: string,
): number {
  const foundIndex: number = arg.findIndex((item) => item.id === id);
  if (foundIndex === -1) {
    throw new Error("Index not found in the list");
  }
  return foundIndex;
}
