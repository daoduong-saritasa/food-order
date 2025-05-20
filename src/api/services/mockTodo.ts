import { type MockTodo } from "@/models/mockTodo";
import { isApiError } from "@/utils/axiosErrorGuard";
import { type MockTodoDto } from "../dtos/mockTodoDto";
import { http } from "../http";
import { AppErrorMapper } from "../mappers/appErrorMapper";
import { todoMapper } from "../mappers/todoMapper";

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
