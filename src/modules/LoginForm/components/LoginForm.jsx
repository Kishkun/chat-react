import React from "react";
import {Link} from "react-router-dom";

import {Form, Input} from "antd";
import {MailOutlined, LockOutlined} from "@ant-design/icons";

import {Block, Button} from "../../../components";


export default class LoginForm extends React.Component{

  onFinish(values) {
    console.log("Finish:", values);
  }

  render() {
    return (
       <div>
         <div className="auth__top">
           <h2 className="auth__title-h2">Войти в аккаунт</h2>
           <p className="auth__text">Пожалуйста, войдите в свой аккаунт</p>
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
                   prefix={<LockOutlined className="site-form-item-icon auth__icon-color"/>}
                   type="password"
                   placeholder="Пароль"
                   style={{height: 56}}
               />
             </Form.Item>
             <Form.Item>
               <Button htmlType="submit" type="primary" size="large">ВОЙТИ В АККАУНТ</Button>
             </Form.Item>
             <Link to="/register" className="auth__register-link">Зарегистрироваться</Link>
           </Form>
         </Block>
       </div>
    );
  }
}
