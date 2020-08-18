import React, { useState,useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Chat from './chat';
import MyRequest from './MyRequest';
import { Grid, Container, Divider } from '@material-ui/core';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import RequestDetail from './MyRequest/RequestDetail';
import { useSelector } from 'react-redux';
import ProfileModal from '../../../components/Profile/ProfileModal';

const MyPage = () => {
    const userName = localStorage.getItem('userName');
    const user_id = localStorage.getItem('user_id')
    const is_seller = useSelector(state=>state.userAction.is_seller);
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
                {is_seller
                &&
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" component={Link} to='/seller/mypage'>
                    판매 정보
                </Button>
                }
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" component={Link} to='/user/mypage'>
                    구매 정보
                </Button>
                <Button style={{ width: '100%', margin: '1px' }} variant="outlined" onClick={handleClickOpen}>
                    나의 프로필
                </Button>
                <br />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid style={{ marginLeft: '15px' }} item xs={9}>
                <Route exact path='/user/mypage' component={MyRequest} />
                <Route path='/user/mypage/detail' component={RequestDetail} />
                <Route path='/user/mypage/chat' component={Chat} />
                <Route path='/user/mypage/profile' component={Profile} />
            </Grid>
            <ProfileModal name={userName} open={open} onClose={handleClose} user_id={user_id} />
        </Grid>
    )
}

export default MyPage;