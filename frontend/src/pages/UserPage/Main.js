import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Enroll from './Enroll';
import UserHome from './UserHome';
import MyPage from './MyPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/user' component={UserHome} />
            <Route path='/user/enroll' component={Enroll} />
            <Route path='/user/mypage' component={MyPage} />
        </Switch>
    )
}

export default Main;