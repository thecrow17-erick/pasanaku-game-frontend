import * as yup from "yup"

export const validationSignUp = yup.object({
  username: yup.string().required()  ,
  email:     yup.string().email().required(),
  password:  yup.string().min(8).required(),
  ci: yup.string().matches(/^[0-9]+$/, 'Debe contener solo numeros').required().max(10),
  address:   yup.string().min(8).required(),
})
