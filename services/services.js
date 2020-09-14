const checkRegExp = (key, value, regex, errorSetter) => {
  return regex.test(value)
    ? errorSetter({
        [key]: false,
      })
    : errorSetter({
        [key]: true,
      });
};
const handleChange = (event, regex, inputSetter, errorSetter) => {
  const { id, value } = event.target;
  inputSetter({ [id]: value });
  checkRegExp(id, value, regex, errorSetter);
};

export { handleChange };
