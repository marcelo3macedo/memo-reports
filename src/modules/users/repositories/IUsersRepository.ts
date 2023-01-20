import Users from "../entities/Users";

export default interface IUsersRepository {
   list(): Promise<Users[]>;
}