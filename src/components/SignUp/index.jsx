import React from 'react';
import {useForm} from 'react-hook-form';
import './SignUp.css';


const SignUp = () => {
  const { register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
      <h1>個人アカウント</h1>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <label>ユーザーID</label>
        <input type='text' name='userID' ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>姓</label>
        <input type='text' name='userID' ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>名</label>
        <input type='text' name='userID' ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>メール</label>
        <input type='text' name='userID' ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>パスワード</label>
        <input type='password' name='password' ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>地域</label>
        <input type='number' name='region' ref={register} />

        <span>
          <input type='checkbox' name='remember' ref={register} />
          <label>サービス利用規約に合意します</label>
        </span>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
