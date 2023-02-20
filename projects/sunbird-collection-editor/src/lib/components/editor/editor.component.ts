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
  public dataTemp = [
    {
      title: 'Marigold',
      folder: true,
      root: true,
      key: "0",
      children: [{
        title: "Chapter 1", key: "1", 
        folder: true, 
        root: false,
        children: [
          { title: "Node 1.1", key: "2", folder: false, root: false, },
          { title: "Node 1.2", key: "3", folder: false, root: false, }
        ]
      },
      { title: "Chapter 2", key: "4", folder: true, root: false, },
      {
        title: "Chapter 3", key: "5", 
        folder: true, 
        root: false,
        children: [
          { title: "Node 3.1", key: "6", folder: false, root: false },
          { title: "Node 3.2", key: "7" , folder: false, root: false }
        ]
      }]
    }
  ];
  public data = JSON.parse(JSON.stringify(this.dataTemp));
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

  treeEventListener(data: any) {
    console.log("treeEventListener");
    this.currentNode = data;
  }

  deleteNode() {
    const selectedNode = this.treeService.getActiveNode();
    const afterDeleteNode = selectedNode.getPrevSibling() ? selectedNode.getPrevSibling() : selectedNode.getParent();
    afterDeleteNode.setActive(true);
    selectedNode.remove();
  }

}

