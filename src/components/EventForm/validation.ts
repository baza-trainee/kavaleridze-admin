import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required(),
  type: yup.string().required(),
  begin: yup.string(),
  end: yup.string(),
  summary: yup.string().required(),
  description: yup.string().required(),
  banner: yup.string().required(),
});
