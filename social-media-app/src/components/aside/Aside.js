import React from 'react'
import '../../styles/aside.css'
function Aside() {
    return (
        <div className='aside'>
            <h1>Aside Goes Here (Friends list?)</h1>
            <h3 className='left-aside'>Aside on left hand side</h3>
            <button>Add Friend</button>
            {/* <h3 className='left-aside'> Not sure, but aside on left hand might have to be in another component</h3> */}
        </div>
    )
}

export default Aside
