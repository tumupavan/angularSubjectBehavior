import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { OrderCount } from 'src/app/interfaces/order-count';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  cartTotal: number = 0;
  favoriteTotal: number = 0;

  ngOnInit(): void {

    this.orderService.getOrderCount().subscribe((orderCount) =>{
      this.cartTotal = orderCount.cartTotal;
      this.favoriteTotal = orderCount.favoriteTotal;
    });

  }

  itemList: Item[] = [
    {name: "Item1", inCart: false,isFavorite: false},
    {name: "Item2", inCart: false,isFavorite: false},
    {name: "Item3", inCart: false,isFavorite: false}
  ]

  addToCart(item: Item) : void {
    item.inCart = true;
    let count: OrderCount = {
      cartTotal: this.cartTotal +1,
      favoriteTotal : this.favoriteTotal 
    }
    this.orderService.setOrderCount(count);
  }

  addToWishList(item: Item) {
    item.isFavorite = true;
    let count: OrderCount = {
      cartTotal: this.cartTotal,
      favoriteTotal : this.favoriteTotal + 1
    }
    this.orderService.setOrderCount(count);
  }

}
