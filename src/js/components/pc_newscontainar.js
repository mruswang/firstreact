import React from 'react';
import { Row, Col} from 'antd';
import { Carousel} from 'antd';

export default class PcNewscontainar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} >
                        <div>
                            <Carousel effect="fade">
                                <div><h3>1</h3></div>
                                <div><h3>2</h3></div>
                                <div><h3>3</h3></div>
                                <div><h3>4</h3></div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}
PcNewscontainar.defaultProps = {
};