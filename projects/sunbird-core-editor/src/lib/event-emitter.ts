import { EventEmitter} from '@angular/core';
export class CEventEmitter<T> extends EventEmitter {
    constructor() { 
        super()
    }

    init(data: any = {}): void {
        this.emitEvent({type: "INIT", data})
    }

    click(data: any = {}): void {
        this.emitEvent({type: "CLICK", data})
    }

    activate(data: any = {}): void {
        this.emitEvent({type: "ACTIVATE", data})
    }

    reload(data: any = {}): void {
        this.emitEvent({type: "RELOAD", data})
    }

    render(data: any = {}): void {
        this.emitEvent({type: "RENDER", data})
    }

    emitEvent(data: any): void {
        console.log(`Event:: ${data.type} ::`, data.data);
        this.emit(data)
    }
}
