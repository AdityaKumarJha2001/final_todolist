import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


export const Todolist = (props) => {

    const deleteItem = (key) => {
        const newList = props.itemList.filter((itemObj) => {
            return itemObj.key !== key;
        });
        props.setItemList(newList);
    }


    return (
       
            <div >
              
                {props.itemList.map((itemObj) => {
                    return ( 
                        <div key={itemObj.key} className='todo-row'>
                            {itemObj.item}
                            <div className="icons">
                                
                                <TiEdit
                                    className="edit-icon" />
                                <RiCloseCircleLine
                                    className="delete-icon" onClick={ () => {deleteItem(itemObj.key)}  } />
                            </div>
                        </div>
                    );
                })}
                
            </div>

        
    )
}