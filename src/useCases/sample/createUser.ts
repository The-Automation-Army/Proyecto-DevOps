import { Prisma } from '@prisma/client'
import prisma from '../../../libs/prisma'

export const createUser = async (user: Prisma.UserCreateInput) => {
  return await prisma.user.create({
    data: user,
  })
}
