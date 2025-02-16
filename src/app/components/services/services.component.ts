import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { 
      icon: 'assets/icons/search-doctor.svg', 
      title: 'Search doctor', 
      description: 'Choose your doctor from thousands of specialists.'
    },
    { 
      icon: 'assets/icons/online-pharmacy.svg', 
      title: 'Online pharmacy', 
      description: 'Buy your medicines with our mobile application.'
    },
    { 
      icon: 'assets/icons/consultation.svg', 
      title: 'Consultation', 
      description: 'Free consultation with our trusted doctors.'
    }
  ];
}
