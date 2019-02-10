import * as React from "react";
import { UserInfoContainer } from "./UserInfoContainer";

export const HocDemo = () => {
  let logout = () => (window.location.href = "/logout");

  return <UserInfoContainer email="bob@example.com" logout={logout} />;
};
