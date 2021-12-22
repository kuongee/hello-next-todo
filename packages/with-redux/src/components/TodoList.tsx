import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/modules';
import styles from '@/assets/styles/todo.module.scss';
import { LIST_TYPE } from '@/constants';
import { updateItem } from '@/stores/modules/todo';

type Props = {
  listType: typeof LIST_TYPE[keyof typeof LIST_TYPE];
  title: string;
  children?: React.ReactNode;
};

const TodoList = (props: Props) => {
  const { listType } = props;
  const { todoItems } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

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
            <input
              type='checkbox'
              checked={isDone}
              onChange={(e) => {
                const updateCheck = (e.target as HTMLInputElement).checked;
                dispatch(
                  updateItem({
                    id,
                    isDone: updateCheck,
                    item,
                  })
                );
              }}
            />
            <Link href={`/update/${id}`}>
              <a className={isDone ? styles.done : undefined}>{item}</a>
              {/* https://crong-dev.tistory.com/50 */}
            </Link>
            <button> X </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
