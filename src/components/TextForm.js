import React from 'react'

export default function TextForm(props) {
  return (
    <>
    <div className="container my-2">
    <div className=" mb-3">
     <h1>{props.Heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className='btn btn-primary'>Convert to Uppercase</button>
    </div>
    </>  
  )
}
