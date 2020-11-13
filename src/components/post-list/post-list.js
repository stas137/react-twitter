import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({props, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = props.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => {return onToggleLiked(id)}}
                />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;