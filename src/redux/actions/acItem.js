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

    const p = new Promise(((resolve) => {
            setTimeout(() => {
                const data = gotServices.getItems();
                resolve(data)
            }, 1000)
    }))
    p.then(data => {
        return new Promise(((resolve) => {
            setTimeout(() => {

                dispatch(setItems(data))
                resolve()
            }, 1000)
        }))
    }).then( () => dispatch(isLoaded(true)))
        .catch(err => console.log(err))

}