import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './works.component.html',
  styleUrls: [ './works.component.css' ]
})
export class WorksComponent {
  worksTitle = 'WORKS';
  c1OaoRoles = [
  'AngularJS with HTML, SCSS, CSS and JavaScript for front end development.',
  'RESTful Webservice GETs and POSTs for API communications.',
  'Automation testing business cases using Gherkin and Ruby in Cucumber.',
  'A/B testing using Google Optimize.',
  'Jasmine for UI unit testing.',
  'JUnit and Mockito for backend unit testing.',
  'GIT for version controlling.',
  'Regularly work with Product Manager to split new functionality into stories, arrange according to 10 day sprints and groom the stories in AGILE environment.']
  seiSwpRoles = [
    'HTML, CSS and JSP for user interface',
    'Java and PL/SQL in Spring framework for back end business logic',        
    'RESTful Webservice connectivity with MorningStar for near real time trading prices'
  ];
  seiFrRoles = [
    'HTML with JSF Richfaces for front end development',
    'Java and PL/SQL in Spring framework for back end business logic',
    'SQL*Plus for DB Schema DDLs',
    'Application hosted on Weblogic Server',
    'Crystal Reports (BOXI) for desinging user reports'
  ];

  experienceList = [
    {
      application: 'Capital One, Online Account Opening',
      title: 'Full Stack Developer',
      summary: 'Front end and back end development of Online Account Opening web application',
      roles: this.c1OaoRoles,
      Url: 'https://apply.capitalone.com'
    },
    {
      application: 'SEI Investments, SEI Wealth Platform',
      title: 'Java/J2EE & PL/SQL Developer',
      summary: 'Front end and back end development of wealth-trading platform for banks and advisors',      
      roles: this.seiSwpRoles
    },
    {
      application: 'SEI Investments, Fee Rebates',
      title: 'Java/J2EE & PL/SQL Developer',
      summary: 'Full stack development of internal web application for calculating and distributing rebates to customer firms',            
      roles: this.seiFrRoles
    }
  ];
}
