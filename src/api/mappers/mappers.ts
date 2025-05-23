// See appError.ts to find out why this rule is disabled.

import { type EntityValidationErrors } from "@/shared/models/appError";

import { type ValidationErrorDto } from "../dtos/validationError.dto";

/** Mapper of DTO to domain model. */
export type IMapperFromDto<TDto, TModel> = {
  /** Maps from DTO to domain model. */
  fromDto(dto: TDto): TModel;
};

/** Mapper of domain model to DTO. */
export type IMapperToDto<TDto, TModel> = {
  /** Maps from domain model to DTO. */
  toDto(data: TModel): TDto;
};

/** Mapper from DTO to domain model and vice versa. */
export type IMapper<TDto, TModel> = {} & IMapperFromDto<TDto, TModel> &
  IMapperToDto<TDto, TModel>;

/** Mapper of errors of DTO to domain model errors. */
export type ValidationErrorMapper<
  TDto extends Record<string, any>,
  TModel extends Record<string, any>
> = {
  /**
   * Maps validation error DTO to error for domain model.
   * @param errorDto Error DTO.
   */
  validationErrorFromDto(
    errorDto?: ValidationErrorDto<TDto> | null
  ): EntityValidationErrors<TModel>;
};
