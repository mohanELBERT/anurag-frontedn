import React from 'react'

export default function LoanCard({data}) {
  return (
    <div>
        <div>
            <h1>{data.heading}</h1>
            <p>{data.para}</p>
            <button>btn</button>
        </div>
        <div>
            <img src={data.ima} alt="logo" />
        </div>
    </div>
  )
}
