import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li onClick={() => props.showInfoModal()}>
                    <a className="what" href="#" >
                        What?
                    </a>
                </li>
                <li onClick={() => props.newGame()}>
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

