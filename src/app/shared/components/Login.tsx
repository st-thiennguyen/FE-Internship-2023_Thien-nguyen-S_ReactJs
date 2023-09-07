import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import imageLogin from '../../../assets/images/login-banner.jpg';
import { login } from '../../redux/action';
import { UserAccount } from '../../redux/reducer/auth';
import { RootState } from '../../redux/store';

const Login = () => {
  const dispatch = useDispatch();

  const message = useSelector((state: RootState) => state.auth.message);

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const [userInfo, setUserInfo] = useState<UserAccount>({
    email: '',
    password: '',
  });

  const [isError, setError] = useState({
    email: ' ',
    password: ' ',
  });

  const error = {
    email: '',
    password: '',
  };

  const onBlurInput = (e: React.FocusEvent) => {
    var mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!userInfo.email) {
      error.email = 'Email is required';
    } else if (!userInfo.email.match(mailFormat)) {
      error.email = 'Email is not valid';
    } else {
      error.email = '';
    }

    if (!userInfo.password) {
      error.password = 'Password is required';
    } else {
      error.password = '';
    }
    setError(error);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login(userInfo) as any);
    setUserInfo({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <div className="login row">
        <div className="login-banner col col-4">
          <img src={imageLogin} aria-hidden alt="Login banner image" />
        </div>
        <div className="login-content col col-8 col-sm-12">
          <h3 className="login-title text-center">Login</h3>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-input">
              <label className="login-input-label" htmlFor="login-email">
                Email :{' '}
              </label>
              <input
                autoFocus
                type="email"
                id="login-email"
                name="email"
                className="login-input"
                value={userInfo.email}
                placeholder="Enter your email !"
                required
                onChange={(e) =>
                  setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
                }
                onBlur={onBlurInput}
              />
              <ErrorValidate text={isError.email} />
            </div>
            <div className="form-input">
              <label className="login-input-label" htmlFor="login-password">
                Password :{' '}
              </label>
              <input
                autoFocus
                required
                type="password"
                id="login-password"
                name="password"
                className="login-input"
                value={userInfo.password}
                placeholder="Enter password"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
                }
                onBlur={onBlurInput}
              />
              <ErrorValidate text={isError.password} />
            </div>
            <input
              className={`btn btn-primary btn-login ${
                isLoading ? 'disabled' : ''
              }`}
              type="submit"
              value={isLoading ? 'Loading...' : 'Login'}
            />
          </form>
          <div className="error-message text-center">
            <ErrorValidate text={message} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorValidate = (props: any) => {
  return <p className="login-error-message">{props.text || ''}</p>;
};

export default Login;
