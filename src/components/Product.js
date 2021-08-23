import { useState } from 'react'

function Product({ product, assets, setAssets, money, allAssets, }) {

    

    const assetsItem = assets.find(item => item.id === product.id)
    

    const addAssets = () => {
        const checkAssets = assets.find(item => item.id === product.id)
        
        if (checkAssets) {
            checkAssets.amount += 1
            checkAssets.stock -= 1
            
            

            setAssets([...assets.filter(item => item.id !== product.id), checkAssets])
        } else {
            setAssets([...assets, {
                id: product.id,
                amount: 1,
                

            }])
        }
    }
    
    



    const removeAssets = () => {

        const checkAssets = assets.find(item => item.id === product.id)

        if (checkAssets) {
            checkAssets.amount -= 1



            if (checkAssets.amount === 0) {
                setAssets([...assets.filter(item => item.id !== product.id)])

            } else {
                setAssets([...assets.filter(item => item.id !== product.id), checkAssets])
            }



        }
    }

  



    return (
        <div className="product">
            <img src={product.image} alt="" />
            <h2> {product.title} </h2>
            <div className="price">${product.price} </div>
            <div className="btn">
                <button className="sell-btn" disabled={!assetsItem} onClick={removeAssets} >Sell</button>
                <span className="amount"> {assetsItem && assetsItem.amount || 0} </span>
                <button className="buy-btn" onClick={addAssets} disabled={allAssets + product.price > money }  >Buy</button>

            </div>

        </div>
    )
}

export default Product
