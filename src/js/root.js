import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,Link,browserHistory} from 'react-router';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index'
import PCNewsDetails from './components/pc_news_details'
import MobileIndex from './components/mobile_index'
import MediaQuery from 'react-responsive'

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    </Router>

                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        );
    }
}
Root.defaultProps = {
};

ReactDOM.render(<Root />, document.getElementById('app'));