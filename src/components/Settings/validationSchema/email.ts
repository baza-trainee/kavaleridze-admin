import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  oldLogin: yup.string().email().required(),
  newLogin: yup.string().email().required(),
  repeatLogin: yup.string().email().required(),
})
