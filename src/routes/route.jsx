import { Navigate } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Job from "../pages/Job/Job";
import JobInfos from "../pages/JobInfos/JobInfos";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

import About from "../pages/about/about";

export const route = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/job/:jobID", element: <JobInfos /> },
  { path: "/job", element: <Job /> },
  { path: "notfound", element: <PageNotFound /> },
  { path: "*", element: <Navigate to="/notfound" replace /> },
];
