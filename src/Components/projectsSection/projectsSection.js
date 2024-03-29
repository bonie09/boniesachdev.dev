import portfolio from "../../images/projects images/portfolio.svg";
import htr from "../../images/projects images/htr.svg";
import pd from "../../images/projects images/pd.svg";
import chat from "../../images/projects images/chat.svg";
import stock from "../../images/projects images/stock.svg";
import game from "../../images/projects images/game.svg";
import shop from "../../images/projects images/shop.svg";
import numoves from "../../images/projects images/numoves.svg";
import athletes from "../../images/projects images/athletes.svg";
import notes from "../../images/projects images/notes.svg";

export const projectsSection = {
  title: "Projects",
  subtitle:
    "Here are some cool stuff I have worked on. Feel free to fork any repository.",

  projects: [
    {
      title: "NU Moves",
      intro:
        "Created a web application for Northeastern University students to buy, sell or rent furniture, kitchecn appliances, and other stuffs at a low price",
      image: numoves,
      url: "https://github.com/bonie09/NUMoves",
    },
    {
      title: "Notes Tracking Application",
      intro:
        "Developed user-friendly web app to track daily notes, with features like add, update and mark completed notes, resulting in 25% productivity boost.",
      image: notes,
      url: "https://github.com/bonie09/notes-application",
    },
    {
      title: "Athletes for Hope",
      intro:
        "Developed a Java Swing application with db4o to provide underprivileged athletes equal sports opportunities across 5 regions by connecting them to an NGO and providing necessary resources.",
      image: athletes,
      url: "https://github.com/bonie09/athletes-for-hope",
    },
    {
      title: "React.js Portfolio ",
      intro:
        "Created a portfolio using React.js with custom scroll bar and other highlighting features.",
      image: portfolio,
      url: "https://github.com/bonie09/boniesachdev.dev",
    },
    {
      title: "Digital Hand Written Digit Recognition",
      intro: "Developed an interactive GUI to predict the digits.",
      image: htr,
      url: "https://github.com/bonie09/Handwritten-Digit-Recognition",
    },
    {
      title: "Semantic Image Segmentation",
      intro:
        "Created a web-based application with the integration of deep learning model for detecting the pedestrains.",
      image: pd,
      url: "https://github.com/bonie09/pedestrian-detection",
    },
    {
      title: "Message System",
      intro:
        "Developed a chat room for employees to provide updates on sprints to their managers.",
      image: chat,
      url: "https://github.com/bonie09/Message_system",
    },
    {
      title: "Stock Prediction",
      intro:
        "Implemented LinearRegression model for predicting prices for stocks.",
      image: stock,
      url: "https://github.com/bonie09/Stock-prediction",
    },
    {
      title: "Dice Game",
      intro:
        "Developed a game for 2 players to compete with each other towards the finish line by moving ahead some numbers of steps turn by turn on a defined track.",
      image: game,
      url: "https://github.com/bonie09/Dice-Game",
    },
    {
      title: "Online Shopping Store",
      intro: "Developed a system for shopping using basics of JAVA.",
      image: shop,
      url: "https://github.com/bonie09/Online-Shopping-Store",
    },
  ],
};

export default projectsSection;
