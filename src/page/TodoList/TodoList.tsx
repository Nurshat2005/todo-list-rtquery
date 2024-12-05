'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import scss from './TodoList.module.scss';
import { FC, useState } from 'react';
import { useDeleteTodoMutation, useGetTodoQuery, usePutchTodoMutation } from '@/redux/api/todo';

interface ITodoPuch {
  title: string;
}

const TodoList: FC = () => {
  const { reset, register, handleSubmit } = useForm<ITodoPuch>();
  const { data } = useGetTodoQuery();
  const [uploadId, setUploadId] = useState<number | null>(null);
  const [uploadTodo] = usePutchTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const editText: SubmitHandler<ITodoPuch> = async (data) => {
    await uploadTodo({ _id: uploadId, newData: data });
    reset();
    setUploadId(null)
  };

  return (
    <section className={scss.Section}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div className={scss.blog} key={el._id}>
              <h1>{el.title}</h1>
              <button onClick={async () => await deleteTodo(el._id)}>Delete</button>
              <form onSubmit={handleSubmit(editText)}>
                <input
                  type="text"
                  placeholder="edit text"
                  {...register('title', { required: true })}
                />
                <button onClick={() => setUploadId(el._id)}>Edit</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
