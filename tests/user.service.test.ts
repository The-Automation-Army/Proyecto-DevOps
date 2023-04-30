import { describe, expect, it, vi } from "vitest";
import {
  createUser,
  authUser,
  getAllUsers,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../src/services/user.service";
import { UserFactory } from "./factories/UserFactory";
import { hash } from "bcryptjs";

vi.mock("../libs/prisma");

describe("User service", () => {
  it("createUser should return the generated user", async () => {
    const newUser = UserFactory.create();
    const user = await createUser(newUser);

    expect(user).toStrictEqual({ ...newUser, id: 1 });
  });

  it("authUser should return the generated token", async () => {
    const encryptedPassword = await hash("strong-password", 8);
    UserFactory.find({ password: encryptedPassword });
    const token = await authUser({
      email: "fake@example.com",
      password: "strong-password",
    });

    expect(token).toContain("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
  });

  it("getAllUsers should return all users", async () => {
    const mockUsers = UserFactory.findAll();
    const allUsers = await getAllUsers();

    expect(allUsers).toStrictEqual([
      { ...mockUsers[0], id: 2 },
      { ...mockUsers[1], id: 3 },
    ]);
  });

  it("deleteUserById should return a deleted user", async () => {
    const mockUserToDelete = UserFactory.delete({ id: 11 });
    const deletedUser = await deleteUserById(11);

    expect(deletedUser).toStrictEqual(mockUserToDelete);
  });

  it("getUserById should return a user given an id", async () => {
    const mockUser = UserFactory.find({ id: 6 });
    const findUser = await getUserById(6);

    expect(findUser).toStrictEqual(mockUser);
  });

  it("updateUserById should return a updated user given an id and data", async () => {
    const mockUser = UserFactory.update({ username: "john" });
    const updatedUser = await updateUserById(1, "john");

    expect(updatedUser).toStrictEqual(mockUser);
  });
});
