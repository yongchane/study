import { useState } from 'react';

function First_ex() {
  
  const [channame,setChanegename] =useState("현용찬")
  const onchange=(e)=>{
  setChanegename(e.target.value)
 }


  return (
   <>
   {channame === "현용찬" ? <h1>리엑트입니다.</h1>:<h1>리엑트아님</h1>}

  <input onChange={onchange}/>
  </>
  );
}

export default First_ex;
