/**
 * Created by wangsir on 2017/10/12.
 */
import React from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class MobileList extends React.Component{
    constructor(){
        super();
        this.state={
            news: ''
        };
    }
    componentWillMount(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count,myFetchOptions)
            .then(response=>response.json())
            .then(json=>this.setState({news:json}))
    }
    render(){
        const {news} = this.state;
        const newsList = news.length?
            news.map((newsItem,index)=>(
                <section key={index} className="">
                    <Link class="item" to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div class="list-img">
                            <img src={newsItem.thumbnail_pic_s} alt=""/>
                        </div>
                        <div class="list-text">
                            <div class="list-text-title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div class="list-text-info">
                                <span>{newsItem.realtype}</span>
                                <span>{newsItem.date}</span>
                            </div>
                        </div>

                    </Link>
                </section>
            ))
            :"没有任何新闻"
        return(
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}