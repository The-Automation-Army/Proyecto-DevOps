export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUserRequest {
  username: string;
  email: string;
  password: string;
}

export const defaultUserFields = {
  id: true,
  username: true,
  email: true,
  createdAt: true,
  updatedAt: true,
};
