import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    return (
        <div className="flex-grow-1">
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
            />
        </div>
    )
}

export default SearchPanel;