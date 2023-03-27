import { describe, expect, it, test, vi } from "vitest";
import prisma from "../libs/__mocks__/prisma";
import { createUser } from "../src/services/user.service";

vi.mock("../libs/prisma");

describe("User service", () => {
  it("createUser should return the generated user", async () => {
    const newUser = {
      username: "Rich",
      email: "rich@example.com",
      password: "random-pw",
      createdAt: new Date("2023-03-25"),
      updatedAt: new Date("2023-04-26"),
    };
    prisma.user.create.mockResolvedValue({ ...newUser, id: 1 });
    const user = await createUser(newUser);
    expect(user).toStrictEqual({ ...newUser, id: 1 });
  });
});
