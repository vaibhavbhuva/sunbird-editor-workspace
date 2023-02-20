import { Component, EventEmitter, Output } from '@angular/core';

enum Event {
  Init = "init",
  Click = "click"
}

@Component({
  selector: 'lib-base-eventemitter',
  template: `
    <p>
      base-eventemitter works!
    </p>
  `,
  styles: [
  ]
})
export class BaseEventemitterComponent {
  @Output('init') public treeInitEmitter: EventEmitter<any> = new EventEmitter();
  @Output('click') public treeClickEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  emitInitEvent(eventData: any): void {
    this.treeInitEmitter.emit(eventData);
  }

  emitClickEvent(eventData: any): void {
    this.treeClickEmitter.emit(eventData);
  }
}
