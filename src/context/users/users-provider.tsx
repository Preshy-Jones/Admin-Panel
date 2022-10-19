import { useEffect, useState } from "react";
import { User } from "../../types/user";
import UsersContext from "./users-context";
import axios from "../../api/client";
import { ENDPOINTS } from "../../utils/constants";

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [userId, setUserId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(function () {
        console.log("I am the third log after 5 seconds");
      }, 5000);
      const response = await axios.get(ENDPOINTS.GET_USERS);
      const users = response.data;
      setUsers(users);
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
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
