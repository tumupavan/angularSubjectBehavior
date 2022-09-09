import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderCount } from '../interfaces/order-count';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _orderCount : BehaviorSubject<OrderCount> = new BehaviorSubject<OrderCount>({
    cartTotal: 0,
    favoriteTotal:0
  });

  constructor() { }

  private _orderCount$ : Observable<OrderCount> = this._orderCount.asObservable();

  getOrderCount() : Observable<OrderCount> {
    return this._orderCount$;
  }

  setOrderCount(latestValue: OrderCount) : void {
    this._orderCount.next(latestValue);
  }

}
