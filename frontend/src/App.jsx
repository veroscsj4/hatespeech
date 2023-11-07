import React, { Component, Fragment } from 'react';
import CardsIcon from './components/cards';
import HeroSlider from './components/hero-slider';

const mainSliderItems = [
    {
        caption: 'Hassrednerinnen und Hassredner stummschalten!',
        alt: 'men talking about hate speech',
        name: 'guys-talking.jpg',
        buttonName: 'Jetzt Hassrede melden!',
        buttonURL: '#'
    },
    {
        caption: 'Vivamus elementum semper nisi. Aenean vulputate',
        alt: 'stop hate speech',
        name: 'guys-talking.jpg',
        buttonName: 'Jetzt Hassrede melden!',
        buttonURL: '#'
    }

]
class App extends Component {
    state = {}
    render() {
        return <>
            <HeroSlider items={mainSliderItems} />

            <div id='section-hassrede' className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                    <div>
                        <div>
                            <p className="small-title-left">Hassrede</p>
                            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                            <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                            <a className="uk-button uk-button-secondary" href="#">Mehr erfahren</a>
                        </div>
                    </div>
                    <div>
                        <div className="uk-box-shadow-medium uk-border-rounded">
                            <img src={"/assets/img/women-with-smarthphone.jpg"} className="uk-border-rounded" alt={this.props.description} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="uk-padding-large half-background-primary">
                <div className="uk-container">
                    <p className="small-title-left uk-light">Ziele & Vorteile</p>
                    <h2 className="uk-light uk-h1 uk-margin-medium-bottom">Etiam sit amet orci eget eros faucibus tincidunt</h2>
                    <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" data-uk-height-match="target: .uk-card" data-uk-grid>
                        <CardsIcon number="1" image="artificial-intelligence.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                        <CardsIcon number="2" image="hate.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa" description="" />
                        <CardsIcon number="3" image="secure-shield.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                        <CardsIcon number="4" image="support.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                    </div>
                </div>
            </div>
            <div className="background-pfad-left">
                <div id='section-melden' className="uk-container">
                    <div>
                        <p className="small-title-center">Lorem Ipsum</p>
                        <h2 className="uk-h1 uk-text-center">Sed frigilla mauris sit amet nibh</h2>
                    </div>
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                        <div>
                            <div>
                                <p className="small-title-left">Post melden</p>
                                <h3 className="uk-h1">Lorem ipsum dolor sit amet.</h3>
                                <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                            </div>
                                <textarea className='uk-textarea uk-border-rounded uk-box-shadow-medium' rows={5} placeholder="Schreiben Sie hier den Text"></textarea>
                                <p className="uk-h4">Wie würden Sie diesen Inhalt klassifizieren?</p>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input className="uk-checkbox" type="checkbox" /> Gewalt & Tötung</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> rassistisch oder sexistische Stereotypisierung</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> Diskriminierung</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> Entmenschlichung</label>
                                </div>
                                <p className="uk-h4">Aus welcher Quelle kommt dieser Text?</p>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input className="uk-radio" type="radio" name="facebook" /> Facebook</label>
                                    <label><input className="uk-radio" type="radio" name="instagram" /> Instagram</label>
                                    <label><input className="uk-radio" type="radio" name="reddit" /> Reddit</label>
                                    <label><input className="uk-radio" type="radio" name="twitter" /> Twitter</label>
                                </div>
                            <div>
                                <a className="uk-button uk-button-secondary" href="#">Senden</a>
                            </div>
                        </div>
                        <div>
                            <div className="uk-box-shadow-medium uk-border-rounded uk-background-default">
                                <img src={"/assets/img/hands-with-smarthphone.jpg"} className="uk-border-rounded" alt="Mann melde Post" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                    <div>
                        <div className="uk-border-rounded uk-box-shadow-medium uk-padding">
                            <p className="uk-h1">TODO</p>
                        </div>
                    </div>
                    <div>
                        <p className="small-title-left">Link versenden</p>
                        <h3 className="uk-h1">Donec vitae sapien ut libero venenatis</h3>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
            </div>
            <div className="background-pfad-right">
                <div id='section-blog' className="uk-container blog-expected-height">
                    <p className="small-title-center">Unser Blog</p>
                    <h3 className="uk-h1 uk-text-center">Vivamus elementum semper</h3>
                    <p className="uk-h1 uk-text-center">TODO BLOG</p>
                </div>
            </div>
            <div id='section-info' className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                    <div>
                        <div>
                            <p className="small-title-left">Über uns</p>
                            <h3 className="uk-h1">Lernen Sie uns kennen!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
                            <a className="uk-button uk-button-secondary" href="#">Mehr erfahren</a>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={"/assets/img/partner.png"} className="" alt="partner von Projekt" />
                        </div>
                    </div>
                </div>
            </div>

        </>




    }
}

export default App;