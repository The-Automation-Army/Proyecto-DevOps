import prisma from "../../libs/__mocks__/prisma";

export const UserFactory = {
  build: (attrs = {}) => {
    const now = new Date("2023-03-25");
    return {
      id: 1,
      username: "fake-username",
      email: "fake@example.com",
      password: "fake-password",
      createdAt: now,
      updatedAt: now,
      ...attrs,
    };
  },
  create: (attrs = {}) => {
    const userMock = UserFactory.build(attrs);
    prisma.user.create.mockResolvedValue(userMock);
    return userMock;
  },
  find: (attrs = {}) => {
    const userMock = UserFactory.build(attrs);
    prisma.user.findUnique.mockResolvedValue(userMock);
    return userMock;
  },
  findAll: () => {
    const users = [
      UserFactory.build({ id: 2, email: "rich@example.com" }),
      UserFactory.build({ id: 3, email: "john@example.com" }),
    ];
    prisma.user.findMany.mockResolvedValue(users);
    return users;
  },
  delete: (attrs = {}) => {
    const user = UserFactory.build(attrs);
    prisma.user.delete.mockResolvedValue(user);
    return user;
  },
  update: (attrs = {}) => {
    const user = UserFactory.build(attrs);
    prisma.user.update.mockResolvedValue(user);
    return user;
  },
};
