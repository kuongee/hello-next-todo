const ADD_ITEM = 'todo/ADD' as const;
const DELETE_ITEM = 'todo/DELETE' as const;

type todoItem = {
  id: number;
  item: string;
  isDone: boolean;
};

let id = 0;
export const addItem = (todo: { item: string }) => ({
  type: ADD_ITEM,
  newTodo: {
    id: id++,
    item: todo.item,
    isDone: false,
  },
});

export const deleteItem = () => ({
  type: DELETE_ITEM,
});

type TodoAction = ReturnType<typeof addItem> | ReturnType<typeof deleteItem>;

export type TodoState = {
  todoItems: Array<todoItem>;
};

const initialState: TodoState = {
  todoItems: [],
};

const todo = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todoItems: [...state.todoItems, action.newTodo],
      };
    default:
      return state;
  }
};

export default todo;
