import { type GeneralApiError } from "@/api/dtos/apiError.dto";
import { type ApiErrorDto } from "@/api/dtos/validationError.dto";

/**
 * Type guard for AxiosError.
 * @param error Source object.
 */
// See appError.ts to find out why this rule is disabled.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isApiError<TDto extends Record<string, any>>(
  error: unknown
): error is GeneralApiError<ApiErrorDto<TDto>> {
  return (error as GeneralApiError<ApiErrorDto<TDto>>).isAxiosError === true;
}
