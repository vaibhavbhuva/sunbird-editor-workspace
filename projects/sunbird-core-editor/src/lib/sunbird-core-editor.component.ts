import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import 'jquery.fancytree';
declare var $: any;

@Component({
  selector: 'lib-sunbird-core-editor',
  template: `
    <p>
      sunbird-core-editor works!
    </p>
    <div id="fancyTree"></div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunbirdCoreEditorComponent implements OnInit, OnChanges {
  @Input('items') public items: any = [];
  @Output() public treeEventEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.initTree();
  }

  initTree() {
    $("#fancyTree").fancytree({
      extensions: ['glyph', 'dnd5'],
      clickFolderMode: 3,
      source: this.items,
      escapeTitles: true,
      glyph: {
        preset: 'awesome4',
        map: {
          folder: 'icon folder sb-fancyTree-icon',
          folderOpen: 'icon folder outline sb-fancyTree-icon'
        }
      },
      dnd5: {
        autoExpandMS: 400,
        // focusOnClick: true,
        preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
        preventRecursion: true, // Prevent dropping nodes on own descendants
        dragStart: (node: any, data: any) => {
          /** This function MUST be defined to enable dragging for the tree.
           *  Return false to cancel dragging of node.
           */
          // const draggable = _.get(this.config, 'mode') === 'edit' ? true : false;
          return true;
        },
        dragEnter: (node: any, data: any) => {
          /** data.otherNode may be null for non-fancytree droppables.
           *  Return false to disallow dropping on node. In this case
           *  dragOver and dragLeave are not called.
           *  Return 'over', 'before, or 'after' to force a hitMode.
           *  Return ['before', 'after'] to restrict available hitModes.
           *  Any other return value will calc the hitMode from the cursor position.
           */
          // Prevent dropping a parent below another parent (only sort
          // nodes under the same parent)
          /*           if(node.parent !== data.otherNode.parent){
                      return false;
                    }
                    // Don't allow dropping *over* a node (would create a child)
                    return ["before", "after"];
          */
          return true;
        },
        dragDrop: (node: any, data: any) => {
          /** This function MUST be defined to enable dropping of items on
           *  the tree.
           */
          data.otherNode.moveTo(node, data.hitMode);
          // return this.dragDrop(node, data);
        },
        filter: {
          autoApply: true,
          autoExpand: false,
          counter: true,
          fuzzy: false,
          hideExpandedCounter: true,
          hideExpanders: false,
          highlight: true,
          leavesOnly: false,
          nodata: true,
          mode: 'dimm'
        }
      },
      init: (event: any, data: any) => {
        this.treeEventEmitter.emit({ type: event.type, data: data.node });
        this.setActiveNode();
      },
      click: (event: any, data: any): boolean => {
        this.treeEventEmitter.emit({ type: event.type, data: data.node });
        return true;
      },
      activate: (event: any, data: any) => {
        this.treeEventEmitter.emit({ type: event.type, data: data.node });
      },
      renderNode: (event: any, data: any) => {
      }
    });
  }

  setActiveNode() {
    this.fancyTree.getFirstChild().setActive();
  } 

  get fancyTree() {
    return $.ui.fancytree.getTree("#fancyTree");
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes['items']['firstChange']) {
      console.log("changes", changes);
      this.fancyTree.reload(changes['items'].currentValue).done((data: any) => {
        this.treeEventEmitter.emit({ type: 'fancytreereload', data: data });
      });
    }
  }

  

}
