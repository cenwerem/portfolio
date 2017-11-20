import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  formalIntro = 'Full Stack Developer with +4.5 years experience. Can design clean intuitive and responsive user interfaces using HTML and Javascript in Angular framework, while creating Java APIs in the back-end to service RESTful Webservice calls. I have a keen edge for empathic design and have thus conducted several successful A/B tests for product variations using Google Optimize.';
  informalIntro = "I'm Chinny :) software developer in the tri state area. I love writing music when I'm not writing code. No I cannot sing but I may or may not move you to tears with my lyrics :) I'm ridiculed for being annoyingly keen on little details but that I feel comes with the profession. Sometimes when I sleep I'm RESTful.";

  frontEndSkills = ['Javascript', 'TypeScript', 'AngularJS', 'Angular 2', 'HTML', 'CSS', 'SCSS'];
  backEndSkills = ['Java', 'PL/SQL', 'RESTful Web Services', 'Oracle', 'Spring', 'JDBC'];
  testingSkills = ['A/B Testing', 'Cucumber', 'JUnit', 'Jasmine', 'Mockito'];
  versioning = ['GIT', 'Subversion', 'Stash'];
  others = ['UNIX'];

  skills = [
    {
      title: 'Front End',
      value: this.frontEndSkills
    },
    {
      title: 'Back End',
      value: this.backEndSkills
    },
    {
      title: 'Testing',
      value: this.testingSkills
    },
    {
      title: 'Front End',
      value: this.versioning
    },
    {
      title: 'Others',
      value: this.others
    }
  ];
  showInformalIntro = false;

  toggleIntro(flag){
    this.showInformalIntro = flag;
  }
}
