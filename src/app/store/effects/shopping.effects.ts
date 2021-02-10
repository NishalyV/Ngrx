import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadItemAction, shoppingActionTypes, LoadItemActionSuccess, LoadItemActionFailure, AddItemAction, AddItemActionSuccess, AddItemActionFailure, DeleteItemAction, DeleteItemActionSuccess, DeleteItemActionFailure } from '../actions/shoppinng.action';
import { ShoppingService } from 'src/app/shopping.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class shoppingEffects {
    @Effect() loadshopping$ = this.actions$.pipe
        (
            ofType<LoadItemAction>(shoppingActionTypes.LOAD_ITEM),
            mergeMap(
                ()=>this.shoppingservice.getShoppingItems().pipe(
                    map(data => new LoadItemActionSuccess(data)),
                    catchError(error => of(new LoadItemActionFailure(error)))
                )
            )
        )

        @Effect() addshopping$ = this.actions$.pipe
        (
            ofType<AddItemAction>(shoppingActionTypes.ADD_ITEM),
            mergeMap(
                (data)=>this.shoppingservice.addShoppingItems(data.payload).pipe(
                    map(()=> new AddItemActionSuccess(data.payload)),
                    catchError(error => of(new AddItemActionFailure(error)))
                )
            )
        )

        @Effect() deleteshopping$ = this.actions$.pipe
        (
            ofType<DeleteItemAction>(shoppingActionTypes.DELETE_ITEM),
            mergeMap(
                (data)=>this.shoppingservice.deleteShoppingItem(data.payload).pipe(
                    map(()=> new DeleteItemActionSuccess(data.payload)),
                    catchError(error => of(new DeleteItemActionFailure(error)))
                )
            )
        )
    constructor(private actions$: Actions, private shoppingservice: ShoppingService) { }
}