import React from "react";
const Login = React.lazy(() => import("src/pages/Login"));
const LoginDetail = React.lazy(() => import("src/pages/LoginDetail"));
const Register = React.lazy(() => import("src/pages/Register"));
const RegisterDetail = React.lazy(() => import("src/pages/RegisterDetail"));
const ForgotPassword = React.lazy(() => import("src/pages/ForgotPassword"));
const CheckMail = React.lazy(() => import("src/pages/CheckEmail"));
const ResetPassword = React.lazy(() => import("src/pages/ResetPassword"));
const Home = React.lazy(() => import("src/pages/Home"));
const Search = React.lazy(() => import("src/pages/Search"));
const SearchResult = React.lazy(() => import("src/pages/SearchResult"));
const SavedEmpty = React.lazy(() => import("src/pages/SavedEmpty"));
const SavedList = React.lazy(() => import("src/pages/SavedList"));
const Profile = React.lazy(() => import("src/pages/Profile"));
const ProfileSetting = React.lazy(() => import("src/pages/ProfileSetting"));
const ProfileSettingAccount = React.lazy(() =>
  import("src/pages/ProfileSetting/ProfileSettingAccount")
);
const ProfileSettingChange = React.lazy(() =>
  import("src/pages/ProfileSetting/ProfileSettingChange")
);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login-detail",
    component: LoginDetail,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/register-detail",
    component: RegisterDetail,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/forgot-password/check-mail",
    component: CheckMail,
  },
  {
    path: "/forgot-password/reset",
    component: ResetPassword,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/search/:id",
    component: SearchResult,
  },
  {
    path: "/saved/empty",
    component: SavedEmpty,
  },
  {
    path: "/saved/list",
    component: SavedList,
  },
  {
    path: "/profile/personal",
    component: Profile,
  },
  {
    path: "/profile/setting",
    component: ProfileSetting,
  },
  {
    path: "/profile/setting/profile-setting",
    component: ProfileSettingAccount,
  },
  {
    path: "/profile/setting/profile-change",
    component: ProfileSettingChange,
  },
];
export default routes;
