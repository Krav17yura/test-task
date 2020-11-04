const getTotalPrice = arr => {
    const mass = arr.filter(obj => obj.sale);
    let newArr = mass.map((value, index, arr) => {
        if ((index + 1) % 3 === 0) {
            return {...value,  price: 5}
        } else {
            return value
        }
    });

    if(mass.length !== 0) {
    return newArr.reduce((sum, obj) => obj.price + sum, 0);
    }
        //     return 25
        // }
    // if(mass.length === 3){
    //     return 25
    // }else if (mass.length > 3){
    //     console.log(mass[0].price)
    //     return  25 + (mass.length - 3)*mass[0].price
    // } else if (mass.length % 3 === 0){
    //     console.log(mass[0].price)
    //     return  25 + (mass.length - 3)*mass[0].price
    // }


    // for (let key of mass){
    //     console.log(key)
    //     if(mass.length % 3 === 0){
    //          // mass[key].price = 5
    //         console.log(mass[key])
    //     }
    // }
    // console.log(mass)
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

        case 'MINUS_IN_CART_ITEM': {
            const oldItemss = state.cartItems[action.payload].items;
            const newObjItems =
                oldItemss.length >= 0 ? state.cartItems[action.payload].items.slice(1) : oldItemss;
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