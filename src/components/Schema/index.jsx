import * as yup from 'yup';

const Schema = yup.object().shape({
  userId: yup
    .string()
    .required('3文字以上、半角英数字。')
    .min(5)
    .matches(/^[A-Za-z0-9-_]+$/i),

  familyName: yup
    .string()
    .required('姓は必須です。')
    .max(50),

  givenName: yup
    .string()
    .required('名は必須です。')
    .max(50),

  password:yup
  .string()
  .required('パスワードは最低8文字です。')
  .min(8),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'パスワードが一致しません。'),
});

export default Schema;
