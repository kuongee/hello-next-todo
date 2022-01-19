import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/use_user';
import Layout from '../component_view/Layout';
import LoginForm from '../component_view/LoginForm';

const IndexPage = () => {
  const { user, loggedOut } = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    console.log('user ', user, loggedOut);
    // if (user && !loggedOut) {
    //   Router.replace('/users');
    // }
  }, [user, loggedOut]);

  return (
    <Layout
      title='Home | Next.js + TypeScript Example'
      loggedIn={user && !loggedOut}
    >
      <h1>Hello Next.js 👋</h1>
      {user && !loggedOut ? <button>로그아웃</button> : <LoginForm />}
    </Layout>
  );
};

export default IndexPage;
