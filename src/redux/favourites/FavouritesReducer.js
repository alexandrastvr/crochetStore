const initialState = {
    favouriteProducts: []
}

export function favouritesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_FAVOURITES':
            const newState = {...state, favouriteProducts:[...state.favouriteProducts, action.payload.product]};
            return newState;
        case 'REMOVE_FROM_FAVOURITES':
            const newProductList = state.favouriteProducts.filter((product) => product.id != action.payload.product.id);
            const newOtherState = {...state, favouriteProducts: newProductList};
            return newOtherState; 
        default:
            return state;
    }
}
