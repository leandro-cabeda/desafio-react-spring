import React from 'react';

const Card=props=>{

        return(
            <div className="card col-4 offset-4 p-0">
                <h3 className="card-header text-center">{props.title}</h3>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        )
}

export default Card;