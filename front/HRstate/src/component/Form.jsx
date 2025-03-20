
import React  from 'react'

export const Form = ({item}) =>{

// console.log('form',item)

    return (
        <>        
          <div className='modal-form'>
            <div>
            <h2>{item.name} </h2> 
            </div>

            <div  >
            <div className='modal-div'>
             <h4>Телефон:</h4>
              <p> {item.phone}</p>
            </div>
            <div className='modal-div'>
              <h4>Почта:</h4>
              <p> {item.email} </p>
            </div>
            <div className='modal-div'>
              <h4> Дата приема:</h4>
              <p> {item.hire_date} </p>
            </div>
            <div className='modal-div'>
              <h4>Должность:</h4>
              <p> {item.position_name} </p>
            </div>
            <div className='modal-div'>
              <h4>Подразделение:</h4>
              <p> {item.department} </p>
            </div>

            
            </div>
            
            <div>
            <h4>Дополнительная информация:</h4>
            <p>{item.address}</p>
            </div>
          </div>
        
        </>
        )
}
  export default Form;






