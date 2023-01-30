const images = require.context("../../assets/side-projects", true);
const Projects = [

  {
    img: images("./Easy-CV.png"),
    title: "Easy CV" ,
    description:
      "easily make cv / resume on the go.",
    skills: "React, NPM, CSS",
    skillsArray: ["All","JavaScript", "React", "CSS"],
    link: "https://ayxxn-shxrif.github.io/Easy-CV",
  },
  {
    img: images("./Projects-Keeper.png"),
    title: "Projects Keeper ",
    description:
      "A personal project keeper using Node,Mongodb and Express. ",
    skills: "Node, Express, MongoDB, Handlebars ",
    skillsArray: ["All","Express","Node", "MongoDB","Handlebars","Bash","CSS"],
    link: "https://github.com/ayxxn-shxrif/Projects-Keeper",
  },
  {
    img: images("./scraping-stackoverflow.png"),
    title: "Scraping Stackoverflow",
    description:
      "Web crawler using Mongodb and Scrapy ",
    skills: "Python, MongoDB",
    skillsArray: ["All", "Python", "Webscraping", "MongoDB"],
    link: "https://github.com/ayxxn-shxrif/scraping_stackoverflow",
  },
  {
    img: images("./BERT-CLASSIFICATION.png"),
    title: "BERT-CLASSIFICATION",
    description: "The model uses tf.data api as input data pipeline and perform classification of the desired cases.",
    skills: "Python, Jupyter Notebook, Tensorflow, Text Classification, Fine Tuning",
    skillsArray: ["All","Python","Tensorflow","Jupyter Notebook","Text Classification",'Fine Tuning'],
    link: "https://github.com/ayxxn-shxrif/BERT-TEXT-CLASSIFICATION",
  },
  {
    img: images("./airbnb.png"),
    title: "AIRBNB-CLONE",
    description:"static airbnb clone using React",
    skills: "React, CSS",
    skillsArray: ["All", "JavaScript", "React"],
    link: "https://github.com/ayxxn-shxrif/AIRBNB-STATIC-CLONE-REACT",
  },
  {
    img: images("./face-recognition.png"),
    title: "Face-Recognizer",
    description:
      "python script to detect face in real time using OpenCV.",
    skills:
      "Python, Computer Vision",
    skillsArray: ["All", "Python", "Object-Detection"],
    link: "https://github.com/ayxxn-shxrif/face-recog-with-webcam",
  },
 ];

export default Projects;
