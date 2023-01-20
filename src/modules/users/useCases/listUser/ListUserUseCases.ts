import { inject, injectable } from "tsyringe";

import Users from "@modules/users/entities/Users";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

@injectable()
export default class ListUserUseCases {
   constructor(
      @inject("UserRepository")
      private userRepository: IUsersRepository
   ) {}

   async execute(): Promise<Users[]> {
      return this.userRepository.list()
   }
}