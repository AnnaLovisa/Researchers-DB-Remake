// validate : (value, allValues, props) => error [optional] #

export const required = (allValues) => {
  if (!allValues) {
    return 'This field is required!'
  }
};