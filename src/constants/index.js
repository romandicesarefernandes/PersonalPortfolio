import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  bootstrap,
  android,
  express,
  linux,
  heroku,
  jests,
  mongodb,
  math,
  movie,
  java,
  Cprogram,
  python,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: ux,
  },
  {
    title: 'Software Optimization',
    icon: prototyping,
  },
];

const languages = [
  

  {
    name: 'Java',
    icon: java,
  },
  

  {
    name: 'C',
    icon: Cprogram,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'HTML',
    icon: html,
  },

  

];


const technologies = [

{
  name: 'React JS',
  icon: reactjs,
},
{
  name: 'CSS 3',
  icon: css,
},

{
  name: 'Bootstrap',
  icon: bootstrap,
},
{
  name: 'Node JS',
  icon: nodejs,
},


{
  name: 'git',
  icon: git,
},
{
  name: 'figma',
  icon: figma,
},
{
  name: 'android',
  icon: android,
},
{
  name: 'jests',
  icon: jests,
},

{
  name: 'mongodb',
  icon: mongodb,
},


{
  name: 'linux',
  icon: linux,
},
{
  name: 'express',
  icon: express,
},

];

const experiences = [
  {
    title: 'Full stack developer & co-founder at my startup',
    company_name: 'Vital Track health',
    icon: kelhel,
    iconBg: '#333333',
    date: 'March 2024 - present',
  },
  {
    title: 'IT consultant & Developer',
    company_name: 'AR investments',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2020 - Feb 2024 (Seasonal)',
  },
  


];

const projects = [
  {
    id: 'project-1',
    name: 'Vital Track app',
    description: 'A way to connect healthcare professionals with the nutriotion of their patients.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/romandicesarefernandes/VitalTrack.git',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Turntable',
    description:
      'A multiplatform application that allows you to find and rate your favourite albums and disks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'react native',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/kilkennylj/Turntable.git',
    demo: 'https://drive.google.com/file/d/1geKC2CEt4NuD_csAZw37Gje4cw1HyXYB/view?usp=drive_link',
  },
  {
    id: 'project-3',
    name: 'Wave contact manager',
    description: 'This was built with the LAMP stack',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/kilkennylj/Wave-Contact-Manager.git',
    demo: 'https://youtu.be/-7fZM36Mzzc?si=n69_iFSRvpLzXKrj',
  },
  {
    id: 'project-4',
    name: 'Metro optimization',
    description: `A simple program that helps you find the best route to your destination. It is built with dijsktra's algorithm using java.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/romandicesarefernandes/TinyCompiler.git',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'PML tiny compiler',
    description:
      'This Project is a simple compiler for the PML language, which is a subset of the ML language.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/romandicesarefernandes/TinyCompiler.git,
    demo: '',
  },
];

export { services, languages, experiences, projects, technologies };
