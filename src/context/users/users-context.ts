import { createContext } from "react";
import { User } from "../../types/user";

interface UserContextInterface {
  users: User[];
  pageNumber: number;
  setPageNumber(page: number): void;
  usersPerPage: number;
  setUsersPerPage(value: number): void;
  userId: string | null;
  setUserId(id: string | null): void;
  showModal: boolean;
  setShowModal(status: boolean): void;
}

const defaultData = {
  users: [],
  pageNumber: 1,
  setPageNumber: () => null,
  usersPerPage: 10,
  setUsersPerPage: () => null,
  userId: null,
  setUserId: () => null,
  showModal: false,
  setShowModal: () => null,
};

let UsersContext = createContext<UserContextInterface>(defaultData);

export default UsersContext;
