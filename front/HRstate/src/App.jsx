import React, { useState, useEffect} from "react";
//import apiRequest from "./service/ApiRequest"
 
import SearchItem from "./component/SearchItem";
import Content from "./component/Content";
 

function App() {
  
  const API_URL = "http://127.0.0.1:3000/"
 // const url=`${API_URL}?term=${serchItem}`; 
 //http://127.0.0.1:3000/?term=fer   search
  const [items, setItems] = useState([]);  
  const [serchItem, setSerchItem] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  /* async get(resourse) {
            const url=`${API_URL}?term=${resourse}`;
            const response = await fetch(url);  
        try{
            if (response.ok) {
                // Läser in datat  ifrån response{o}- async             
                const data = await response.json();
                return data;        
                  
              } else {
                //if bad request 400-fysisk
                throw new Error(`problem to get data ${response.status} ${response.statusText}`);
              }
        } catch (error) {     
            throw new Error(`Error in  get(): ${error.message}`);
          }
        }
          */   
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const respons = await fetch(API_URL)
        if(!respons.ok) throw Error("Did not received list items data")
        const listItems = await respons.json()
        
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message);
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => fetchItems())()
    }, 2000);
  }, [])
   
  /* const handleSubmit = ( updatedItem) => {
    //console.log('updatedItem',updatedItem );
    if(!updatedItem) return;
    updateItem(updatedItem);        
  } */

 /*  const updateItem = async ( updatedItem) => {
    const id= updatedItem.id;
    try {
      // Находим элемент, который нужно обновить
      const itemToUpdate = items.find(item => item.id === id);
      if (!itemToUpdate) {
        throw new Error("Элемент не найден");
      }
    console.log('app-nyitem',updatedItem);
     
      // Обновляем состояние элементов
      const updatedItems = items.map(item =>
        item.id === id ? updatedItem : item
      );
      setItems(updatedItems);
  
      // Отправляем PATCH-запрос на сервер
      const updateOptions = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  
          id:updatedItem.id,
          title: updatedItem.title,
          description: updatedItem.description,
          date: updatedItem.data,
          time: updatedItem.time, 
          photo: updatedItem.photo
         }),
      };
  
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, updateOptions);
  
      // Обработка результата запроса
      if (result) {
        setFetchError(result); // Сохраняем ошибку, если она есть
      } else {
        setFetchError(null); // Очищаем ошибку, если запрос выполнен успешно
      }
    } catch (error) {
      console.error("Ошибка при обновлении элемента:", error);
      setFetchError(error.message); // Сохраняем ошибку в состоянии
    }
  }; */

//удалить обьект из- json db
  // const handleDelete = async (id) => {     
  //   const listItems = items.filter(item => item.id !== id)
  //   setItems(listItems)  
   
  //   const deleteOptions = {
  //     method: "DELETE"
  //   }
  //   const reqUrl = `${API_URL}/${id}`
  //   const result = await apiRequest(reqUrl, deleteOptions)
  //   if(result) setFetchError(result)
  // }
 

  return (
    <div className="App">
      
      <SearchItem
        serchItem={serchItem}
        setSerchItem={setSerchItem}
      />
     
      <main className="">
        {isLoading && <p style={{textAlign: "center", fontSize: "35px"} }> Loading...</p>}
        {fetchError && <p className="error">{`Error: ${fetchError}`}</p> }
        {!fetchError && !isLoading && 
          <Content 
          items={items.filter( item => (item.name)
                                      .toLowerCase()
                                      .includes(serchItem
                                      .toLowerCase()))}
             setItems={setItems}
        //   handleSubmit={handleSubmit}          
         
          />
        }
      </main>
      
    </div>
  );
}

export default App;