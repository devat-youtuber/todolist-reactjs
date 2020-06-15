import React from 'react';
import ListItem from './ListItem';


class List extends React.Component{
    
    render(){
        const {todo, onDelete, onEdit, count} = this.props;
        return(
            <>
                <ul>
                    {
                        todo.map((item, index)=>{
                            return <ListItem 
                            item={item.todo} 
                            key={index} 
                            handleDelete={() => {onDelete(index)}}
                            handleEdit={onEdit}
                            id={index}
                            />
                        })
                    }
                    
                </ul>
                <h2>You have {count} things to do</h2>
            </>
        );
    };
}

export default List;