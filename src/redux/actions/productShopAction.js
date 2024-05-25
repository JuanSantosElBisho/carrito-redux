export const BUY_WEED = 'BUY_WEED';
export const RETURN_WEED = 'RETURN_WEED';

export const buyWeedAction = (cant) => {
    return {
        type: BUY_WEED,
        payload: cant
    }
}

export const returnWeedAction = (cant) => {
    return {
        type: RETURN_WEED,
        payload: cant
    }
}
