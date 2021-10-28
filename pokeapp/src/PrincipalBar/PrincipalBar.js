import React from 'react';
import './PrincipalBar.css';

function PrincipalBar(props) {
    const {title} = props;

    console.log(props)

    return (
        <div className="bar__principal">
            <h1 className="title__pokemon">
                {title}
            </h1>
        </div>
    )
}

export default PrincipalBar
