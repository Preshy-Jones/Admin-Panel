import { createContext } from "react";
import { User } from "../../types/user";

interface UserContextInterface {
  users: User[];
  pageNumber: number;
  setPageNumber(page: number): void;
  usersPerPage: number;
  userId: string | null;
  setUserId(id: string | null): void;
}

const defaultData = {
  users: [],
  pageNumber: 1,
  setPageNumber: () => null,
  usersPerPage: 10,
  userId: null,
  setUserId: () => null,
};

let UsersContext = createContext<UserContextInterface>(defaultData);

export default UsersContext;
