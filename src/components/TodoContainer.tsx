import { useSelector } from 'react-redux';
import { RootState } from '@/stores/modules';
import styles from '@/assets/styles/todo.module.scss';

type Props = {
  children?: React.ReactNode;
};

const TodoContainer = ({ children }: Props) => {
  const { todoItems } = useSelector((state: RootState) => state.todo);

  return (
    <div className={styles.todoContainer}>
      <h2>전체</h2>
      <ul>
        {todoItems.map((data) => (
          <li key={data.id} className={styles.todoItem}>
            <input type='checkbox' checked={data.isDone} onChange={() => {}} />
            <label className={data.isDone ? styles.done : undefined}>
              {data.item}
            </label>
            <button> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
