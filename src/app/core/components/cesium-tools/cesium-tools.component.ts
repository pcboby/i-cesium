import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-cesium-tools',
  templateUrl: './cesium-tools.component.html',
  styleUrls: ['./cesium-tools.component.css']
})
export class CesiumToolsComponent implements OnInit {
  @Input() items: any = [];

  constructor() {}

  ngOnInit() {}

}
