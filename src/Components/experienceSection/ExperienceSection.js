import accenture from "../../images/companies images/accenture.png";
import sarvaswa from "../../images/companies images/sarvaswa.png";
import quickbase from "../../images/companies images/quickbase.png";

export const experienceInfo = {
  title: "Experience",
  companies: [
    {
      companyName: "Quickbase",
      image: quickbase,
      jobtitle: "Software Engineer Co-op",
      duration: "January 2024 - June 2024",
      descBullets: [
        "Developed a column resizing feature for grid components using React.js and Redux in Docker containers, which resulted in a 50% improvement in the efficiency of header components, enhancing the user experience with smoother adjustments",
        "Implemented a density spacing feature in React.js and C++, allowing users to choose grid styling options and storing preferences via GraphQL, enhancing keyboard and voice-over accessibility for more user-friendly experience",
        "Configured CI/CD pipelines with GitHub Actions for streamlined build, test, and deployment processes, and deployed 1,000+ summary-report versions using AWS CloudFormation",
        "Automated performance testing with Playwright on data sets ranging from 500x6 to 32,000x26 rows & columns and conducted cross-browser testing (Chromium, Firefox, WebKit), ensuring efficient performance and optimal grid load times across large datasets",
        "Achieved 80% code coverage by crafting thorough robust Jest tests, squashing major bugs, and maintaining top-notch code quality",
      ],
    },
    {
      companyName: "Accenture Solutions Pvt. Ltd.",
      image: accenture,
      jobtitle: "Associate Software Engineer",
      duration: "January 2021 - April 2022",
      descBullets: [
        "Developed and deployed a centralized web application using ReactJS Framework in a team of 15; consolidated mandatory links and boosted team productivity by reducing time spent searching for links and information",
        "Created Maximo applications using Java, JavaScript, ASP.NET and Maximo's application designer to improve asset management; reduced maintenance response time by 25%",
        "Streamlined workflows by identifying bottlenecks, optimizing processes, and creating self - service solutions that reduced ticket resolution time by 40 % and elevated customer satisfaction by 25 %",
        "Enhanced the deployment process by introducing Jenkins automation; cut down release time from 2 hours to 45 minutes, resulting in a 30% increase in the deployment frequency",
        "Honored with the ‘Pinnacle Rising Star Award’ for outstanding performance amongst a team of 8",
      ],
    },
    {
      companyName: "Sarvaswa Ventures (OPC) Pvt. Ltd.",
      image: sarvaswa,
      jobtitle: "Web Development Intern",
      duration: "December 2018 - February 2019",
      descBullets: [
        "Designed and built a data management module within the client's ERP system using Laravel that automated tracking of employee and vendor records; minimized weekly manual efforts by 30-35 hours and improved accuracy by 80%",
        "Spearheaded full-stack development of a Chartered Accountant web application that optimized tax filing for users using 100+ tax forms; integrated PHP mailer for seamless communication",
        "Led the end-to-end development of a web-based application that simplified task tracking and communication using HTML, CSS, JavaScript, PHP, and MySQL; delivered 90% of projects on time",
      ],
    },
  ],
};

export default experienceInfo;
