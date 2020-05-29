import React from 'react';

class Card extends React.Component{

    render(){
        return(
            <div className="card col-4 offset-4 p-0">
                <h3 className="card-header text-center">{this.props.title}</h3>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;