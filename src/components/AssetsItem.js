import React from 'react'

function AssetsItem({item, product}) {
    return (
        <div>
            {product.title} x {item.amount}
        </div>
    )
}

export default AssetsItem
