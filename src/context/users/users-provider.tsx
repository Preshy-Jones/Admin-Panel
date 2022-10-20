import { useState } from "react";
import { User } from "../../types/user";
import UsersContext from "./users-context";
const UsersProvider = ({ children }: { children: React.ReactNode }) => {

  const [users, setUsers] = useState<User[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [userId, setUserId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

 

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        pageNumber,
        loading,
        setLoading,
        setPageNumber,
        usersPerPage,
        setUsersPerPage,
        setUserId,
        userId,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
