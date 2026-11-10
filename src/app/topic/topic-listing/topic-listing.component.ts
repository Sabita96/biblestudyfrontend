import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-topic-listing',
    templateUrl: './topic-listing.component.html',
    styleUrls: ['./topic-listing.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TopicListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
