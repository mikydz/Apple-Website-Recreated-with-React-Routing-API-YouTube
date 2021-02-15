import React, { Component } from "react";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import "./Navlink";

import "./Nav.css";
import Navlink from "./Navlink";
class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>
            {/* <Navlink LinkUrl={"/logo/"}source={logo} /> */}
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://www.apple.com/mac/">Mac</a></li> */}
                <Navlink
                  LinkUrl={"https://www.apple.com/mac/"}
                  LinkName={"Mac"}
                />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li> */}
                <Navlink LinkName={"iphone"} LinkUrl={"/iphone/"} />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li> */}
                <Navlink LinkName={"ipad"} LinkUrl={"/ipad/"} />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li> */}
                <Navlink LinkName={"watch"} LinkUrl={"/watch/"} />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li> */}
                <Navlink LinkName={"tv"} LinkUrl={"/tv/"} />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li> */}
                <Navlink LinkName={"Music"} LinkUrl={"/Music/"} />
                {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li> */}
                <Navlink LinkName={"Support"} LinkUrl={"/Support/"} />
                {/* <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li> */}
                <Navlink LinkUrl={"/search/"} source={search} />
                {/* <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li> */}
                <Navlink LinkUrl={"/cart/"} source={cart} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Nav;
