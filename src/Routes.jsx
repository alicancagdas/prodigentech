// src/ProjectRoutes.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Main from "pages/Main";
import Aboutme from "pages/Aboutme";
import Iletisim from "pages/Iletisim";

const ProjectRoutes = () => {
  let element = useRoutes([
    { },
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Main /> },
    { path: "aboutme", element: <Aboutme /> },
    { path: "iletisim", element: <Iletisim /> },
  ]);

  return element;
};

export default ProjectRoutes;
