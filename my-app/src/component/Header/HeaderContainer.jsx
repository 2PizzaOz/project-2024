import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getHeaderThunkCreator, setAuthUserData } from "../../state/auth-reducer";


class HeaderContainer extends React.Component  {
  componentDidMount() {
    this.props.getHeaderThunkCreator()
    // userAPI.getHeader()
    // .then(data => {
    //   if (data.resultCode === 0) {
    //     const {id, email, login} = data.data
    //     this.props.setAuthUserData(id, email, login);
    //   }

    // });
  }
  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect(mapStateToProps,{getHeaderThunkCreator})(HeaderContainer)