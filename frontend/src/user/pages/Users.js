import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schuster",
      image:
        "https://www.max-schuster.info/wp-content/uploads/2015/11/max-schuster-augsburg1.jpg",
      places: 3,
    },
  ];
  return <UsersList item={USERS} />;
};

export default Users;
