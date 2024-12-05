'use client';
import { useAddTodoMutation } from '@/redux/api/todo';
import { SubmitHandler, useForm } from 'react-hook-form';
import scss from './TodoAdd.module.scss'; // Импортируйте стили

interface ITodo {
  title: string;
}

const TodoAdd = () => {
  const { reset, register, handleSubmit } = useForm<ITodo>();
  const [addTodo, { isLoading }] = useAddTodoMutation(); 

  const addTodoForm: SubmitHandler<ITodo> = async (data) => {
    try {
      await addTodo(data).unwrap();
      reset();
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  return (
    <div>
      <form className={scss.form} onSubmit={handleSubmit(addTodoForm)}>
        <input
          type="text"
          placeholder="Add To Product"
          {...register('title', { required: true })}
        />
        <button type="submit" disabled={isLoading}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
