/// <reference types="vite/client" />

interface IItem {
    listing_id: number;
    url?: string;
    MainImage?: { url_570xN: string; [key: string]: unknown }
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;

    [key: string]: unknown;
}

interface IItems {
    items: IItem[];
}