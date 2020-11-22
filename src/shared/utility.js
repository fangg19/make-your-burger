export const updateObject = (oldObject, updatedProp) => {
  return {
    ...oldObject,
    ...updatedProp,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.minLength && isValid;
  }
  return isValid;
};
