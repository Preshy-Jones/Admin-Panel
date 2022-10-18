import { useEffect, useState } from "react";
import { User } from "../../types/user";
import UsersContext from "./users-context";
import axios from "../../api/client";
import { ENDPOINTS } from "../../utils/constants";

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [userId, setUserId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ENDPOINTS.GET_USERS);
      const users = response.data;
      setUsers(users);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = {
    users,
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        pageNumber,
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
