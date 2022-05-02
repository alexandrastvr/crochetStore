import React from 'react';
import Layout from '../../components/layout/Layout';
import { connect } from 'react-redux';
import {loginUser} from '../../redux/user/userActions';
import {fbLoginUser} from '../../redux/user/userActions';
import facebookIcon from '../../utils/icons/facebook.svg' 
import googleIcon from '../../utils/icons/google.svg';

class Login extends React.Component {
    componentDidUpdate(prevProps){
        if(this.props.userData != prevProps.userData){
            this.props.history.push('/');
        }
    }
     render(){
        const {loginUser, fbLoginUser} = this.props;
        return (
            <Layout>
                <div className='login-page page-content d-flex flex-column align-items-center'>
                    <h2 className='m-3'>Login</h2>
                    <p className='mt-2 mb-5'>Alege providerul cu care vrei să vrei să te loghezi:</p>
                    <button
                        className="btn d-flex align-items-center m-3"
                        onClick={() => loginUser()}
                    >
                        <img src={googleIcon} width='30px' className='me-1 ms-1'/>
                        <span className="text-nowrap">Sign in with Google</span>
                    </button>
                    <button
                        className="btn d-flex align-items-center m-3"
                        onClick={() => fbLoginUser()}
                    >
                        <img src={facebookIcon} width='30px' className='me-1 ms-1'/>
                        <span className="text-nowrap">Sign in with Facebook</span>
                    </button>
                </div>
            </Layout>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => {dispatch(loginUser())},
        fbLoginUser: () => {dispatch(fbLoginUser())}
    }
}

function mapStateToProps(state){
    return {
        userData: state.user.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);