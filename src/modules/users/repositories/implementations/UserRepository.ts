import { Repository } from "typeorm";
import AppDataSource from "@shared/infra/typeorm";
import IUsersRepository from "../IUsersRepository";
import Users from "@modules/users/entities/Users";

class UserRepository implements IUsersRepository {
   private repository: Repository<Users>;

   constructor() {
      this.repository = AppDataSource.getRepository(Users);
   }

   async list(): Promise<Users[]> {
      return this.repository
         .createQueryBuilder()
         .getMany()
   }
}

export default UserRepository;