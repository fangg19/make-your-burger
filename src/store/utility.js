export const updateObject = (oldObject, updatedProp) => {
  return {
    ...oldObject,
    ...updatedProp,
  };
};
