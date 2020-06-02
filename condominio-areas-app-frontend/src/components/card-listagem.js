import React from 'react';

const CardListagem=props=>{

        return(
            <div className="row">
                <div className="card col-7 offset-2 p-0">
                    <h3 className="card-header text-center">{props.title}</h3>
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </div>
        )
}

export default CardListagem;