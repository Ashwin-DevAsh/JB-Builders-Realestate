import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }





  public services:Service[] = [
    {
      image:"https://realtynxt.com/wp-content/uploads/2017/11/Optimus-2-b.jpg",
      title:"Real Estate",
      subTitle:"You pay realtors because they have reach and proven results, and the Noble Black Team wants you to know it’s extraordinary at both. It helps that the results-driven sentiment here drives home the abstract idea of “extraordinary reach”"
   },
   {
    image:"https://archipendium.com/wp-content/uploads/2019/03/5_LAWN-AREA.jpg",
    title:"Infrastructure",
    subTitle:"You pay realtors because they have reach and proven results, and the Noble Black Team wants you to know it’s extraordinary at both. It helps that the results-driven sentiment here drives home the abstract idea of “extraordinary reach”"
   },
   {
    image:"https://www.wofs.com/wp-content/uploads/2009/07/selling-your-house-12-ways-to-make-it-happen-01.jpg",
    title:"Selling Homes",
    subTitle:"You pay realtors because they have reach and proven results, and the Noble Black Team wants you to know it’s extraordinary at both. It helps that the results-driven sentiment here drives home the abstract idea of “extraordinary reach”"
   }
 ]

  ngOnInit(): void {
  }

}

interface Service{
  image:string,
  title:string,
  subTitle:string
}

