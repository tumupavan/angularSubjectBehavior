import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  cartTotal: number = 0;
  favoriteTotal: number = 0;

  ngOnInit(): void {

    this.orderService.getOrderCount().subscribe((orderCount) =>{
      this.cartTotal = orderCount.cartTotal;
      this.favoriteTotal = orderCount.favoriteTotal;
    });

  }

}
