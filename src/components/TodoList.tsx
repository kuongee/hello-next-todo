import { useSelector } from 'react-redux';
import { RootState } from '@/stores/modules';
import styles from '@/assets/styles/todo.module.scss';
import { LIST_TYPE } from '@/constants';

type Props = {
  listType: typeof LIST_TYPE[keyof typeof LIST_TYPE];
  title: string;
  children?: React.ReactNode;
};

const TodoList = (props: Props) => {
  const { listType } = props;
  const { todoItems } = useSelector((state: RootState) => state.todo);

  let filteredTodoItems = todoItems;
  if (listType !== LIST_TYPE.ALL) {
    filteredTodoItems = todoItems.filter((data) =>
      data.isDone ? listType === LIST_TYPE.DONE : listType === LIST_TYPE.TODO
    );
  }

  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {filteredTodoItems.map(({ id, isDone, item }) => (
          <li key={id} className={styles.todoItem}>
            <input type='checkbox' checked={isDone} onChange={() => {}} />
            <label className={isDone ? styles.done : undefined}>{item}</label>
            <button> X </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
