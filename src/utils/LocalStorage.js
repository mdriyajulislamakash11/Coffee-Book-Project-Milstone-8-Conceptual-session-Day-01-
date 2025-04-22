import toast from "react-hot-toast";

// get
const getCoffeeCart = () => {
    const getLocalStorage = localStorage.getItem("favorite");
    if(getLocalStorage){
        const favorite = JSON.parse(getLocalStorage);
        return favorite
    }
    return []
};


// Add to Localstorage
const addToLocalStorage = (coffee) => {
    const favorite = getCoffeeCart();

    const isExist = favorite.find((item) => item.id === coffee.id);

    if(isExist) return toast.error('Item Already Exist!');
    

    favorite.push(coffee)
    localStorage.setItem("favorite", JSON.stringify(favorite))
    toast.success('Successfully Added!');
    console.log(coffee)
};

// save To locastorage


// Remove LocalStorage

const removeFavorite = (id) => {
    const favorite = getCoffeeCart();

    const reminiing = favorite.filter((item) => item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(reminiing))
    toast.success('Successfully removed!');
}

export {addToLocalStorage, getCoffeeCart, removeFavorite}