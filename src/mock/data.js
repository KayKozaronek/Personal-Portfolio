import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kay Kozaronek | Machine Learning Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my personal Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Kay',
  subtitle: "I'm a Machine Learning Engineer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpg',
  paragraphOne: 'Endurance, solution-centricity and the agility to adapt to fast-paced work environments are only a few of my qualities. I love to reinvent myself every day as I strongly believe that change is the only constant in life. If my friends had to descirbe me in one word, they would most probably say "curious".',
  //paragraphTwo: 'Currently I am studying philosophy and business which has already proven to be an invaluable asset to me. The cultural aspect of my studies enables me to think more holistically and connect existing business knowledge with the challenges and needs of our current society. I aim at combining these skills with my passion for technology, artificial intelligence and data science.',
  //paragraphThree: 'As a young and motivated professional I am extremely eager to work on challenging new projects, continuously develop myself and collaborate with a wide variety of motivated individuals from diverse cultural backgrounds.',
  resume: " " //'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'algorithms.jpg',
    title: 'Machine Learning from Scratch',
    info: "In this ongoing project I'm implementing the most common Machine Learning Algorithms from Scratch in Python to get a deeper appreciation of their inner workings and nifty details.",
    info2: '',
    url: 'https://github.com/KayKozaronek/ML_from_scratch_Python',
    repo: 'https://github.com/KayKozaronek/ML_from_scratch_Python', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'faces.jpg',
    title: 'Face Recognition App',
    info: 'This app detects faces in pictures that the user provides through an URL. It features user authentication and keeps a simple user score.',
    info2: '',
    url: 'https://f-d-smart-brain.herokuapp.com/',
    repo: 'https://github.com/KayKozaronek/FaceRecognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sentiment.jpg',
    title: 'Sentiment Analysis',
    info: 'This project includes implementations of Hinge Loss, Perceptron and Pegasos algorithm from scratch. Stopword removal and bag of words are implemented to arrive at accurate sentiment predictions and the most predictive words.',
    info2: '',
    url: 'https://github.com/KayKozaronek/sentiment_analysis',
    repo: 'https://github.com/KayKozaronek/sentiment_analysis', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bike.jpg',
    title: 'Retail Experience Startup',
    info: 'In a team of 5 we worked on starting a company that improves the experience of bike buyers and retailers by creating an app that recommends bikes to potential buyers and integrates an easy appointment scheduling with retailers.',
    info2: '',
    url: 'http://recoretail.herokuapp.com/',
    repo: 'https://github.com/lseubert/RecoRetail', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Reach Out',
  email: 'kozaronek@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope-o',
      url: 'mailto:kozaronek@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kay-oliver-kozaronek-7818b6108/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KayKozaronek',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

