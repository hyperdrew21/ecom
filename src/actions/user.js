import { 
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from "./types";

export function signIn({email, password}) {

    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: "Max Helson",
                address: "1234 I live here",
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                   _id: 0,
                product: {
                    _id: 0,
                    title: "Javascript in the Browser",
                    description: "'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.'",
                    price: "1.99",
                    belongsTo: [0, 1],
                    imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {

                    _id: 1,
                    title: "Graph Database",
                    description: "'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.'",
                    price: "1.99",
                    belongsTo: [0, 6],
                    imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 1
            }
        ]
    })    
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: "34nuhbng43",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: "1234 West State"
                }
            },
                {
                _id: 1,
                total: 19.20,
                orderNumber: "34n56hy43",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Andrew Bristow",
                    shippingAddress: "2510 North End"    
                }
            },
                {
                _id: 2,
                total: 12.30,
                orderNumber: "jmnughe43",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Rachel Murray",
                    shippingAddress: "105 Gladys Ct"
                }
            },
                {
                _id: 3,
                total: 8.20,
                orderNumber: "3mu3e8hf",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Mille Deer",
                    shippingAddress: "1537 Hawaiian Ave"
                }
            },
                {
                _id: 4,
                total: 5.23,
                orderNumber: "52415df",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Rebecca Green",
                    shippingAddress: "4157 State"
                }
            },
                {
                _id: 5,
                total: 7.65,
                orderNumber: "jmugh743",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jean Harris",
                    shippingAddress: "New Orleans Drive"
                }
            },
                {
                _id: 6,
                total: 9.50,
                orderNumber: "33likof90",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Molly Kins",
                    shippingAddress: "4517 Rolling Acres"
                }
            },
                {
                _id: 7,
                total: 8.25,
                orderNumber: "1254dlikd",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Dom King",
                    shippingAddress: "4220 Flint Drive"
                }
            }
        ]
    })
}