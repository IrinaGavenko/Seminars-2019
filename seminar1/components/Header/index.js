import React, {Component} from 'react';
import './styles.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
              <div className="logo">
                  Some nice picture
              </div>
              <div className="title">
                  Some nice text
              </div>
              <div className="title">
                  Later
              </div>
            </div>
        );
    }
}

export default Header;
