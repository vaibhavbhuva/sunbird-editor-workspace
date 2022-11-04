import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import 'jquery.fancytree';
declare var $: any;
import { TreeService } from '../../services/tree/tree.service';
import { BaseEventemitterComponent } from '../base-eventemitter/base-eventemitter.component';

@Component({
  selector: 'lib-fancytree',
  templateUrl: './fancytree.component.html',
  styleUrls: ['./fancytree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancytreeComponent extends BaseEventemitterComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('fancyTree') public tree!: ElementRef;
  @Input('items') public items: any = [];
  
  constructor(private treeService: TreeService) {
    super()
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initTree();
  }

  initTree() {
    $(this.tree.nativeElement).fancytree({
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
        this.emitInitEvent(data.node);
        this.setActiveNode();
        this.setExpandNode();
      },
      click: (event: any, data: any): boolean => {
        this.emitClickEvent(data.node);
        return true;
      },
      activate: (event: any, data: any) => {
        this.emitActiveEvent(data.node);
      },
      renderNode: (event: any, data: any) => {
        this.emitRenderEvent(data.node);
      }
    });
    this.treeService.setTreeElement = this.tree.nativeElement;
  }

  getFirstChild() {
    return this.fancyTree.getFirstChild();
  }

  setActiveNode() {
    this.getFirstChild().setActive();
  }

  setExpandNode(node?: any) {
    if (node) {
      node.setExpanded(true);
    } else {
      this.getFirstChild().setExpanded(true);
    }
  }

  get fancyTree() {
    return $.ui.fancytree.getTree(this.tree.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['items']['firstChange']) {
      console.log("changes", changes);
      this.fancyTree.reload(changes['items'].currentValue).done((data: any) => {
        this.emitRenderEvent(data);
      });
    }
  }

}
