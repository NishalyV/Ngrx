import { Action } from '@ngrx/store';
import { shopppingItem } from '../model/shopping-item.model';

export enum shoppingActionTypes {
    LOAD_ITEM = '[SHOPPING]Load Item',
    LOAD_ITEM_SUCCESS = '[SHOPPING]Load Item Success',
    LOAD_ITEM_FAILURE = '[SHOPPING]Load Item Failure',
    ADD_ITEM = '[SHOPPING]Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING]Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING]Add Item Failure',
    DELETE_ITEM = '[SHOPPING]Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING]Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING]Delete Item Failure'
}

export class LoadItemAction implements Action {
    readonly type = shoppingActionTypes.LOAD_ITEM;
}

export class LoadItemActionSuccess implements Action {
    readonly type = shoppingActionTypes.LOAD_ITEM_SUCCESS;
    constructor(public payload: shopppingItem) { }
}

export class LoadItemActionFailure implements Action {
    readonly type = shoppingActionTypes.LOAD_ITEM_FAILURE;
    constructor(public payload: Error) { }
}

export class AddItemAction implements Action {
    readonly type = shoppingActionTypes.ADD_ITEM;
    constructor(public payload: shopppingItem) { }
}

export class AddItemActionSuccess implements Action {
    readonly type = shoppingActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: shopppingItem) { }
}

export class AddItemActionFailure implements Action {
    readonly type = shoppingActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
    readonly type = shoppingActionTypes.DELETE_ITEM;
    constructor(public payload: string) { }
}

export class DeleteItemActionSuccess implements Action {
    readonly type = shoppingActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload: string) { }
}

export class DeleteItemActionFailure implements Action {
    readonly type = shoppingActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload: string) { }
}

export type shoppingAction = LoadItemAction |
    LoadItemActionSuccess |
    LoadItemActionFailure |
    AddItemAction | 
    AddItemActionSuccess|
    AddItemActionFailure|
    DeleteItemAction|
    DeleteItemActionSuccess|
    DeleteItemActionFailure;