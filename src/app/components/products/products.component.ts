import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList :any ;

  constructor( private api :ApiService, 
               private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=> {
      this.productList= res ; 
      console.log(res); 

      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
     
      });

    })
  }
  addToCart(item:any){
    this.cartService.addtoCart(item);

  }

}
