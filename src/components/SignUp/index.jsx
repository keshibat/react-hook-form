import React from 'react';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Schema from '../Schema';
import './SignUp.css';

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm({resolver: yupResolver(Schema)});

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>個人アカウント</h1>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <label>ユーザーID</label>
        <input type='text' name='userId' ref={register} />
        {errors.userId && <p>{errors.userId.message}</p>}

        <label>姓</label>
        <input type='text' name='familyName' ref={register} />
        {errors.familyName && <p>{errors.familyName.message}</p>}

        <label>名</label>
        <input type='text' name='givenName' ref={register} />
        {errors.givenName && <p>{errors.givenName.message}</p>}

        <label>地域</label>
        <select name='region' ref={register}>
          <option value=''>地域</option>
          <option value='japan'>日本</option>
          <option value='china'>中国</option>
          <option value='taiwan'>台湾</option>
          <option value='hongkong'>香港</option>
        </select>

        <label>Eメール</label>
        <input name='email' type='email' ref={register} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>パスワード</label>
        <input type='password' name='password' ref={register} />
        {errors.password && <p>{errors.password.message}</p>}

        <label>パスワード確認</label>
        <input type='password' name='confirmPassword' ref={register} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <span>
          <input type='checkbox' name='agreement' ref={register} />
          <label>サービス利用規約に合意します</label>
        </span>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
