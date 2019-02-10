import * as React from "react";
import { User } from "../user";

interface Props {
  user: User;
  logout(): void;
}

export const UserInfo = ({ user, logout }: Props) => (
  <div>
    <h2>{user.firstName}</h2>
    <p>{user.email}</p>
    <button onClick={logout}>Logout</button>
  </div>
);
