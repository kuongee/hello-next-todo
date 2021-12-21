import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/assets/styles/todo.module.scss';
import 'swiper/css';
import TodoList from './TodoList';
import { LIST_TYPE } from '@/constants';

type Props = {
  children?: React.ReactNode;
};

const TodoContainer = ({ children }: Props) => {
  return (
    <Swiper
      className={styles.todoContainer}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TodoList title='전체' listType={LIST_TYPE.ALL} />
      </SwiperSlide>
      <SwiperSlide>
        <TodoList title='할 일' listType={LIST_TYPE.TODO} />
      </SwiperSlide>
      <SwiperSlide>
        <TodoList title='끝난 일' listType={LIST_TYPE.DONE} />
      </SwiperSlide>
    </Swiper>
  );
};

export default TodoContainer;
