import { type MockTodo } from "@/models/mockTodo";
import { type MockTodoDto } from "../dtos/mockTodoDto";
import { type IMapperFromDto } from "./mappers";

/** Todo mapper. */
class TodoMapper implements IMapperFromDto<MockTodoDto, MockTodo> {
  /** @inheritdoc */
  public fromDto(dto: MockTodoDto): MockTodo {
    return {
      id: dto.id,
      title: dto.title,
      completed: dto.completed,
    };
  }
}

/** Instance of the todo mapper. */
export const todoMapper = new TodoMapper();
