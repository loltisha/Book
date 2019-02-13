import React, { Component } from 'react';


class Books extends Component {
    state = {hide: "false"};
    hideTitle= ()=>{
      
      if (this.state.hide==="false"){
          this.setState({hide:'hidden'})
      }else{
          this.setState({hide:"false"})
      }
    //   console.log('hello');
    }
  render() {
      
    return (
        <div>
     <h1> <strong>isbn: </strong> {this.props.book.isbn}</h1>
     <ul>
     <li onClick  ={this.hideTitle} > <strong>Title: </strong>{this.props.book.title}</li>
     <li className={this.state.hide}> <strong>Subtitle: </strong> {this.props.book.subtitle}</li>
     <li className={this.state.hide}><strong>Author: </strong>{this.props.book.author}</li>
     <li className={this.state.hide}><strong>Published: </strong> {this.props.book.published}</li>
     <li className={this.state.hide}>  <strong>Publisher: </strong>{this.props.book.publisher}</li>
     <li className={this.state.hide}> <strong>Pages: </strong>{this.props.book.pages}</li>
     <li className={this.state.hide}><strong>Description: </strong>{this.props.book.description}</li>
     <a  className={this.state.hide} href={this.props.book.website}>{ this.props.book.website} </a>
     </ul>
     </div>
    );
  }
}

export default Books;
