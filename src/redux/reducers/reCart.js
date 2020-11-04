const getTotalPrice = arr => {
    const mass = arr.filter(obj => obj.sale);
    if(mass.length === 3){
        return 25
    }
   return  arr.reduce((sum, obj) => obj.price + sum, 0);
}

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        console.log(obj)
        return sum + value;
    }, 0);
};

const reCart = (state = {
    totalPrice: 0,
    totalCount: 0,
    cartItems: {},
}, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":{

            const currentItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].items, action.payload];
            console.log(currentItems)

            const newItem = {
                ...state.cartItems,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems)

                }
            }

            const totalCount = getTotalSum(newItem, 'items.length');
            // const totalPrice = getTotalSum(newItem, 'totalPrice')
            const totalPrice = Object.keys(newItem).reduce(
                (sum, key) => newItem[key].totalPrice + sum ,
                0,
            )

            return {
                ...state,
                cartItems: newItem,
                totalCount,
                totalPrice
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItem = {
                ...state.cartItems,
            };
            const currentTotalPrice = newItem[action.payload].totalPrice;
            const currentTotalCount = newItem[action.payload].items.length;
            delete newItem[action.payload];
            return {
                ...state,
                cartItems: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case 'PLUS_CART_ITEM': {
            const newObjItems = [
                ...state.cartItems[action.payload].items,
                state.cartItems[action.payload].items[0],
            ];
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                cartItems: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.cartItems[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.cartItems[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                cartItems: newItems,
                totalCount,
                totalPrice,
            };
        }

        default:
            return state;
    }
}
export default reCart;