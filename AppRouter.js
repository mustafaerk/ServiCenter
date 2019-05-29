import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";


import Welcome from "./Scene/Login/Welcome";
import Login from "./Scene/Login/Login";
import Register from "./Scene/Login/Register";
import ForgotPass from "./Scene/Login/ForgotPass"

import Chat from "./Scene/WorkPlace/Chat"
import Details from "./Scene/WorkPlace/Details"
import Filter from "./Scene/WorkPlace/Filter"
import Main from "./Scene/WorkPlace/Main"
import Messaga from "./Scene/WorkPlace/Messaga"
import PostList from "./Scene/WorkPlace/PostList"
import Setting from "./Scene/WorkPlace/Setting"
import TPPostList from "./Scene/WorkPlace/ThirdPartPostList"
import TPProfile from "./Scene/WorkPlace/ThirdPartProfile"

export default class App extends Component {
    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene
                        key="Welcome"
                        component={Welcome}
                        title="Welcome"
                        initial={true}
                        hideNavBar
                    />
                    <Scene key="Login" component={Login} title="Login" hideNavBar />
                    <Scene key="Register" component={Register} title="Register" hideNavBar />
                    <Scene key="ForgotPass" component={ForgotPass} title="ForgotPass" hideNavBar />
                   
                    <Scene key="Details" component={Details} title="Details" hideNavBar />
                    <Scene key="Filter" component={Filter} title="Filter" hideNavBar />
                    <Scene key="Main" component={Main} title="Main" hideNavBar />
                    <Scene key="Messaga" component={Messaga} title="Messaga" hideNavBar />
                    <Scene key="PostList" component={PostList} title="PostList" hideNavBar />
                    <Scene key="TPPostList" component={TPPostList} title="TPPostList" hideNavBar />
                    <Scene key="TPProfile" component={TPProfile} title="TPProfile" hideNavBar />
                    <Scene key="Chat" component={Chat} title="Chat" hideNavBar />

                </Scene>
            </Router>
        );
    }
}
