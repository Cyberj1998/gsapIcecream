import { create } from "zustand";

const useCartStore = create((set,get)=>({
    cart: [],


    //------------add to cart function------------------
    addToCart: (product) => {
        const cart = get().cart
        const existingProduct = cart.find(item => item.id === product.id)

        if(existingProduct) {
            set({
                cart: cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity +1 } : iten)
            })
        }
        else{
            set({ cart: [...cart, { ...product, quantity: 1}] })
        }
    },

    //-------------remove from cart function---------------

    removeFromCart: (productId) => {
        set({ cart: get().cart.map(item => item.id !== productId) })
    },


    //---------------increase quantity-------------------

    increaseQuantity: (productId) => {
        set({
            cart: get().cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
        })
    },

    //--------------decrease quantity---------------------

    decreaseQuantity: (productId) => {
        set({
            cart: get().cart.map(item => productId ? { ...item, quantity: item.quantity -1 } : item)
            .filter(item => item.quantity > 0)
        })
    }
}))