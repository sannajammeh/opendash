export const ObjectAssign = <T extends object, Assignee>(
  target: T,
  objects: Assignee
) => {
  return Object.assign(target, objects);
};
