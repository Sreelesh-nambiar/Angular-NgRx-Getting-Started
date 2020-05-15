

import { Product } from '../product';
import { ProductActions, ProductActionType } from './product.actions';

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    currentProductId: number | null;
    error: string
  }
  
  const iniitialState: ProductState = {
    showProductCode: true,
    products: [],
    currentProductId: null,
    error: ''
  }

export function reducer(state = iniitialState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionType.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

    case ProductActionType.SetCurrentProduct:
      return {
        ...state,
        currentProductId: action.payload.id
      };

    case ProductActionType.ClearCurrentProduct:
      return {
        ...state,
        currentProductId: null
      };

    case ProductActionType.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };

    case ProductActionType.LoadSuccess:
      return {
        ...state,
        products: action.payload,
          error: ''
      }

    case ProductActionType.LoadFail:
     return {
        ...state,
      products: [],
      error: action.payload
      }

    case ProductActionType.UpdateProductSuccess:

      const updatedProducts = state.products.map(
        item => action.payload.id == item.id ? action.payload : item);

        return {
           ...state,
            products: updatedProducts,
              currentProductId: action.payload.id,
              error: ''
      }

    case ProductActionType.UpdateProductFail:
            return {
              ...state,
                error: action.payload
        }

        case ProductActionType.CreateProductSuccess:
            return {
              ...state,
              products: [...state.products, action.payload],
              currentProductId: action.payload.id,
              error: ''
            };
      
          case ProductActionType.CreateProductFail:
            return {
              ...state,
              error: action.payload
            };
      
          // After a delete, the currentProduct is null.
          case ProductActionType.DeleteProductSuccess:
            return {
              ...state,
              products: state.products.filter(product => product.id !== action.payload),
              currentProductId: null,
              error: ''
            };
      
          case ProductActionType.DeleteProductFail:
            return {
              ...state,
              error: action.payload
            };
      

            default:
              return state;
  }
}
