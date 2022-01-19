import { useState } from 'react';
import Button from '../component/button';

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    setLoginInfo({ ...loginInfo, [name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name='id'
        placeholder='아이디'
        value={loginInfo['id']}
        onChange={handleFormChange}
      />
      <input
        type='password'
        name='password'
        placeholder='비밀번호'
        value={loginInfo['password']}
        onChange={handleFormChange}
      />
      <Button>로그인</Button>
    </form>
  );
};

export default LoginForm;
