import React, { Component } from 'react';
import './flex.css';

class Flex extends Component {

  // при отрисовке нумерация сверху вниз
  // обратите внимание на выделение третьего элемента в стилях
    
  render() {
    return (
      <div className="App">
        <div className="flexContainer1">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="flexContainer2">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="flexContainer3">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <h2> Обратите внимание на отступы </h2>
        <div className="flexContainer4">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="flexContainer5">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="flexContainer6">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
      </div>
    );
  }
}

export default Flex;
