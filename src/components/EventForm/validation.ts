import * as yup from 'yup';

export const validationSchemaEventForm = yup.object().shape({
  title: yup.string().trim().required('Назва події'),
  type: yup.string().required('Тип події'),
  begin: yup.string().optional().nullable(),
  end: yup.string().optional().nullable(),
  summary: yup.string().trim().required('Скорочений опис події'),
  description: yup.string().trim().required('Розгорнутий опис події'),
  banner: yup.string().required('Зображення'),
});
