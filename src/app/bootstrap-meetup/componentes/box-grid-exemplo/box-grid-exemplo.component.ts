import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-grid-exemplo',
  templateUrl: './box-grid-exemplo.component.html',
  styleUrls: ['./box-grid-exemplo.component.scss']
})
export class BoxGridExemploComponent implements OnInit {
  @Input() conteudo: string;

  constructor() { }

  ngOnInit() {
  }

}
