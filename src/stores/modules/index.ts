import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import todo, { TodoState } from './todo';

const rootReducer = (
  state: IState | undefined,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    // 서버 사이드 데이터를 클라이언트 사이드 Store에 통합.
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combineReducer = combineReducers({
        todo,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

interface IState {
  todo: TodoState;
}

// https://slog.website/post/14
// https://react.vlpt.us/using-typescript/05-ts-redux.html
// https://leehyungi0622.github.io/2021/05/17/202105/210514-React_with_NextJS/
// https://hyesech.postype.com/post/9151271
// https://wonit.tistory.com/514?category=822790
// hydrate 설명 - https://helloinyong.tistory.com/315
