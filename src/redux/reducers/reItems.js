const reItems = (state = {
    itemStatus: {
        load: true,
    },
    items: []
}, action) => {
    switch (action.type) {
        case "SET_ITEMS":
            return {
                ...state,
                items: action.payload
            }

        case "IS_LOADED":
            return {
                ...state,
                itemStatus: {
                    ...state.itemStatus,
                    load: action.payload
                }
            }

        case 'SET_LOAD_WORLD_ERROR':
            return {
                ...state,
                itemStatus: {
                    ...state.itemStatus,
                    error: false
                }
            }
        default:
            return state;
    }
}
export default reItems;