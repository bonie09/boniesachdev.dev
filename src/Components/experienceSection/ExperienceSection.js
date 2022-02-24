import accenture from '../../images/companies images/accenture.png';
import sarvaswa from '../../images/companies images/sarvaswa.png';

export const experienceInfo = {
    title: "Experience",
    companies: [
      {
        companyName: "Accenture Solutions Pvt. Ltd.",
        image: accenture,
        jobtitle: "Associate Software Engineer",
        duration: "January 2021 - April 2022",
        descBullets: [
          "I have a total 1+ year of experience in IBM WebSphere Application Server on Linux and Windows platforms. I was responsible for day-to-day management activities with servers on the project deliverables.", 
          "I have performed application deployment on developer fixes to production, renewal of SSL certificates, patching of servers, database refreshes on all environments, and supported application servers in IBM WebSphere Application Server Administration."
        ]
      },
      {
        companyName: "Sarvaswa Ventures (OPC) Pvt. Ltd.",
        image: sarvaswa,
        jobtitle: "Web Development Intern",
        duration: "December 2018 - February 2019",
        descBullets: [
          "Developed an Enterprise Resource Planning (ERP) system for a company which managed and integrated a company's financials, manufacturing, operations, supply chain and human resources activities.",
          "Using Web-Technologies like HTML5, CSS3, JavaScript, jQuery, AJAX, PHP, MySQL & LARAVEL PHP Framework. "
        ]
      }
    ]
  };

  export default experienceInfo;