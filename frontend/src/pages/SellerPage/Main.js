import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RequestMain from './Request/RequestMain';
import RequestDetail from './Request/RequestDetail';
import Home from './Home';
import MyPage from './MyPage';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/seller' component={Home} />
            <Route exact path='/seller/request' component={RequestMain} />
            <Route path='/seller/request/:id' component={RequestDetail} />
            <Route path='/seller/mypage' component={MyPage}/>
        </Switch>
    )
}

export default Main
