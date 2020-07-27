import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';
import Chat from './chat';
import BidList from './BidList';
import { Grid, Container, Divider } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatBox from './chat/ChatBox';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';

const MyPage = () => {
    const userName = localStorage.getItem('userName');
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const imageStyle = { borderRadius: '10px' }
    return (
        <div style={{ marginTop: '10px' }}>
            <Container >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab component={Link} to='/mypage' label="입찰 내역" />
                    <Tab component={Link} to='/mypage/Chat' label="채팅" />
                    <Tab component={Link} to='/mypage/profile' label="프로필" />
                </Tabs>
                <Divider />
                <Grid style={{ marginTop: '10px' }} container spacing={1}>
                    <Grid style={{ textAlign: 'center',marginRight : '10px' }} item xs={2}>
                        <Image imageStyle={imageStyle} src="https://placeimg.com/280/250/animals" alt="avatar" />
                        <h3>{userName}</h3>
                        <Button style={{width:'100%'}} variant="outlined" component={Link} to='/mypage'>
                            마이 페이지
                        </Button>
                        <Button style={{width:'100%'}} variant="outlined" component={Link} to='/mypage/profile'>
                            프로필
                        </Button>
                        <br />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid style={{marginLeft : '15px' }} item xs={9}>
                        <Route exact path='/mypage' component={BidList} />
                        <Route path='/mypage/profile' component={Profile} />
                        <Route path='/mypage/chat' component={Chat} exact />
                        <Route path='/mypage/chat/:id' component={ChatBox} exact/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default MyPage;