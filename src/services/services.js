const items = [
    {
        id: 0,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2909/2909761.svg",
        name: "Банан",
        price: 10,
        sale: "",
        description: 'Бананы представляют собой прекрасную пищу, которая несет в себе огромную пользу '
    },
    {
        id: 1,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2909/2909787.svg",
        name: "Яблоко",
        price: 8,
        sale: "",
        description: 'сочный плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии.'
    },
    {
        id: 2,
        imageUrl: "https://www.flaticon.com/svg/static/icons/svg/2548/2548636.svg",
        name: "Папая",
        price: 10,
        sale: "25$ за каждые 3 кг",
        description: "Основное применение папайи использование в пищу. Обычно её едят в сыром виде, без кожицы."
    },
];

export default class GotServices {
    getItems = () => {
        return items
    }
}


