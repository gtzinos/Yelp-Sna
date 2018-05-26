import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Some of Los Angeles Restaurants';
  subtitle:string="Results are limited to 200 restaurants"
  public mapData:any;
  lat: number = 36.175585;
  lng: number = -115.199071;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getAllRestaurants()
  }


  getAllRestaurants(){
    this.http.get(environment.api+"/maps").subscribe(data=>{
      this.mapData=data;
      console.log(data);
    })
  }

  getFiveStarsRestaurants(){
    this.http.get(environment.api+"/maps/5stars").subscribe(data=>{
      this.mapData=data;
      console.log(data);
    })
  }
}
