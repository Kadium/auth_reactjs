import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Input from "../../../components/uielements/input";
import Checkbox from "../../../components/uielements/checkbox";
import Button from "../../../components/uielements/button";
import authAction from "../../../redux/auth/actions";
import SignInStyleWrapper from "./signin.style";
import Form from '../../../components/uielements/form';
import IntlMessages from '../../../components/utility/intlMessages';

import Logo from '../../../image/image/logo_svg.svg';

const {
    login,
    forgotPassword
} = authAction;

class SignIn extends Component {
    state = {
        redirectToReferrer: false,
        isReset: false,
    };

    componentWillReceiveProps(nextProps) {
        if (
            this.props.isLoggedIn !== nextProps.isLoggedIn &&
            nextProps.isLoggedIn === true
        ) {
            this.setState({redirectToReferrer: true});
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        const {login} = this.props;
        const userInfo = {
            email: document.getElementById('email').value || '',
            password: document.getElementById('password').value || '',
        };
        login({userInfo});
    };

    handleForgot = (e) => {
        e.preventDefault();
        const {forgotPassword} = this.props;
        const data = {
            email: document.getElementById('email').value || '',
        };
        forgotPassword({data});
    };

    render() {
        const from = {pathname: "/feed"};
        const {redirectToReferrer, isReset} = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from}/>;
        }
        return (
            <SignInStyleWrapper className="isoSignInPage">
                <div className="isoLoginContentWrapper">
                    <div className="isoLoginContent">
                        <div className="isoLogoWrapper">
                            <img src={Logo} alt="ContonWayFouta"/>
                        </div>

                        <div className='isoHeader'>
                            Générateur de rencontres entre professionnels du monde de la vente.
                            <br/>
                            Nous créons un lien direct et personalisé entre fournisseurs et commerçants.
                        </div>

                        <div className="isoImage">
                            <div className="isoSignInForm">
                                <Form>
                                    {isReset ? (
                                        <div>
                                            <span className="spanLogin">Mot de passe oublié</span>
                                            <div>
                                                Saisissez une adresse e-mail valide et nous vous enverrons un lien de
                                                réinitialisation pour votre mot de passe.
                                            </div>
                                            <div className="isoInputWrapper">
                                                <Input size="large" id="email" placeholder="Email"/>
                                            </div>

                                            <div className="isoInputWrapper isoLeftRightComponent" >
                                                <Button type="primary" onClick={this.handleForgot}>
                                                    Réinitialiser le mot de passe
                                                </Button>
                                            </div>

                                            <div className="isoInputWrapper">
                                                <a className="isoForgotPass" onClick={() => {this.setState({isReset: false});}}
                                                >
                                                    Retour
                                                </a>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <span className="spanLogin">Espace de connexion</span>
                                            <div className="isoInputWrapper">
                                                <Input size="large" id="email" placeholder="Email"/>
                                            </div>

                                            <div className="isoInputWrapper">
                                                <Input size="large" type="password" id="password"
                                                       placeholder="Password"/>
                                            </div>

                                            <div className="isoInputWrapper isoLeftRightComponent">
                                                <Checkbox>
                                                    <IntlMessages id="signin.remember"/>
                                                </Checkbox>
                                                <Button type="primary" onClick={this.handleLogin}>
                                                    <IntlMessages id="signin.button.signin"/>
                                                </Button>
                                            </div>

                                            <div className="isoInputWrapper">
                                                <a className="isoForgotPass" onClick={() => {this.setState({isReset: true});}}
                                                >
                                                    Mot de passe oublié
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    <div className="isoInputWrapper isoOtherLogin">
                                        <span className="spanNotMember">Pas encore membre ?</span>
                                        <Link to="/signupcustomer" className="isoForgotPass">
                                            <Button type="btnProduct">
                                                <IntlMessages id="signin.button.product"/>
                                            </Button>
                                        </Link>
                                        <Link to="/signupowner" className="isoForgotPass">
                                            <Button ype="btnOwner">
                                                Je suis grossiste
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="isoInputWrapper">
                                        <Link to="/details" className="isoForgotPass">
                                            Détails des offres
                                        </Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </SignInStyleWrapper>
        );
    }
}

export default connect(
    state => ({
        isLoggedIn: state.Auth.idToken !== null
    }),
    {login, forgotPassword}
)(SignIn);
