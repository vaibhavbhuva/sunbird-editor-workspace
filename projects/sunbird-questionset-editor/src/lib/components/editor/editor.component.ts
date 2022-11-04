import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CollectionService, TreeService } from 'sunbird-core-editor';

@Component({
  selector: 'lib-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
  @Input('config') public config: any;
  public fancytreeBtnConfig = {
    showSiblingButton: false
  }
  public dataTemp = [
    {
      title: 'Marigold',
      folder: true,
      key: "0",
      children: [{
        title: "Chapter 1", key: "1", 
        folder: true, 
        children: [
          { title: "Node 1.1", key: "2" },
          { title: "Node 1.2", key: "3" }
        ]
      },
      { title: "Chapter 2", key: "4", folder: true},
      {
        title: "Chapter 3", key: "5", 
        folder: true, 
        children: [
          { title: "Node 3.1", key: "6" },
          { title: "Node 3.2", key: "7" }
        ]
      }]
    }
  ];
  public data = JSON.parse(JSON.stringify(this.dataTemp));
  public isFolder: boolean = false;
  public currentNode: any;
  constructor(private collectionService: CollectionService, private treeService: TreeService) { }

  ngOnInit(): void {
    console.log("Editor config ::", this.config);
    this.collectionService.getHierarchy('do_123456').subscribe((result: any) => {
      console.log("Hello");
    })
  }

  onTreeInit(event: any) {
    console.log("init consumer");
  }

  treeEventListener(event: any) {
    console.log("treeEventListener");
    this.isFolder = event.data.folder;
    this.currentNode = event.data;
    console.log(this.treeService.getActiveNode().getLevel());
  }

  addSibling() {
    console.log('click add sibling button');
    this.data = [{ title: "Node 1", key: "1" }];
  }

  addFromLibrary() {
    console.log('click add from library button');
  }

  reset() {
    console.log('click reset button');
    this.data = JSON.parse(JSON.stringify(this.dataTemp));
  }

  deleteNode() {
    const selectedNode = this.treeService.getActiveNode();
    const afterDeleteNode = selectedNode.getPrevSibling() ? selectedNode.getPrevSibling() : selectedNode.getParent();
    afterDeleteNode.setActive(true);
    selectedNode.remove();
  }

}

