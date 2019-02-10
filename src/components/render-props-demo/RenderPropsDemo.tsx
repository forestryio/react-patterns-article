import * as React from "react";
import { WithUser } from "./WithUser";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { UserInfo } from "../UserInfo";

export const Sidebar = () => {
  let logout = () => (window.location.href = "/logout");

  return (
    <WithUser email="bob@example.com">
      {user => {
        if (user.loading) return <LoadingScreen />;
        if (user.error) return <ErrorScreen />;
        return <UserInfo user={user.data!} logout={logout} />;
      }}
    </WithUser>
  );
};
