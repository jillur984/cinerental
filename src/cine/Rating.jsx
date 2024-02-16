import React from 'react'
import Star from '../assets/star.svg'
import { Fragment } from 'react'

const Rating = ({value}) => {
 
 const stars= Array(value).fill(Star)

  return (
    <Fragment>
     {stars.map((star,index)=>(
      <img key={index} src={star} height="14" width="14" alt='star'/>
     ))}
      
    </Fragment>
  )
}

export default Rating