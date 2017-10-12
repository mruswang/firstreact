import React from 'react';

import { Row, Col,Menu, Icon,Tabs,message,Form,Input,Button,Checkbox,Modal } from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {
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
                <Link>
                    <Icon type="inbox"></Icon>
                </Link>
                :
                <Icon type="setting" onClick={this.login.bind(this)}></Icon>
            ;
        return (
            <div id="mobile">
                <header>
                    <img src="./src/img/logo.png" alt="logo"/>
                    <span>reactnews</span>
                    {userShow}
                </header>
                <Modal
                    title="用户中心"
                    visible={this.state.modalVisble}
                    onOk={()=>this.setModalVisible(false)}
                    onCancel={()=>this.setModalVisible(false)}
                    okText="关闭"
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
                                        rules: [{ required: true, message: 'Please input your Password!' }, {
                                            validator: this.checkConfirm,
                                        }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入你的密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('re_password', {
                                        rules: [{ required: true, message: 'Please input your Password!' },{
                                            validator: this.checkPassword,
                                        }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请确认你的密码" />
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
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
        var formdata = this.props.form.getFieldsValue();
        console.log(formdata)
        if(formdata.password != formdata.re_password){
            console.log('Received values of form: ', '两次输入密码不一致');
        }

    }
    login(){
        this.setModalVisible(true)
    }
}
MobileHeader.defaultProps = {
};
export default MobileHeader = Form.create()(MobileHeader);
