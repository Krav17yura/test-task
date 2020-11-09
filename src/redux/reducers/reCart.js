
const getSumForOneItems = (item, count) => {
    let sale = 0;
    if (item[0].sale){
        if((count/3)^ 0 ){
            sale += 5 *  Math.floor(count/3)
        }
    }
    return item[0].price * count - sale
}

const getOrderSum = (obj) => {
    let sum = 0;
    for(let key in obj){
        sum += obj[key].totalPrice
    }
    return sum
}

const getOrderCount = (obj) => {
    let count = 0;
    for(let key in obj){
        count += obj[key].totalCount
    }
    return count
}



const reCart = (state = {
    totalPrice: 0,
    totalCount: 0,
    cartItems: {},

}, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":{

            const currentItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].items];

            const newItem = {
                ...state.cartItems,
                [action.payload.id]: {
                    items: currentItems,
                    totalCount: state.cartItems[action.payload.id]? state.cartItems[action.payload.id].totalCount +1  : 1,
                    totalPrice: getSumForOneItems(currentItems, state.cartItems[action.payload.id]? state.cartItems[action.payload.id].totalCount +1  : 1)
                }
            }

            const totalCount = getOrderCount(newItem);
            const totalPrice = getOrderSum(newItem)

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
            delete newItem[action.payload];

            const totalCount = getOrderCount(newItem);
            const totalPrice = getOrderSum(newItem)

            return {
                ...state,
                cartItems: newItem,
                totalPrice,
                totalCount
            }
        }

        case 'PLUS_CART_ITEM': {
            const newItem = {
                ...state.cartItems,
                [action.payload]: {
                    ...state.cartItems[action.payload],
                    totalCount: state.cartItems[action.payload].totalCount +1 ,
                    totalPrice: getSumForOneItems(state.cartItems[action.payload].items,  state.cartItems[action.payload].totalCount +1)
                },
            };

            const totalCount = getOrderCount(newItem);
            const totalPrice = getOrderSum(newItem)

            return {
                ...state,
                cartItems: newItem,
                totalCount,
                totalPrice,
            }

        }

        case 'MINUS_CART_ITEM': {
            if (state.cartItems[action.payload] && state.cartItems[action.payload].totalCount -1 >= 0){
                const newItem = {
                    ...state.cartItems,
                    [action.payload]: {
                        ...state.cartItems[action.payload],
                        totalCount: state.cartItems[action.payload].totalCount -1 ,
                        totalPrice: getSumForOneItems(state.cartItems[action.payload].items,  state.cartItems[action.payload].totalCount -1)
                    },
                };

                if (state.cartItems[action.payload].totalCount -1 === 0){
                    delete newItem[action.payload]
                }

                const totalCount = getOrderCount(newItem);
                const totalPrice = getOrderSum(newItem)

                return {
                    ...state,
                    cartItems: newItem,
                    totalCount,
                    totalPrice,
                }
            }else {
                return {
                    ...state
                }

            }
        }

        default:
            return state;
    }
}
export default reCart;