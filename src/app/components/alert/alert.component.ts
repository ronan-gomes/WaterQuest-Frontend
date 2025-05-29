import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, input } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.css',
    standalone: false
})
export class AlertComponent {
  @Input() message!: string
  @Input() type!: string

  constructor(private bsModalRef: BsModalRef){}

  onClose(){
    this.bsModalRef.hide()
  }
}
