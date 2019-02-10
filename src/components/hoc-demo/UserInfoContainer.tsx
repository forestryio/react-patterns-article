import { withUser } from "./withUser";
import { UserInfo } from "../UserInfo";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorScreen } from "../ErrorScreen";

export const UserInfoContainer = withUser(UserInfo, LoadingScreen, ErrorScreen);
