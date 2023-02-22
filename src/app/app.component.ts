import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatablePOC';
  public cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];
  public cars = [
    { "vin": "a165de", "year": 1992, "brand": "VW", "color": "Orange" },
    { "vin": "j6w54qgh", "year": 1980, "brand": "Audi", "color": "Black" },
    { "vin": "hrtwy34", "year": 2012, "brand": "Renault", "color": "Gray" },
    { "vin": "jejtyj", "year": 2011, "brand": "BMW", "color": "Blue" },
    { "vin": "g43gr", "year": 1995, "brand": "Mercedes", "color": "Orange" },
  ]
}
