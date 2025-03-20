
import React,{useEffect} from "react";

export const UseClickOutside =(ref,callback)=>{
const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
     callback( );
    }
  };
useEffect(() => {
    
      document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

}
