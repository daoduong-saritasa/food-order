/** Todo keys factory. */
export const todoKeys = {
  /** Root key. */
  all: ["todo"] as const,

  /** Todos key. */
  todos: () => [...todoKeys.all, "todos"] as const,
} as const;
