import React,{ Component } from 'react';
import './Cards.css';

class Card extends Component {
    render(){
        var {card} = this.props;
        return (
            <div className="card">
                <div className="header">
                  <img src = {card.img} alt="img" className="card-img"/>   
                  <img src = {card.user} alt="img" className="user-img"/>
                </div> 
                <div className="content">
                    <span className="author">{card.author}</span>
                    <span className="title">{card.title}</span>
                    <span className="date">{card.date}</span>
                </div>
                <div className="footer">
                    <div class="stat">
                        <span class="value"><i className="fa fa-heart-o"></i></span>
                    </div>
                    <div class="stat">
                        <span class="value"><i className="fa fa-comment-o"></i></span>
                    </div>
                    <div class="stat">
                        <span class="value"><i className="fa fa-share-alt"></i></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;