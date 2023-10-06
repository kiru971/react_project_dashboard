import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Section from "./components/dashboard/section";
import Profile from "./components/profile";
import Login from "./pages/loginpage";
import Signup from "./components/auth/signup";
import ContentOverview from "./components/profile/contentoverview";
import PageProject from "./components/profile/pageproject";
import Social from "./components/social";
import Feed from "./components/social/feeds";
import Follower from "./components/social/followers";
import Auth from "./Auth";
import Home from "./components/home";
import UserLayout from "./Layout/userlayout";
import { theme } from "./sharedComponents/theme";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
      <Route element={<UserLayout />}>
        <Route path="dashboard" element={<Section />} />
        <Route path="crafted">
          <Route
            path="profile"
            element={
              <Auth>
                <Profile />
              </Auth>
            }
          >
            <Route
              path="overview"
              element={
                <Auth>
                  <ContentOverview />
                </Auth>
              }
            />
            <Route
              path="project"
              element={
                <Auth>
                  <PageProject />
                </Auth>
              }
            />
          </Route>
          <Route
            path="Social"
            element={
              <Auth>
                <Social />
              </Auth>
            }
          >
            <Route
              path="feeds"
              element={
                <Auth>
                  <Feed />
                </Auth>
              }
            />
            <Route
              path="followers"
              element={
                <Auth>
                  <Follower />
                </Auth>
              }
            />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

function App() {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const darkTheme = (theme.palette.mode = darkMode ? "dark" : "light");
  console.log(darkTheme);
  return (
    <ThemeProvider theme={{ ...theme, mode: darkMode ? "dark" : "light" }}>
      <RouterProvider
        router={router}
        bgcolor={"background.default"}
        color={"text.primary"}
      />
    </ThemeProvider>
  );
}

export default App;
