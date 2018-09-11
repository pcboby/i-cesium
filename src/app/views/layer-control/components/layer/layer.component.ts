import {
  Component,
  OnInit
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {


  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}


}
