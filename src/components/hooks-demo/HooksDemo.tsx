import * as React from "react";
import { useUser } from "./useCurrentUser";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";
import { UserInfo } from "../UserInfo";

export const HooksDemo = () => {
  let logout = () => (window.location.href = "/logout");

  let user = useUser("bob@example.com");
  if (user.loading) return <LoadingScreen />;
  if (user.error || !user.data) return <ErrorScreen />;

  return <UserInfo user={user.data} logout={logout} />;
};
