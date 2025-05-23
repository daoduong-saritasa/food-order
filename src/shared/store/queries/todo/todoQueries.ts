import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { MockTodoApi } from '@/api/services/mockTodo.service';
import { todoKeys } from './keys';

/** Hook to get todos. */
export const useTodos = () => useQuery({
  queryKey: todoKeys.todos(),
  async queryFn() {
    const todos = await MockTodoApi.getTodos();
    return todos;
  },
  placeholderData: keepPreviousData,
});