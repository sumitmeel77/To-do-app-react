import React, { useState  } from 'react';

function Todo({Values , index , RemoveListItem}){
  return(
    <div>
      <div className="listContainer">
        <li>
          {Values.data}
          <button className="closeButton" onClick={() => RemoveListItem(index)}>x</button>
        </li>
      </div>
    </div>
  );
}

function App(){
  const[ListValue, setListValue] = useState([
    {data : "react poc"},
    {data : "html poc"},
    {data : "git poc"},
    {data : "backend poc"}
  ]);
  const AddListItem =() =>{
    var inputvalue = document.getElementById("myInput").value;
    if(inputvalue==""){
      alert("write something")
    }else{
      setListValue([...ListValue, {data:inputvalue}]);
      document.getElementById("myInput").value = "";
    }
  };
  const RemoveListItem = index => {
    const newList = [...ListValue];
    newList.splice(index, 1);
    setListValue(newList);
  };
  return(
    <div>
      <div className="container"> 
        <div className="header">
          <h2 style={{textAlign:"center"}}> To Do List App </h2>
          <input type="text" placeholder="write something ..." id="myInput"/>
          <button onClick={AddListItem} >Add</button>
        </div>
        <div>
          {
            ListValue.map((dataValue , dataKey) => <Todo Values={dataValue} index={dataKey} Valueskey={dataKey} RemoveListItem={RemoveListItem}/>)
          }
        </div>
        
      </div>
      <style jsx>{`
        
        .container{
          width: 300px;
          border: 15px solid black;
          padding: 50px;
          margin: 20px;
          
        }
        .header{
          background-color: #f44336;
          padding: 10px 10px;
          color: white;
          text-align: center;
          }
        li {
          cursor: pointer;
          position: relative;
          padding: 12px 8px 12px 40px;
          list-style-type: none;
          background: #eee;
          font-size: 18px;
        }
        li:nth-child(odd) {
          background: #f9f9f9;
        }
        .closeButton {
          position: absolute;
          right: 0;
          top: 0;
          width:10%;
          text-align:center;
          padding: 12px 16px 12px 16px;
        }
        .closeButton:hover {
          background-color: #f44336;
        }
        .listContainer{
          margin: 0;
  			  padding: 0;
        }
      `}
      </style>
    </div>
  );
  
}

export default App;



