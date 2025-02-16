import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  testimonial = {
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously.",
    name: "Edward Newgate",
    role: "Founder Circle"
  };
}
