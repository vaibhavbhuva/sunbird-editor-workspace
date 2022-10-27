import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sunbird-knowlg-editor',
  template: `
    <p>
      sunbird-knowlg-editor works!
    </p>
    <lib-sunbird-core-editor [items]="data" (treeEventEmitter)="treeEventListener($event)" ></lib-sunbird-core-editor>
    <button [disabled]="!isFolder" (click)="addSibling()">Add sibling</button>
    <button (click)="reset()">Reset</button>
  `,
  styles: [
  ]
})
export class SunbirdKnowlgEditorComponent implements OnInit {
  public data = [
    { title: "Node 1", key: "1" },
    {
      title: "Folder 2", key: "2", folder: true, children: [
        { title: "Node 2.1", key: "3" },
        { title: "Node 2.2", key: "4" }
      ]
    }
  ];
  public isFolder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  treeEventListener(event: any) {
    console.log("Tree Events :: ", event);
    switch (event.type) {
      case "fancytreeactivate":
        this.isFolder = event.data.folder;
        break;
      default:
        break;
    }
  }

  addSibling() {
    console.log('click add sibling button');
    this.data = [{ title: "Node 1", key: "1" }];
  }

  reset() {
    console.log('click reset button');
    this.data = [
      { title: "Node 1", key: "1" },
      {
        title: "Folder 2", key: "2", folder: true, children: [
          { title: "Node 2.1", key: "3" },
          { title: "Node 2.2", key: "4" }
        ]
      }
    ];
  }

}
