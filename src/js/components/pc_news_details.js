/**
 * Created by wangsir on 2017/10/17.
 */
import React from 'react';
import {Row,Col,BackTop} from 'antd';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImgBlock from './pc_news_img_block'
export default class PCNewsDetails extends React.Component{
    constructor(){
        super();
        this.state={
            newsItem: ''
        };
    }
    componentWillMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+this.props.params.uniquekey,myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({newsItem:json});
                document.title = this.state.newsItem.title + "- React News";
            })
    };
    creatMarkup(){
        return {
            __html:this.state.newsItem.pagecontent
        }
    }
    render(){

        return(
            <div class="topNewsList">
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <div dangerouslySetInnerHTML={this.creatMarkup()}></div>
                    </Col>
                    <Col span={6}>
                        <PCNewsImgBlock count={10} type={'guonei'} width="100%"  imageWidth="132px" ></PCNewsImgBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop></BackTop>
            </div>
        )
    }
}