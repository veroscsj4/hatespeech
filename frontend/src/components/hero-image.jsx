import React, { Component } from 'react';
class HeroImage extends Component {
    render() {
        const { items } = this.props;
        return <div className="">
            <div className="background-path-secondary uk-margin-large-bottom">
                <div className="uk-container">
                    <div data-uk-grid className="uk-grid-small  uk-flex uk-flex-center uk-flex-middle uk-margin-large-top">
                        <div className="header-center-content uk-width-2-5@m uk-width-1-1">
                            <p class="uk-h1">{this.props.text}</p>
                            <a className="uk-button uk-button-primary" href={this.props.buttonURL}>{this.props.buttonName}</a>
                        </div>
                        <div className="hero-image uk-width-expand@m uk-width-1-1"><img src={"/assets/img/" + this.props.image}  alt={this.props.description} width={this.props.imageWidth}/></div>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default HeroImage;
