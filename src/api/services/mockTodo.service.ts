import { type MockTodo } from "@/shared/models/mockTodo";
import { isApiError } from '@/shared/utils/axiosErrorGuard';
import { type MockTodoDto } from "../dtos/mockTodo.dto";
import { http } from "../http";
import { AppErrorMapper } from "../mappers/appError.mapper";
import { todoMapper } from "../mappers/todo.mapper";

/** Mock todo api service. */
export namespace MockTodoApi {
  export async function getTodos(): Promise<MockTodo[]> {
    try {
      const response = await http.get<MockTodoDto[]>("/todos");
      return response.data.map(todoDto => todoMapper.fromDto(todoDto));
    } catch (error) {
      if (isApiError(error)) {
        const appError = AppErrorMapper.fromDto(error);
        throw appError;
      }
      throw error;
    }
  }
}
