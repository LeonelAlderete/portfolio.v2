import projectsImages from "./projectsImages";

const projectsData = [
  {
    projectID: 0,
    title: "Todo App",
    description:
      "Aplicación web para crear y guardar tareas, con sistema de registro para guardar las tareas en la nube.",
    demoURL: "https://todoapp-final.netlify.app/",
    githubURL:
      "https://github.com/LeonelAlderete/todoapp-ReactJS-Redux-Firebase",
    imageURL: projectsImages[0],
  },
  {
    projectID: 1,
    title: "The Movie App",
    description:
      "Aplicación para Android e iOS donde buscar y ver información sobre tus películas favoritas.",
    demoURL: null,
    githubURL: "https://github.com/LeonelAlderete/movieapp-ReactJS-ContextAPI",
    imageURL: projectsImages[1],
  },
  {
    projectID: 2,
    title: "Mi Portfolio",
    description: "Código fuente de mi portfolio :D",
    demoURL: null,
    githubURL: "https://github.com/LeonelAlderete/my-portfolio",
    imageURL: projectsImages[2],
  },
];

export default projectsData;
