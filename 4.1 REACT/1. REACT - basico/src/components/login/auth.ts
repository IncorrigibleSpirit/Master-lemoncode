export const checkCredentials = (username: string, password: string): boolean => {
  // Valores predefinidos
  const validUsername = "Carlos22";
  const validPassword = "test";

  // Verificar si coinciden
  return username === validUsername && password === validPassword;
};
