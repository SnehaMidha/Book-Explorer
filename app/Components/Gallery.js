import React, {Component} from 'react';

class Gallery extends Component{
  render(){
    let alternate = 'imagelink';
    return(
      <div> {
        this.props.items.map((item, index) =>{
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return(
            <div> <a key = {index} className="book" href = {infoLink} target="_blank">
            <img className="book-img" src = {imageLinks != undefined ? imageLinks.thumbnail :'alternate'} alt="book image"/>
            <div className="book-text">
            {title}</div>
            </a> </div>
          )
        })
      }</div>
    )
  }
}

export default Gallery;
