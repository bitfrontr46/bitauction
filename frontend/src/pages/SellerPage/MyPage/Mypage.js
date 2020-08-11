import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Chat from './chat';
import BidList from './BidList';
import { Grid, Container, Divider } from '@material-ui/core';
import ChatBox from './chat/ChatBox';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import ProfileModal from '../../../components/Profile/ProfileModal';

const MyPage = () => {
    const userName = localStorage.getItem('userName');
    const user_id = localStorage.getItem('user_id')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const imageStyle = { borderRadius: '10px' }

    return (
        <Grid style={{ marginTop: '2px' }} container spacing={1}>
            <Grid style={{ textAlign: 'center', marginRight: '10px' }} item xs={2}>
                <Image imageStyle={imageStyle} src="https://placeimg.com/280/250/animals" alt="avatar" />
                <h3>{userName}</h3>
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" component={Link} to='/mypage'>
                    마이 페이지
                    </Button>
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" onClick={handleClickOpen}>
                    프로필
                    </Button>
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" component={Link} to='/seller/mypage/chat'>
                    채팅 상담
                    </Button>
                <br />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid style={{ marginLeft: '15px' }} item xs={9}>
                <Route exact path='/seller/mypage' component={BidList} />
                <Route path='/seller/mypage/profile' component={Profile} />
                <Route path='/seller/mypage/chat' component={Chat} exact />
                <Route path='/seller/mypage/chat/:id' component={ChatBox} exact />
            </Grid>
            <ProfileModal open={open} onClose={handleClose} user_id={user_id} />
        </Grid>
    )
}

export default MyPage;