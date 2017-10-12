import React from 'react';
import { Row, Col} from 'antd';
import { Carousel} from 'antd';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block'
import PCNewsImgBlock from './pc_news_img_block'
export default class PcNewscontainar extends React.Component {
    constructor() {
        super();
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/img/banner1.jpg" alt=""/></div>
                                    <div><img src="./src/img/banner2.jpg" alt=""/></div>
                                    <div><img src="./src/img/banner3.jpg" alt=""/></div>
                                    <div><img src="./src/img/banner4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                            <div style={{marginTop: "200PX"}}>
                                <PCNewsImgBlock count={6} type={'guoji'} width="400px" cartTitle="国际头条" imageWidth="112px" ></PCNewsImgBlock>
                            </div>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={25} type={'top'} width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国内" key="2">
                                <PCNewsBlock count={25} type={'guoji'} width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <div style={{marginTop: "50PX"}}>
                            <PCNewsImgBlock count={10} type={'guonei'} width="100%" cartTitle="国内新闻" imageWidth="132px" ></PCNewsImgBlock>
                        </div>
                        <div style={{marginTop: "20PX"}}>
                            <PCNewsImgBlock count={20} type={'yule'} width="100%" cartTitle="娱乐新闻" imageWidth="132px" ></PCNewsImgBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

PcNewscontainar.defaultProps = {
};