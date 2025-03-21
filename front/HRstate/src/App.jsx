import React, { useState, useEffect} from "react";
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
  
   
  useEffect(() => {
    const fetchItems = async () => {

      let url = API_URL;
      if(serchItem.length>0){
        url=`${API_URL}?term=${serchItem}`; 
      } 
     
      try {
        const response = await fetch(url)

        if(!response.ok) throw Error("Did not received list items data")
        const listItems = await response.json()
       
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
  }, [serchItem])
    
 

  return (
    <div className="App">
      
      <SearchItem
        serchItem={serchItem}
        setSerchItem={setSerchItem}
      />
     
      <main className="">
        {isLoading && (
          <p style={{textAlign: "center", fontSize: "35px"}}> Loading...</p>
        )}
        {fetchError && <p className="error">{`Error: ${fetchError}`}</p> }
        {!fetchError && !isLoading && (
          <Content 
          items={items.filter( item => (item.name)
                                      .toLowerCase()
                                      .includes(serchItem
                                      .toLowerCase()))}
             setItems={setItems} 
          />
        )}
      </main>      
    </div>
  );
}

export default App;