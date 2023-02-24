import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {getAuth, getCaptchaUrl, getMyID, getServerStatus} from "../../redux/selectors/authSelector";
import {Navigate} from "react-router-dom";
import * as Yup from "yup";
import LoginPage from "./LoginPage";

const LoginPageContainer = (props) => {
    document.title = "Social Network - Login";

    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
        captcha: "",
    };

    const onSubmit = (values, {setSubmitting}) => {
        let {email, password, rememberMe, captcha} = values;
        props.login(email, password, rememberMe, captcha);
        setSubmitting(false);
    }

    const required = "This is a required field!";
    const validationSchema = Yup.object({
        email: Yup.string().required(required).email("Must be a valid email!"),
        password: Yup.string().required(required),
    });

    return (
        props.isAuth
            ? <Navigate to={`/profile/${props.myID}`}/>
            : <LoginPage initialValues={initialValues}
                         onSubmit={onSubmit}
                         validationSchema={validationSchema}
                         status={props.serverStatus}
                         captcha={props.captchaUrl}/>
    );
};

const mapStateToProps = (state) => ({
    isAuth: getAuth(state),
    myID: getMyID(state),
    serverStatus: getServerStatus(state),
    captchaUrl: getCaptchaUrl(state),
});

export default connect(mapStateToProps, {login})(LoginPageContainer);