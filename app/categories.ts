import { Category } from "./category.types";

export const categories: Category[] = [
    {
        id: "1",
        name: "men's clothing", // name should match the exact category name from API
        title: "Men's Clothing",
        classNames: ["bg-men"]
    },
    {
        id: "2",
        name: "women's clothing", // name should match the exact category name from API
        title: "Women's Clothing",
        classNames: ["bg-women"]
    },

    // {
    //     id: "3",
    //     name: "jewelery", // name should match the exact category name from API
    //     title: "Jewelery",
    //     classNames: ["bg-jewelery"]
    // },

    
    // {
    //     id: "4",
    //     name: "electronics", // name should match the exact category name from API
    //     title: "Electronics",
    //     classNames: ["bg-electronics"]
    // },

    // Add more categories here if you want to
];
