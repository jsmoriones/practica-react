import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessAuthTemplated = ({funcNav}) => {

  const navigate = useNavigate();

  useEffect(() => {
    funcNav(false)
  }, [ ]);

  useEffect(() => {
    if( !JSON.parse( sessionStorage.getItem('userLogued') ) ){
      navigate('/taller-access')
    }
  }, []);
  return(
    <>
      <h1>SuccessAuthTemplated</h1>
    </>
  )
}

export default SuccessAuthTemplated