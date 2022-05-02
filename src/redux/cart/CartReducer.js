const initialState = {
    products : []
};

export function cartReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newState = {...state, products:[...state.products, action.payload.product]};
            return newState;
        case 'REMOVE_FROM_CART':
            const newProductList = state.products.filter((product) => product.id != action.payload.product.id);
            const newOtherState = {...state, products: newProductList};
            return newOtherState; 
        default:
            return state;
    }
}