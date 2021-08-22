import { 
    // SET_SHOP_CATAGORIES
    SET_NAVBAR_LINKS
} from "./types";

export function fetchShopCatagories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {

            _id: 0,
            title: "All"

            },
            {

                _id: 1,
                title: "JavaScript"
    
            },
            {

                _id: 2,
                title: "UX/UI"
    
            },
            {

                _id: 3,
                title: "Linux"
        
            },
            {

                _id: 4,
                title: "Python"
    
            },
            {

                _id: 5,
                title: "UML"
    
            },
            {

                _id: 6,
                title: "Ruby"
    
            }
            
        ]
    })    
}