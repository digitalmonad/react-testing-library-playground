export const authApi = {
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return Promise.resolve({ token: '123' });
  },
};
