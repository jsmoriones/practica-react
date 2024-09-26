import React from 'react';
const Props = (props) => {

    const {name, cedula} = props

  return (
    <>
      <div> { name } {cedula} </div>
      {props.children}
    </>
  )
}

export default Props
