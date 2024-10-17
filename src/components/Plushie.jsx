function Plushie({plushie, addCart}){

    const {id, name, image, description, price} = plushie

    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`/dynamic_cart_REACT/img/${image}.jpg`} alt="Pokemon Plush" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">${price}</p>
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick= {()=> addCart(plushie)}
            >Add Cart</button>
        </div>
    </div>
    )
}

export default Plushie
