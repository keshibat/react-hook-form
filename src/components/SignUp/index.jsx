import React from 'react';
import {useForm} from 'react-hook-form';
import './SignUp.css';


const SignUp = () => {

  const {handleSubmit, register, errors} = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>個人アカウント</h1>
      <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <label>ユーザーID</label>
        <input
          type='text'
          name='userId'
          ref={register({required: true, minLength: 5})}
        />
        {errors.userId && <p>UserIDは5文字以上</p>}


        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;


      // <label>姓</label>
      //   <input type='text' name='firstName' />

      //   <label>名</label>
      //   <input type='text' name='LastName' />

      //   <label>メール</label>
      //   <input type='text' name='email' />

      //   <label>パスワード</label>
      //   <input type='password' name='password' />

      //   <label>地域</label>
      //   <input type='number' name='region' />

      //   <span>
      //     <input type='checkbox' name='remember' ref={register} />
      //     <label>サービス利用規約に合意します</label>
      //   </span>
