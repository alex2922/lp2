import React from 'react'
import "./error.scss"
import Pagetop from '../../comps/pagetop/Pagetop'



const Error = () => {
  return (
    <>
      {/* <Pagetop  text="404" /> */}

      <div className="error-parent parent">
        <div className="error-cont container">
            <h2 className='errortext'>
                404
            </h2>
            <p>
                Page Not Found
            </p>
        </div>
      </div>
    </>
  )
}

export default Error
