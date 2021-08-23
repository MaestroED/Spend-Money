import React from 'react'

function Header({ money, allAssets }) {
    return (
        
          <div className="header">
                    You have ${money-allAssets} . You can spend it.
                </div>
            
        
    )
}

export default Header
