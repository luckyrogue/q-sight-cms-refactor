export const errorHandler = (error: unknown) => {
  return (
    (error as { response: { data: { message: string } } }).response.data
      .message ?? "Ошибка сервера"
  );
};
