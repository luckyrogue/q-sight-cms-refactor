import type { TFindLastParentId } from "@/components/private/administration/structure/list/structure-level/structure-level.types.ts";

export const findLastParentId: TFindLastParentId = (structureArray) => {
  let lastElement = structureArray[structureArray.length - 1];
  while (lastElement?.child && lastElement.child.length > 0) {
    lastElement = lastElement.child[lastElement.child.length - 1];
  }
  return lastElement?.id || null;
};
