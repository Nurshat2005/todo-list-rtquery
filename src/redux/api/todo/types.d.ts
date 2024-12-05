namespace Todo {
  interface ITodo {
    title: string;
    _id: number;
  }
  type GetTodoResponse = ITodo[];
  type GetToRequest = void;

  type AddTodoResponse = ITodo[];
  type AddToRequest = ITodo;

  type DeleteTodoResponse = ITodo[];
  type DeleteTodoRequest = {
    _id: number;
  };
  type PutchTodoResponse = ITodo[];
  type PutchTodoRequest = {
    _id: number,
    newData: ITodo;
  };
}
