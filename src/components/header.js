import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoModal: false
        }
    }
    showInfoModal() {
        this.setState({
            infoModal: true
        })
    }
    hideInfoModal() {
        this.setState({
            infoModal: false
        })
    }
    render() {
        if (this.state.infoModal === true) {
        return (
            <header>
                <TopNav showInfoModal={() => this.showInfoModal()} />
                <InfoModal hideInfoModal={() => this.hideInfoModal()}/>
                <h1>HOT or COLD</h1>
            </header>
        );
        } else {
            return (
                <header>
                    <TopNav newGame={() => this.props.newGame()} showInfoModal={() => this.showInfoModal()} />
                    {/* <InfoModal /> */}
                    <h1>HOT or COLD</h1>
                </header>
            );
        }

    }
    
};
