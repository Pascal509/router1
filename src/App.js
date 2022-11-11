import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { AuthProvider } from "./components/UseAuth";
import { LogIn } from "./components/LogIn";
import {SignIn} from "./components/SignIn"
import { DetailsAuth } from "./components/DetailsAuth";
import About from "./components/About";
import Profile from "./components/Profile";
import NotFound from "./components/404";
import ErrorBoundary from "./components/ErrorBoundary";
import Users from "./components/Users";
import Services from "./components/Services";
import Fallback from "./components/Fallback";
import SingleUser from "./components/SingleUser";


function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />}></Route>
            <Route path="users/:id" element={<SingleUser />}></Route>
            <Route
              path="/Profile"
              element={
                <DetailsAuth>
                  <Profile />
                </DetailsAuth>
              }
            />
            <Route path="/SignIn" element={< SignIn />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
