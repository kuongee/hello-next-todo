import { GetStaticProps } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../../data/use_user';
import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../component_view/Layout';
import List from '../../component_view/List';

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => {
  const { user, mutate, loggedOut } = useUser();

  useEffect(() => {
    console.log('user ', user, loggedOut);
    if (loggedOut) {
      Router.replace('/');
    }
  }, [loggedOut]);

  if (loggedOut) return 'redirecting...';

  return (
    <Layout
      title='Users List | Next.js + TypeScript Example'
      loggedIn={user && !loggedOut}
    >
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
