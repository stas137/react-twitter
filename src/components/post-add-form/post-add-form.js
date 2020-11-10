import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Напишите что-нибудь"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-online-secondary">
                Добавить

            </button>
        </form>
    )
}

export default PostAddForm;