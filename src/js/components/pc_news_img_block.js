/**
 * Created by wangsir on 2017/10/12.
 */
import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class PCNewsBlock extends React.Component{
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
        const styleImg= {
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        }
        const styh3 ={
            width:this.props.imageWidth,
            whiteSpace:'nowrap',
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
        const newsList = news.length?
            news.map((newsItem,index)=>(
                <div key={index} class="imgblock">
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div class="custom-image">
                            <img style={styleImg} src={newsItem.thumbnail_pic_s} alt=""/>
                        </div>
                        <div class="custom-card">
                            <h3 style={styh3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            ))
            :"没有任何新闻"
        return(
            <div class="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}