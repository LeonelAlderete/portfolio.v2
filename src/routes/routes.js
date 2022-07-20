//Componentes
import Layout from "../layout/Layout";
import Error404 from "../components/Error404";
import Presentation from "../components/Presentation";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact/Contact";

const routes = [
  {
    path: "/",
    component: Presentation,
    exact: true,
    layout: Layout,
  },
  {
    path: "/about-me",
    component: AboutMe,
    exact: true,
    layout: Layout,
  },
  {
    path: "/skills",
    component: Skills,
    exact: true,
    layout: Layout,
  },
  {
    path: "/projects",
    component: Projects,
    exact: true,
    layout: Layout,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
    layout: Layout,
  },
  {
    component: Error404,
    layout: Layout,
  },
];

export default routes;
