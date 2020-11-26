import React from "react";
import {Link} from "react-router-dom";

import {Form, Input} from "antd";
import {UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";

import {Block, Button} from "../../../components";


export default class RegisterForm extends React.Component{

  onFinish(values) {
    console.log("Finish:", values);
  }

  render() {
    return (
       <div>
         <div className="auth__top">
           <h2 className="auth__title">Регистрация</h2>
           <p className="auth__text">Для входа в чат, вам нужно зарегистрироваться</p>
         </div>
         <Block>
           <Form
               name="form"
               onFinish={this.onFinish}
           >
             <Form.Item validateStatus="success" hasFeedback>
               <Input
                   size="large"
                   prefix={<MailOutlined className="site-form-item-icon auth__icon-color"/>}
                   placeholder="E-Mail"
                   style={{height: 56}}
               />
             </Form.Item>
             <Form.Item>
               <Input
                   size="large"
                   prefix={<UserOutlined className="site-form-item-icon auth__icon-color"/>}
                   placeholder="Ваше имя"
                   style={{height: 56}}
               />
             </Form.Item>
             <Form.Item>
               <Input
                   size="large"
                   prefix={<LockOutlined className="site-form-item-icon auth__icon-color"/>}
                   type="password"
                   placeholder="Пароль"
                   style={{height: 56}}
               />
             </Form.Item>
             <Form.Item>
               <Input
                   size="large"
                   prefix={<LockOutlined className="site-form-item-icon auth__icon-color"/>}
                   type="password"
                   placeholder="Повторить пароль"
                   style={{height: 56}}
               />
             </Form.Item>
             <Form.Item>
               <Button htmlType="submit" type="primary" size="large">ЗАРЕГИСТРИРОВАТЬСЯ</Button>
             </Form.Item>
             <Link to="/login" className="auth__login-link">Войти в аккаунт</Link>
           </Form>
         </Block>
       </div>
    );
  }
}
