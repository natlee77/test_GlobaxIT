import React , {  useRef } from "react";
import '../css/ModalPopup.css'
import { UseClickOutside} from '../service/UseClickOutside'

export const ModalPopup = ({isOpen ,setModalOpen ,children }) => {
    

    const modalRef = useRef(null);
    UseClickOutside(modalRef, ()=>setModalOpen(false));

    return(
        <>
        {isOpen && (
           
        <div className= "modal-overlay">
        <div className="modal">           
            <div className="modal-wrapped">
               <div className="modal-content" ref={modalRef}>   
                    <button  className="modal-close-button"                       
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