import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Chat from './Chat';
import Home from './Home';
import { Grid, Container } from '@material-ui/core';

const MyPage = () => {
    const userName = localStorage.getItem('userName');
    return (
        <div>
            <Container>
                <Grid style={{ marginTop : '10px' }} container spacing={10}>
                    <Grid style={{ textAlign : 'center' }} item xs={3}>
                        <img style={{ borderRadius: '10px' }} src="https://placeimg.com/280/250/animals" alt="avatar" />
                        <h2>{userName}</h2>
                        <Link to='/mypage'>
                            홈
                        </Link>
                        <br />
                        <Link to='/mypage/profile'>
                            프로필
                        </Link>
                        <br />
                        <Link to='/mypage/Chat'>
                            채팅
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Route exact path='/mypage' component={Home} />
                        <Route path='/mypage/profile' component={Profile} />
                        <Route path='/mypage/Chat' component={Chat} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MyPage;