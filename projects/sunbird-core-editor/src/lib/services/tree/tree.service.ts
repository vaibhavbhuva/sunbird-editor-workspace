import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  private _treeNativeElement: any;
  constructor() { }

  set setTreeElement(element: any) {
    this._treeNativeElement = element;
  }

  get getTreeElement() {
    return this._treeNativeElement;
  }

  get fancyTree() {
    return $.ui.fancytree.getTree(this.getTreeElement);
  }

  getActiveNode() {
    return this.fancyTree.getActiveNode();
  }

}
