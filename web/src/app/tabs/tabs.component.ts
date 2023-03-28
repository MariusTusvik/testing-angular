import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

interface QueryParams {
  tabIndex: number;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabIndex = 0;

  constructor(private route: ActivatedRoute) {}
/* 
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params & QueryParams) => {
      this.tabIndex = params.tabIndex || 0;
    });
  } */

}
