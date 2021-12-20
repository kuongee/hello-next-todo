import type { NextPage } from 'next';
import styles from '@/assets/styles/app.module.scss';
import { Layout, TodoContainer } from '@/components';
import Input from '@/components/base/Input';

const Main: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Todo</h1>
      <TodoContainer />
      <Input />
    </Layout>
  );
};

export default Main;
