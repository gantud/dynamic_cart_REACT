import { useState, useEffect } from "react"
import Header from "./components/Header"
import Plushie from "./components/Plushie"
import { db } from "./data/db"

function App() {

const initialCart = () =>{
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    function addCart(item){

        const itemExist = cart.findIndex(plushie=> plushie.id===item.id)
        if(itemExist >=0){
            if(cart[itemExist].quantity >=MAX_ITEMS ) return
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)
        }else{
            item.quantity =1
            setCart([...cart, item])
        }
    }

    function removeFromCart(id){
        setCart( prevCart => prevCart.filter(plushie => plushie.id !== id) )
    }

    function increaseQuantity(id){
        const updatedCart = cart.map(item => {
            if(item.id===id && item.quantity < MAX_ITEMS ){
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const updatedCart = cart.map(item => {
            if(item.id===id && item.quantity > MIN_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart(){
        setCart([])
    }


  return (
    <>

    <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        
     />
  
    <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
            {data.map((plushie) => (
                <Plushie
                    key={plushie.id}
                    plushie={plushie}
                    setCart={setCart}
                    addCart={addCart}
                />
            ))}

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">PokePlushies - all rights reserved</p>
        </div>
    </footer>
    </>
  )
}

export default App
