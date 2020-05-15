import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionType {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Code',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialze Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFail = '[Product] Update Product Fail',
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = "[Product] Create Product Success",
    CreateProductFail = "[Product] Create Product Fail",
    DeleteProduct = '[Product] Delete Product',
    DeleteProductSuccess = "[Product] Delete Product Success",
    DeleteProductFail = "[Product] Delete Product Fail"
}

export class ToggleProductCode implements Action{
    readonly type = ProductActionType.ToggleProductCode;

    constructor(public payload : boolean){}
}

export class SetCurrentProduct implements Action{
    readonly type = ProductActionType.SetCurrentProduct;
    constructor(public payload : Product){}
}

export class ClearCurrentProduct implements Action{
    readonly type = ProductActionType.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action{
    readonly type = ProductActionType.InitializeCurrentProduct;
}

export class Load implements Action{
    readonly type = ProductActionType.Load;
}

export class LoadSuccess implements Action{
    readonly type = ProductActionType.LoadSuccess;

    constructor(public payload: Product[]){}
}

export class LoadFail implements Action{
    readonly type = ProductActionType.LoadFail;

    constructor(public payload : string){}
}

export class UpdateProduct implements Action{
    readonly type = ProductActionType.UpdateProduct;

    constructor(public payload : Product){}
}

export class UpdateProductSuccess implements Action{
    readonly type = ProductActionType.UpdateProductSuccess;

    constructor(public payload : Product){}
}

export class UpdateProductFail implements Action{
    readonly type = ProductActionType.UpdateProductFail;

    constructor(public payload : string){}
}


export class CreateProduct implements Action {
    readonly type = ProductActionType.CreateProduct;
  
    constructor(public payload: Product) { }
  }
  
  export class CreateProductSuccess implements Action {
    readonly type = ProductActionType.CreateProductSuccess;
  
    constructor(public payload: Product) { }
  }
  
  export class CreateProductFail implements Action {
    readonly type = ProductActionType.CreateProductFail;
  
    constructor(public payload: string) { }
  }
  
  export class DeleteProduct implements Action {
    readonly type = ProductActionType.DeleteProduct;
  
    constructor(public payload: number) { }
  }
  
  export class DeleteProductSuccess implements Action {
    readonly type = ProductActionType.DeleteProductSuccess;
  
    constructor(public payload: number) { }
  }
  
  export class DeleteProductFail implements Action {
    readonly type = ProductActionType.DeleteProductFail;
  
    constructor(public payload: string) { }
  }

export type ProductActions = ToggleProductCode
 | SetCurrentProduct
 | ClearCurrentProduct
 | InitializeCurrentProduct
 | Load
 | LoadSuccess 
 | LoadFail
 | UpdateProduct
 | UpdateProductSuccess
 | UpdateProductFail
 | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;