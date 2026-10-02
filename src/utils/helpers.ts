import { HasId } from "../types/contact";

export function getById<Type extends HasId>(arg: Type[], id: string): Type {
  const index = arg.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("Item not found in the list");
  }
  const foundItem = arg[index];

  return foundItem;
}
