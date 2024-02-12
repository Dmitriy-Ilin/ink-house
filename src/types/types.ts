export interface IPaintData {
    france: IItems;
    germany: IItems;
    england: IItems;
}

export interface IItems {
    first: IItem;
    second: IItem;
    third: IItem;
    fourth: IItem;
    fifth: IItem;
    sixth: IItem;
}

export interface IItem {
    id: number;
    url: string;
    author: string;
    name: string;
    paints: string;
    price: number;
    itemsAdded: number;
    sum: number;
}