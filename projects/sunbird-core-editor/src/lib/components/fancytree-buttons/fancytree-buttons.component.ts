import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TreeService } from '../../services/tree/tree.service';

const DEFAULT_OPTIONS = {
  showChildButton: true,
  showSiblingButton: true
}

@Component({
  selector: 'lib-fancytree-buttons',
  templateUrl: './fancytree-buttons.component.html',
  styleUrls: ['./fancytree-buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancytreeButtonsComponent implements OnInit {
  private _config: any = DEFAULT_OPTIONS;

  @Input()
  set config(configs: any) {
    this._config = Object.assign({}, this._config, configs);
  }

  get config(): any {
    return this._config;
  }
  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
  }

  addChild(): void {
    this.addNode('child');
  }

  addSibling(): void {
    this.addNode('sibling');
  }

  addNode(createType: string): void {
    let newNode;
    const selectedNode: any = this.treeService.getActiveNode();
    const uniqueId = Math.floor((Math.random() * 100) + 1);
    const nodeTitle = "Untitled name";
    const node: any = {
      id: uniqueId,
      title: nodeTitle,
      tooltip: nodeTitle,
      folder: true,
    };
    newNode = (createType === 'sibling') ? selectedNode.appendSibling(node) : selectedNode.addChildren(node);
    newNode.setActive();
    selectedNode.setExpanded();
  }

}
