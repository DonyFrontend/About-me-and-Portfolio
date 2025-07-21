import { SkillsArray } from "@/pages/skills/model/types/skills-schema";
import rkf from "@/shared/const/skillsImages/react-hook-form.svg";
import css from "./skillsImages/CSS.svg";
import js from "./skillsImages/js.svg";
import axios from "./skillsImages/axios.svg";
import chakra from "./skillsImages/chakraUI.svg";
import git from "./skillsImages/git.svg";
import rrd from "./skillsImages/rrd.svg";
import tailwind from "./skillsImages/tailwind.svg";
import react from "./skillsImages/react.svg";
import zustand from "./skillsImages/zustand.svg";
import html from "@/shared/const/skillsImages/html-5-svgrepo-com.svg";
import typescript from "@/shared/const/skillsImages/typescript-icon-svgrepo-com.svg";
import redux from "@/shared/const/skillsImages/redux-svgrepo-com.svg";
import firebase from "@/shared/const/skillsImages/firebase-svgrepo-com.svg";

const skills: SkillsArray = [
  {
    icon: html,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: css,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: js,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: typescript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/docs/",
  },
  {
    icon: react,
    title: "React",
    href: "https://react.dev/learn",
  },
  {
    icon: redux,
    title: "Redux / RTK",
    href: "https://redux.js.org/",
  },
  {
    icon: git,
    title: "Git",
    href: "https://git-scm.com/docs/git",
  },
  {
    icon: rkf,
    title: "React-hook-form",
    href: "https://react-hook-form.com/",
  },
  {
    icon: firebase,
    title: "Firebase",
    href: "https://firebase.google.com/",
  },
  {
    icon: chakra,
    title: "Chakra UI",
    href: "https://www.chakra-ui.com/",
  },
  {
    icon: axios,
    title: "Axios",
    href: "https://axios-http.com",
  },
  {
    icon: rrd,
    title: "React-router-dom",
    href: "https://reactrouter.com/en/main",
  },
  {
    icon: tailwind,
    title: "Tailwind",
    href: "https://tailwindcss.com/",
  },
  {
    icon: zustand,
    title: "Zustand",
    href: "https://zustand.docs.pmnd.rs/getting-started/introduction",
  },
];

export default skills;
