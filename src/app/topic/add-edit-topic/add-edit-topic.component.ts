import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-add-edit-topic',
    templateUrl: './add-edit-topic.component.html',
    styleUrls: ['./add-edit-topic.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AddEditTopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
