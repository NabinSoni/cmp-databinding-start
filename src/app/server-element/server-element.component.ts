import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // This will enable css styles to all project components
})
export class ServerElementComponent implements OnInit {
 @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(name){
  console.log(name.value);
}
}
