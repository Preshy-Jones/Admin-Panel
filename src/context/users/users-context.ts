import { createContext } from "react";
import { User } from "../../types/user";

interface UserContextInterface {
  users: User[];
  setUsers: (users: User[]) => void;
  pageNumber: number;
  setPageNumber(page: number): void;
  usersPerPage: number;
  setUsersPerPage(value: number): void;
  userId: string | null;
  setUserId(id: string | null): void;
  showModal: boolean;
  setShowModal(status: boolean): void;
  loading: boolean;
  setLoading(status: boolean): void;
}

const defaultData = {
  users: [],
  setUsers: () => null,
  pageNumber: 1,
  setPageNumber: () => null,
  usersPerPage: 10,
  setUsersPerPage: () => null,
  userId: null,
  setUserId: () => null,
  showModal: false,
  setShowModal: () => null,
  loading: false,
  setLoading: () => null,
};

let UsersContext = createContext<UserContextInterface>(defaultData);

export default UsersContext;
