import { shopppingItem } from './shopping-item.model';
import { shoppingState } from '../reducers/shopping.reducer';

export interface appState{
   readonly shopping:shoppingState;
}