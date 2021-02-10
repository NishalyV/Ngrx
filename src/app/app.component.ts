import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { shopppingItem } from './store/model/shopping-item.model';
import { appState } from './store/model/app-state.model';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, LoadItemAction } from './store/actions/shoppinng.action';
import { ShoppingService } from './shopping.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrxpro';
  opened = false;
  fileToUpload: File = null;
  public shoppingItem$: Observable<shopppingItem[]>;
  public loading$: Observable<Boolean>;
  public error$: Observable<Error>;
  public newShoppingItem$: shopppingItem = { id: ' ', name: ' ' };
  constructor(private store: Store<appState>,
    private shoppingservice:ShoppingService) { }
  ngOnInit() {
    this.shoppingItem$ = this.store.select(store => store.shopping.list);
    console.log(this.shoppingItem$);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
    setTimeout(() => this.store.dispatch(new LoadItemAction), 3000);
    
  }
  togglesidebar(){
    this.opened=!this.opened;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.shoppingservice.postFile(this.fileToUpload).subscribe(data => {
      alert('file uploaded successfully');
      }, error => {
        console.log(error);
      });
  }
  addItem() {
    //   this.newShoppingItem$.id=uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem$));
    this.newShoppingItem$ = { id: ' ', name: ' ' };
    setTimeout(() => this.store.dispatch(new LoadItemAction), 3000);

  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}