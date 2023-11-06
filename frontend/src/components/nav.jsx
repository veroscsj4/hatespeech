import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        const { items } = this.props;
        console.log(items);
        return <>
            <div uk-sticky="top: 120; animation: uk-animation-slide-top; " className="uk-sticky">
                <div className="uk-container">
                    
                    <div data-uk-grid className="uk-flex uk-flex-middle uk-padding uk-padding-remove-horizontal">
                        <div className="uk-width-2-3 uk-width-1-4@m logo-header uk-first-column">
                            <a className="uk-display-inline-block" href="#"><img data-uk-svg class="logo-white" src="./assets/img/logo-white.svg"/><img data-uk-svg class="logo-color" src="./assets/img/logo-blau-gelb.svg" width="400" height="auto"/></a>
                        </div>
                        <div className="uk-width-1-3 uk-width-3-4@m">
                            <nav className="nav">
                                <ul className="uk-subnav main-menu uk-margin-remove-bottom uk-flex-right uk-visible@m">
                                    {items.map(item => (
                                        <li><a href={item.url}>{item.name}</a></li>
                                    ))}
                                </ul>
                                <div className="uk-text-right main-menu-mobile uk-margin-bottom-remove uk-hidden@m">
                                    <a href="#offcanvas" uk-toggle="" aria-expanded="false"><span></span></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Navbar;