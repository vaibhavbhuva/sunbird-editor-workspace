import { Component, OnInit } from '@angular/core';
import { FancytreeComponent, TreeService } from 'sunbird-core-editor';

@Component({
  selector: 'lib-custom-fancytree',
  templateUrl: './custom-fancytree.component.html',
  styleUrls: ['./custom-fancytree.component.css']
})
export class CustomFancytreeComponent extends FancytreeComponent implements OnInit {

  constructor(treeService: TreeService) {
    super(treeService)
    this.items = [
      {
        title: "Folder 1", key: "1", folder: true, children: [
          { title: "Node 1.1", key: "2" },
          { title: "Node 1.2", key: "3" }
        ]
      },
      { title: "Node 2", key: "4" },
      {
        title: "Folder 3", key: "5", folder: true, children: [
          { title: "Node 3.1", key: "6" },
          { title: "Node 3.2", key: "7" }
        ]
      }
    ];
   }

  override ngOnInit(): void {
  }

}
