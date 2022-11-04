import { Component, EventEmitter, Output } from '@angular/core';

enum Event {
  Init = "init",
  Click = "click",
  Activated = "activated",
  Reload = "reload",
  Render = "render"
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
  @Output('activated') public treeActiveEmitter: EventEmitter<any> = new EventEmitter();
  @Output('reload') public treeReloadEmitter: EventEmitter<any> = new EventEmitter();
  @Output('render') public treeRenderEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  emitInitEvent(eventData: any): void {
    this.treeInitEmitter.emit({type: Event.Init, data: eventData});
  }

  emitClickEvent(eventData: any): void {
    this.treeClickEmitter.emit({type: Event.Click, data: eventData});
  }

  emitActiveEvent(eventData: any): void {
    this.treeActiveEmitter.emit({type: Event.Activated, data: eventData});
  }

  emitReloadEvent(eventData: any): void {
    this.treeReloadEmitter.emit({type: Event.Reload, data: eventData});
  }

  emitRenderEvent(eventData: any): void {
    this.treeRenderEmitter.emit({type: Event.Render, data: eventData});
  }

}
