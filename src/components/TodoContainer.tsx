import styles from '@/assets/styles/todo.module.scss';

type Props = {
  children?: React.ReactNode;
};

const TodoContainer = ({ children }: Props) => {
  const todoData = [
    {
      id: 'za',
      item: '할일 1',
      isDone: false,
    },
    {
      id: 'aa',
      item: '할일 2',
      isDone: true,
    },
  ];

  return (
    <div className={styles.todoContainer}>
      <h2>전체</h2>
      <ul>
        {todoData.map((data) => (
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
