import { describe, expect, it, vi } from "vitest";
import prisma from "../libs/__mocks__/prisma";
import { createUser, authUser } from "../src/services/user.service";

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

  it("authUser should return the generated token", async () => {
    const foundUser = {
      id: 1,
      username: "rich",
      email: "rich@example.com",
      password: "$2a$08$80x7oi/B003dzs82KIs.BeThaj7C/MCUzeCClLQAFnxf1xVOZP8De",
      createdAt: new Date("2023-03-25"),
      updatedAt: new Date("2023-04-26"),
    };

    prisma.user.findFirst.mockResolvedValue(foundUser);
    const token = await authUser({
      email: "rich@example.com",
      password: "richPassword",
    });

    expect(token).toContain("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
  });
});
