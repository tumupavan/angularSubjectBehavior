import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OrderCount } from 'src/app/interfaces/order-count';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  cartTotal: number = 0;
  favoriteTotal: number = 0;

  //alternate way to user observable
  cartObservable$: Observable<OrderCount> | undefined;

  subscription: Subscription | undefined;

  ngOnInit(): void {

    this.subscription = this.orderService.getOrderCount().subscribe((orderCount) =>{
      this.cartTotal = orderCount.cartTotal;
      this.favoriteTotal = orderCount.favoriteTotal;
    });

    //alternate way to user observable
    this.cartObservable$ = this.orderService.getOrderCount();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
