import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})
export class ContactComponent {
  contactTitle = 'CONTACT';
  emailText = 'Email me: ';
  emailAddress = 'chinonso.enwerem@gmail.com';
  linkdInUrl = 'https://www.linkedin.com/in/cenwerem/';
  gitHubText = 'I designed this portfolio in Angular 2. Source code on GitHub.';
  gitHubUrl = 'https://github.com/cenwerem/portfolio';
}
