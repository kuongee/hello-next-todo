import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/modules';
import styles from '@/assets/styles/app.module.scss';
import { Layout } from '@/components';

const Update: NextPage = () => {
  const router = useRouter();
  const { todoItems } = useSelector((state: RootState) => state.todo);
  const todo = todoItems.find(({ id }) => id === Number(router.query.id));

  return (
    <Layout>
      <>
        <h1 className={styles.title}>수정하기</h1>
        <input value={todo?.item || ''} onChange={() => {}} />
      </>
    </Layout>
  );
};

export default Update;
