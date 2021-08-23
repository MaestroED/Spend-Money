import React from 'react'
import AssetsItem from './AssetsItem'

function Assets({ assets, products, allAssets, resetAssets }) {
    return (

        <div className="container assets-container">
            <h2>Assets</h2>
            {assets.map(item => (
                <AssetsItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            <div>
                total: ${allAssets} <br />
                <button className="reset-assets" onClick={resetAssets} > Reset Assets</button>

            </div>
        </div>
    )
}

export default Assets
