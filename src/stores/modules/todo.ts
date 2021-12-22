const ADD_ITEM = 'todo/ADD' as const;
const UPDATE_ITEM = 'todo/UPDATE' as const;
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

export const updateItem = (currTodo: todoItem) => ({
  type: UPDATE_ITEM,
  updateTodo: {
    ...currTodo,
  },
});

export const deleteItem = () => ({
  type: DELETE_ITEM,
});

type TodoAction =
  | ReturnType<typeof addItem>
  | ReturnType<typeof updateItem>
  | ReturnType<typeof deleteItem>;

export type TodoState = {
  todoItems: Array<todoItem>;
};

const initialState: TodoState = {
  todoItems: [
    {
      id: 1000,
      item: 'init todo1',
      isDone: true,
    },
    {
      id: 1001,
      item: 'init todo2',
      isDone: false,
    },
  ],
};

const todo = (state: TodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        todoItems: [...state.todoItems, action.newTodo],
      };
    case UPDATE_ITEM:
      return {
        todoItems: state.todoItems.map((item) => {
          if (item.id === action.updateTodo.id) {
            return {
              ...action.updateTodo,
            };
          }
          return { ...item };
        }),
      };

    default:
      return state;
  }
};

export default todo;
