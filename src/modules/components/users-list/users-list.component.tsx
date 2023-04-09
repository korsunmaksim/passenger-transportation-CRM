import React from "react";
import { userService } from "../../service/user.service";
import { IUser } from "../../types/auth.type";

interface IUsersListProps {
  users: IUser[] | undefined;
}

export const UsersList = ({ users }: IUsersListProps) => {
  const roleChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    userId: string
  ) => {
    userService.updateUserRole(userId, e.target.value);
  };

  if (users === undefined) return <h1>Somethin went wrong</h1>;

  if (users.length === 0) return <h1>There are no users</h1>;

  return (
    <div
      className="users-list w-75 bg-white text-black rounded p-4"
      style={{
        minHeight: "80vh",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          className="user-element d-flex flex-column flex-lg-row justify-content-between mb-5"
        >
          <span>User email: {user.email}</span>
          <select
            className="form-select pointer w-50"
            defaultValue={user.role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              roleChangeHandler(e, user.id)
            }
          >
            <option value="driver">Driver</option>
            <option value="client">Client</option>
            <option value="opertor">Operator</option>
          </select>
        </div>
      ))}
    </div>
  );
};
