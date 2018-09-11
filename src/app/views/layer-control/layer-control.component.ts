import {
  LayerComponent
} from './components/layer/layer.component';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  BsModalRef,
  BsModalService
} from 'ngx-bootstrap';
import {
  TempComponent
} from './components';

@Component({
  selector: 'app-layer-control',
  templateUrl: './layer-control.component.html',
  styleUrls: ['./layer-control.component.css']
})
export class LayerControlComponent implements OnInit {

  items = [{
    title: '当前图层',
    icon: 'fa fa-list',
    click: () => this.openLayer()
  }, {
    title: '当前图层',
    icon: 'fa fa-list',
    click: () => {}
  }, {
    title: '当前图层',
    icon: 'fa fa-list',
    click: () => {}
  }, {
    title: 'temp',
    icon: 'fa fa-list',
    click: () => this.openTempDialog()
  }];

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}
  // 临时
  openTempDialog() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(TempComponent, {
      initialState,
      backdrop: true,
      ignoreBackdropClick: false
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  // 当前图层
  openLayer() {
    this.bsModalRef = this.modalService.show(LayerComponent);
  }
}
