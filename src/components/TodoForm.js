import React from 'react'
import { useState, useEffect} from 'react';
import { Todolist } from './Todolist';

export const TodoForm = () => {

    let initList;
    
    initList = JSON.parse( localStorage.getItem('Lists'))

    const [currentItem,setCurrentItem] = useState('');
    const [itemList,setItemList] = useState(initList);

    const handleSubmit = (e) => {
        e.preventDefault();

        setItemList([...itemList, {item: currentItem, key: Date.now()}]);

        setCurrentItem("");
      }

     const handleChange = (e) =>{
         setCurrentItem(e.target.value);
     }


     useEffect (() => {
            localStorage.setItem( 'Lists' , JSON.stringify(itemList));
            
     }, [itemList])
    

    return (
        <div className='todo-app'>
        <form onSubmit={handleSubmit} className="todo-form">
            <input  type="text" placeholder="Add a todo item"  value={currentItem} onChange={handleChange} className="todo-input" required/>
            <input type="submit"  value="Add Todo" className="todo-button" />
            
        </form>
      
        <Todolist itemList={itemList} setItemList={setItemList} />
    
        </div>
    )
 
}

export default TodoForm;