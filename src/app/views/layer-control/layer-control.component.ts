import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-layer-control',
  templateUrl: './layer-control.component.html',
  styleUrls: ['./layer-control.component.css']
})
export class LayerControlComponent implements OnInit {

  items = [{
    title: '当前图层',
    icon: 'fa fa-list',
    click: function () {
      alert(1);
    }
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }, {
    title: '当前图层',
    icon: 'fa fa-list'
  }];

  constructor() {}

  ngOnInit() {}

}
