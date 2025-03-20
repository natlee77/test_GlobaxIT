import React   from "react";
import '../css/ModalPopup.css'
 

export const ModalPopup = ({isOpen ,setModalOpen ,children}) => {

      

    return(
        <>
        {isOpen && (
           
        <div className= "modal-overlay">
        <div className="modal">           
            <div className="modal-wrapped">
               <div className="modal-content">   
                    <button  className="modal-close-button"
                    //    tabIndex="-1"
                       onClick={()=>{setModalOpen(false)}}>
                       <img src=".\src\assets\Vector 203 (Stroke).svg" alt="x" />
                    </button>     

                {children}
               </div>
            </div> 
        </div>
        </div>
         )}
        </>
    )
}
export default ModalPopup