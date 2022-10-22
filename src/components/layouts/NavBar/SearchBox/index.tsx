import React, { useContext, useEffect } from "react";
import UsersContext from "../../../../context/users/users-context";
import { ENDPOINTS } from "../../../../utils/constants";
import SearchIcon from "../../../ui/icons/SearchIcon";
import styles from "./index.module.scss";
import axios from "../../../../api/client";

const SearchBox = () => {
  const { users, setUsers, setLoading } = useContext(UsersContext);
  const [searchArg, setSearchArg] = React.useState<string>("");

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    const filteredUsers = users.filter((user) => {
      return (
        user.orgName.toLowerCase().includes(searchArg.toLowerCase()) ||
        user.userName.toLowerCase().includes(searchArg.toLowerCase()) ||
        user.email.toLowerCase().includes(searchArg.toLowerCase())
      );
    });

    // const setTimeoutPromise = (timeout: any) => {
    //   return new Promise((resolve) => setTimeout(resolve, timeout));
    // };
    // await setTimeoutPromise(5000);
    setUsers(filteredUsers);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(ENDPOINTS.GET_USERS);
      const users = response.data;
      setUsers(users);
      setLoading(false);
    };
    if (searchArg === "") {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [searchArg]);
  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Search for anything"
          value={searchArg}
          onChange={(e) => setSearchArg(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
