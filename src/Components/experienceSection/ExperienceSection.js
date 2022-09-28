import accenture from "../../images/companies images/accenture.png";
import sarvaswa from "../../images/companies images/sarvaswa.png";

export const experienceInfo = {
  title: "Experience",
  companies: [
    {
      companyName: "Accenture Solutions Pvt. Ltd.",
      image: accenture,
      jobtitle: "Associate Software Engineer",
      duration: "January 2021 - April 2022",
      descBullets: [
        "Provided server support and application support for IBM Maximo Application",
        "Improved server response time using the Dynatrace monitoring dashboard",

        "Performed code migrations on developer fixes to QA & Production Environment",
        "Renewed multiple SSL certificates for the client servers using Venafi",
        "Experienced in Jenkins and Bitbucket for maintaining the builds and CI/CD automation deployment pipelines",
        "Designed a webpage to bring down all the mandatory links into a one page which reduced the workload of team by 70%",
      ],
    },
    {
      companyName: "Sarvaswa Ventures (OPC) Pvt. Ltd.",
      image: sarvaswa,
      jobtitle: "Web Development Intern",
      duration: "December 2018 - February 2019",
      descBullets: [
        "Developed a chartered accountant website which included phases from requirement gatherings and analysis to implementation of front-end as well as back-end web development skills like HTML5, CSS3, MySQL, and PHP",
        "Created an employee and vendor data management component for a client's ERP system. This resulted in the elimination of 30-35 weekly person hours of manual record-saving",
        "Technologies used: HTML5, CSS3, JavaScript, jQuery, AJAX, PHP, MySQL, LARAVEL PHP Framework",
      ],
    },
  ],
};

export default experienceInfo;
