const items = [
    {
        id: 0,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2909/2909761.svg",
        name: "Банан",
        price: 10,
        sale: ""
    },
    {
        id: 1,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2909/2909787.svg",
        name: "Яблоко",
        price: 8,
        sale: ""
    },
    {
        id: 2,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2548/2548636.svg",
        name: "Папая",
        price: 10,
        sale: "25$ за каждые 3 кг"
    },
];

export default class GotServices {
    getItems = () => {
        return items
    }
}


