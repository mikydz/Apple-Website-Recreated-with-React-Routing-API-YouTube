import React, { Component } from 'react'

 class Navlink extends Component {
    render() {
        return (
            
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.LinkUrl}>{this.props.LinkName}<img src={this.props.source}alt=""/></a></li>



            
        )
    }
}
export default Navlink;