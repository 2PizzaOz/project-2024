import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../state/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component  {
  componentDidMount() {
    debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
    .then(response => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        this.props.setAuthUserData(id, email, login);
      }

    });
  }
  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)