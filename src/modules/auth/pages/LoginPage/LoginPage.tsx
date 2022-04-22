


import UserLogin from '../../components/UserLogin/UserLogin';

import './LoginPage.css';
import {FC, useContext} from "react";
import {IThemeContext, ThemeContext} from "../../../../utils/providers/ThemeContextProvider";
import {ThemeEnum} from "../../../../utils/constants/providers/Theme";

const LoginPage:    FC = () => {
  const {theme, setTheme} = useContext(ThemeContext) ;
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeEnum);
  };
  return (<div {...(theme ? {"data-theme" : theme}:{})} className="login">
    <div className="container container-width-set-none">
      <div className="row">s
        <div className="col-sm-6">
          <div className="row login-form-div">
            <div className="col-sm-8 m-auto">
              <UserLogin/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>)
};

export default LoginPage;
