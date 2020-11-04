import GotServices from "../../services/services";
const gotServices = new GotServices()


export const isLoaded = (value) => {
    return{
        type: 'IS_LOADED',
        payload: value
    }
}

export const setItems = (data) => {
    return{
        type: 'SET_ITEMS',
        payload: data
    }
}


export const  fetchItems = () => dispatch => {
    dispatch(isLoaded(false));
    const data = gotServices.getItems();
    dispatch(setItems(data))
    dispatch(isLoaded(true));
}