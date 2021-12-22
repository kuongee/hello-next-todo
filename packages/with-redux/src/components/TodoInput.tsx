import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '@/stores/modules/todo';
import styles from '@/assets/styles/input.module.scss';

const TodoInput = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  return (
    <input
      className={styles.todoInput}
      placeholder='할일을 입력하고 엔터!'
      value={value}
      onChange={(e) => {
        const currentValue = (e.target as HTMLInputElement).value.trim();
        setValue(currentValue);
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && value) {
          dispatch(
            addItem({
              item: value,
            })
          );
          setValue('');
        }
      }}
    />
  );
};

export default TodoInput;
