import { BUY_WEED, RETURN_WEED } from "../actions/productShopAction";

const defaultProductState = {
    weed: 30
}

const productReducer = (state = defaultProductState, action) => {
    switch (action.type) {
        case BUY_WEED: {
            const newWeedCount = state.weed - action.payload;
            const updatedWeedCount = newWeedCount < 0 ? 0 : newWeedCount;
            return {
                ...state,
                weed: updatedWeedCount
            }
        }
        case RETURN_WEED: {
            const newWeedCount = state.weed + action.payload;
            const updatedWeedCount = newWeedCount > 30 ? 30 : newWeedCount;
            return {
                ...state,
                weed: updatedWeedCount
            }
        }
        default: return state;
    }
}

export default productReducer;
