import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import imageLogin from '../../../assets/images/login-banner.jpg';
import { login } from '../../redux/action';
import { UserAccount } from '../../redux/reducer/auth';
import { RootState } from '../../redux/store';
import { EmailRegex } from '../constants';

type LoginPops = {
  previousPath: string;
};

const Login = ({ previousPath }: LoginPops) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const message = useSelector((state: RootState) => state.auth.message);

  const isLoading = useSelector((state: RootState) => state.auth.isLoading);

  const [userInfo, setUserInfo] = useState<UserAccount>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    validateForm(e.target.name);
  };

  const validateForm = (name: string) => {
    const newErrors = {
      email: '',
      password: '',
    };

    if (name === 'email') {
      if (userInfo.email.trim() === '') {
        newErrors.email = 'Email is required';
      }

      if (!userInfo.email.match(EmailRegex)) {
        newErrors.email = 'Email is not valid';
      }
    }

    if (name === 'password') {
      if (userInfo.password.length < 5) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
    }

    setErrors(newErrors);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(login(userInfo) as any);
    navigate(previousPath);
    setUserInfo({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <div className="login row">
        <div className="login-banner col col-4">
          <img src={imageLogin} aria-hidden alt="Login banner image" />
        </div>
        <div className="login-content col col-8 col-lg-12 col-sm-12">
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
                onChange={handleChange}
              />
              <ErrorValidate text={errors.email} />
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
                onChange={handleChange}
              />
              <ErrorValidate text={errors.password} />
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
