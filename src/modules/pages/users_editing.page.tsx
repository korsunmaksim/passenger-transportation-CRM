import React, { useEffect, useState } from "react";
import { userService } from "../service/user.service";
import { ToastContainer } from "react-toastify";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Loading } from "../components/loading/loading.component";
import { UsersList } from "../components/users-list/users-list.component";
import { IUser } from "../types/auth.type";
import { DB_TABLES } from "../consts/app_keys.const";

export const UsersEditing = () => {
  const [users, setUsers] = useState<IUser[] | undefined>([]);
  const [loading] = useCollectionData(collection(db, DB_TABLES.USERS));

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await userService.getUsers();
      setUsers(allUsers);
    };
    getAllUsers();
  }, []);

  if (!loading) return <Loading />;

  return (
    <div className="d-flex flex-column mt-4 align-items-center">
      <h1 className="users-title w-25 text-center">All users</h1>
      <UsersList users={users} />
      <ToastContainer />
    </div>
  );
};
