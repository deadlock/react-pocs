import Joi from "@hapi/joi";

export const userSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name should not be empty",
  }),
  phone: Joi.number()
    .custom((value, helper) => {
      if (value.toString().length < 9) {
        return helper.error("number.min");
      }
      return value;
    })
    .required()
    .messages({
      "string.empty": "Phone should not be empty",
      "number.min": "Phone must have at least 9 numbers",
      "number.base": "Phone must have only numbers",
      "string.invalid": "Using custom method validation",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email should not be empty",
      "string.email": "Email should be valid",
    }),
});
