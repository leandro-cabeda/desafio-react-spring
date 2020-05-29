import React from 'react';

class CardListagem extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="card col-7 offset-2 p-0">
                    <h3 className="card-header text-center">{this.props.title}</h3>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardListagem;