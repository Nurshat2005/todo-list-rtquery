import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query<Todo.GetTodoResponse, Todo.GetToRequest>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['todo'],
    }),
    addTodo: build.mutation<Todo.AddTodoResponse, Todo.AddToRequest>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['todo'],
    }),
    deleteTodo: build.mutation<Todo.DeleteTodoResponse, Todo.DeleteTodoRequest>({
      query: (_id) => ({
        url: `/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
    putchTodo: build.mutation<Todo.PutchTodoResponse, Todo.PutchTodoRequest>({
      query: ({_id, newData}) => ({
        url: `/${_id}`,
        method: 'PATCH',
        body: newData,
      }),
      invalidatesTags: ['todo'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, usePutchTodoMutation } =
  api;
