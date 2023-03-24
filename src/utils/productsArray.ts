type Product = {
    title: string
    description: string
    capacity: number
    type:string
    price:number
}
const productsArray:Product[] = [
    {
        title: "iPhone 14 Pro",
        description: "This is iPhone 14 Pro",
        capacity: 512,
        type: "phone" ,
        price: 1500,
    },
    {
        title: "iPhone 13 Pro",
        description: "This is iPhone 13 Pro",
        capacity: 512,
        type: "phone" ,
        price: 1200,
    },
    {
        title: "iPhone 12 Pro",
        description: "This is iPhone 12 Pro",
        capacity: 256,
        type: "phone" ,
        price: 1000,
    },
    {
        title: "iPhone 11 Pro",
        description: "This is iPhone 11 Pro",
        capacity: 256,
        type: "phone" ,
        price: 800,
    },
    {
        title: "iPhone 11 ",
        description: "This is iPhone 11",
        capacity: 128,
        type: "phone" ,
        price: 600,
    },
    {
        title: "iPhone 10",
        description: "This is iPhone 10",
        capacity: 64,
        type: "phone" ,
        price: 500,
    },
]

export default productsArray