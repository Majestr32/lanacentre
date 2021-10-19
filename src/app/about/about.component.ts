import { Loader } from '@googlemaps/js-api-loader';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  map : google.maps.Map | undefined;
  clinicServicesList = [
    'Психоанализ',
    'Таропсихология',
    'Нумерология',
    'Висцеральная, мануальная, огненная терапия',
    'Фитотерапия',
    'Моксотерапия',
    'Гирудотерапия',
    'Иглоукалывание',
    'Хиджама',
    'Гипоксия',
    'Гипноз, кодирование, гипнотический регресс',
    'Медовый массаж, массаж гуаша',
    'Массаж рук, стоп',
    'Вакуумные банки',
    'Скульптура лица'
  ];
  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyAo28QNlDAdLBGkOYV0xI-j5GQJeRST1IM'
    })

    loader.load().then(() => {
      this.map = new google.maps.Map(document.getElementById("map")!,{
        center: {lat: 50.425336358364824, lng: 30.66071107840508},
        zoom: 16
      })
      this.createMarker();
    })
  }
  createMarker() {

    // list of hardcoded positions markers 
     var myLatLngList = {lat: 50.425336358364824, lng: 30.66071107840508};

        //iterate latLng and add markers 
         var marker = new google.maps.Marker({
             position: myLatLngList,
             map: this.map,
             title: 'markers'
         });
 };

}
