import React from 'react';

export default class MobileHeader extends React.Component {

    render() {
        return (
            <div id="mobile">
                <header>
                    <img src="./src/img/logo.png" alt="logo"/>
                    <span>reactnews</span>
                </header>
            </div>
        );
    }
}
MobileHeader.defaultProps = {
};
