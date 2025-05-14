import { GeneralApiError } from "@/api/dtos/apiErrorDto";
import { ApiErrorDto } from "@/api/dtos/validationErrorDto";

/**
 * Type guard for AxiosError.
 * @param error Source object.
 */
// See appError.ts to find out why this rule is disabled.

export function isApiError<TDto extends Record<string, any>>(
  error: unknown
): error is GeneralApiError<ApiErrorDto<TDto>> {
  return (error as GeneralApiError<ApiErrorDto<TDto>>).isAxiosError === true;
}
