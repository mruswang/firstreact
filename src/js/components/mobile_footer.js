import React from 'react';
import { Row, Col } from 'antd';

export default class MobileFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        };
    }
    render() {
        return (
            <footer class="footer">
                &copy;&nbsp;2016 Reactnew all rights reserved
            </footer>
        );
    }
}
MobileFooter.defaultProps = {
};
