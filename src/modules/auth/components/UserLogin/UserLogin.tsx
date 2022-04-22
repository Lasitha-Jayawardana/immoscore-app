
import LoginUserForm from '../../forms/LoginUserForm';
import {FC} from "react";

const UserLogin: FC = () => (
    <div className="container font-center">
        <div className="row mb-3">
            <div className="col-sm-12">
                <h2 className="header-2-text">Login</h2>
                <p className="light-4-text font-gray">
                    If you have an existing account, sign in here.
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <LoginUserForm />
            </div>
        </div>
    </div>
);

export default UserLogin;
