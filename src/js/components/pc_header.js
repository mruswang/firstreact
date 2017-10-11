import React from 'react';
import { Row, Col,Menu, Icon,Tabs,message,Form,Input,Button,Checkbox,Modal } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PcHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisble:false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined ?
            <Menu.Item key="logout" class="register">
                <Button type="primary">{this.state.userNickName}</Button>
                <Button type="dashed">个人中心</Button>
                <Button type="danger">退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" class="register" >
                <Icon type="appstore" ></Icon>注册/登录
            </Menu.Item>
            ;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/img/logo.png" alt="logo"/>
                            <span>reactnews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="lock" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal
                            title="用户中心"
                            visible={this.state.modalVisble}
                            onOk={()=>this.setModalVisible(false)}
                            onCancel={()=>this.setModalVisible(false)}
                        >
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                                        <FormItem>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入你的账号" />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: 'Please input your Password!' }],
                                            })(
                                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入你的密码" />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('re_password', {
                                                rules: [{ required: true, message: 'Please input your Password!' }],
                                            })(
                                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请确认你的密码" />
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
    setModalVisible(value){
        this.setState({
            modalVisble: value,
        });
    }
    handleClick(e){
        if(e.key=="register"){
            this.setState({current:'register'})
            this.setModalVisible(true)
        }else{
            this.setState({current:e.key})
        }
    }
    handleSubmit(e) {
        //页面开始向api提交
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
}
PcHeader.defaultProps = {
};

export default PcHeader = Form.create()(PcHeader);
