import * as yup from 'yup';

const Schema = yup.object().shape({
  userId: yup.string().required('ユーザーIDは最低5文字です。').min(5),
  password: yup.string().required('パスワードは最低8文字です。').min(8),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'パスワードが一致しません。'),
});

export default Schema;
