import React from 'react';

const RenderName = (props) => {

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">{props.name}</li>
            </ul>

        </div>
    )
}
export default RenderName;
