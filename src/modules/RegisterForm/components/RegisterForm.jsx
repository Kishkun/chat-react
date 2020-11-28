import React from 'react';
import {Link} from 'react-router-dom';

import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleOutlined} from '@ant-design/icons';

import {Block, Button} from '../../../components';


export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  onFinish(values) {
    console.log('Finish:', values);
  }

  render() {
    const success = false;

    return (
        <div>
          <div className="auth__top">
            <h2 className="auth__title-h2">Регистрация</h2>
            <p className="auth__text">Для входа в чат, вам нужно зарегистрироваться</p>
          </div>
          <Block>
            { !success ?
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
                </Form> :
                <div className="auth__success-block">
                  <div className="auth__success-icon">
                    <InfoCircleOutlined style={{fontSize: '50px', color: '#418FFF'}}/>
                  </div>
                  <h3 className="auth__title-h3">Подтвердите свой аккаунт</h3>
                  <p className="auth__success-text">На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                </div>
            }
          </Block>
        </div>
    );
  }
}
