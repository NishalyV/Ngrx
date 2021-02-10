import { shopppingItem } from "../model/shopping-item.model";
import { shoppingAction, AddItemAction, shoppingActionTypes } from '../actions/shoppinng.action';

export interface shoppingState {
    list: shopppingItem[],
    loading: boolean,
    error: Error
}

const initialState: shoppingState = {
    list: [],
    loading: false,
    error: undefined

};

export function shoppingReducer(state: shoppingState = initialState, action: shoppingAction) {
    switch (action.type) {
        case shoppingActionTypes.LOAD_ITEM:
            return { ...state, loading: true };
        case shoppingActionTypes.LOAD_ITEM_SUCCESS:
            return { ...state, list: action.payload, loading: false };
        case shoppingActionTypes.LOAD_ITEM_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case shoppingActionTypes.ADD_ITEM:
            return { ...state, loading: true };
        case shoppingActionTypes.ADD_ITEM_SUCCESS:
            return { ...state, list: [...state.list, action.payload], loading: false };
        case shoppingActionTypes.ADD_ITEM_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case shoppingActionTypes.DELETE_ITEM:
            return { ...state, loading: true };
        case shoppingActionTypes.DELETE_ITEM_SUCCESS:
            return { ...state, list: state.list.filter(item => item.id !== action.payload), loading: false };
        case shoppingActionTypes.DELETE_ITEM_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}