import type { NextPage } from 'next';
import styles from '@/assets/styles/app.module.scss';
import { Layout, TodoContainer } from '@/components';
import TodoInput from '@/components/TodoInput';

const Main: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Todo</h1>
      <TodoContainer />
      <TodoInput />
    </Layout>
  );
};

export default Main;
