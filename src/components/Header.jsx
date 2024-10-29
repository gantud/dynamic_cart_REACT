import Plushie from "./Plushie"
import { useMemo } from "react"


function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}){

    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( ()=> cart.reduce((total, item) => total+(item.quantity * item.price), 0),[cart] )

    return(
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                    <img className="img-fluid" src="./img/logo.png" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="cart"
                    >
                    <img className="img-fluid" src="./img/cart.png" alt="cart image" />

                        <div id="cart" className="bg-white p-3">
                          { isEmpty ? (
                              <p className="text-center">Cart is empty</p>
                          ) : (
                            <>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(plushie => (
                                    <tr key={plushie.id}>
                                        <td>
                                        <img className="img-fluid" src=".img/plushie_01.jpg" alt="Pokemon Plush"/>
                                        </td>
                                        <td>{plushie.name}</td>
                                        <td className="fw-bold">
                                                ${plushie.price}
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=> decreaseQuantity(plushie.id)}
                                            >
                                                -
                                            </button>
                                                {plushie.quantity}
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=> increaseQuantity(plushie.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={ ()=> removeFromCart(plushie.id) }
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-end">Total: <span className="fw-bold">${cartTotal}</span></p>
                            </>
                                )}
                            
                            <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>Empty Cart</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header