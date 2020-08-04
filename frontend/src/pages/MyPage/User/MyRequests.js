import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { CircularProgress, Container, Grid, CardHeader, Divider, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GET_MY_REQUESTS } from '../../../lib/queries';
import { useQuery } from '@apollo/client';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Counter from '../../../components/Counter'


const MyRequests = () => {

    const user_id = useSelector(state => state.userAction.user_id);

    const loadingStyle = {
        display: 'block',
        margin: '18% auto',
    }

    const history = useHistory();

    const { loading, data, error } = useQuery(GET_MY_REQUESTS, {
        variables: { author: user_id },
        fetchPolicy: 'cache-and-network',
    }
    )

    if (error) {
        alert(error);
        history.push('/');
        return (
            <CircularProgress style={loadingStyle} />
        )
    }

    if (loading) {
        return (
            <CircularProgress style={loadingStyle} />
        )
    } else {
        const requestHistory = data.getMyRequests.map((obj) => {
            return (
                <TableRow key={obj._id}>
                    <TableCell component="th" scope="row">
                        {obj.category}
                    </TableCell>
                    <TableCell align="center">{obj.requestedAt}</TableCell>
                    <TableCell align="center">{obj.state}</TableCell>
                    <TableCell align="center"><Link to='#'>상세보기</Link></TableCell>
                </TableRow>
            )
        })

        const requestList = data.getMyRequests.filter((obj) => {
            return obj.state === '경매 진행중';
        })

        const MyRequestList = requestList.map((obj) => {
            return (
                <Grid key={obj._id} style={{ margin: 'auto' }} item xs={4}>
                    <Link style={{textDecoration : 'none'}} to={{ pathname: `/mypage/${obj._id}`, state: obj }}>
                        <Card style={{ textAlign: 'center' }} size="large" color="primary" variant="outlined">
                            <h3>{obj.category}</h3>
                            <Divider />
                            <CardContent>
                                요청일 : {obj.requestedAt}
                                <br/>
                                <Counter data={obj} />
                                <br />
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            )
        })

        return (
            <div>
                <h2>나의 요청</h2>
                <Container>
                    {requestList.length === 0
                        ?
                        <h1 style={{ textAlign: 'center' }}>현재 경매 중인 요청이 없습니다.</h1>
                        :
                        <Grid container spacing={4}>
                            {MyRequestList}
                        </Grid>
                    }
                </Container>
                <Divider style={{ marginTop: '30px' }} />
                <h2>요청 내역</h2>
                <TableContainer variant="outlined" component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>카테고리</TableCell>
                                <TableCell align="center">요청일</TableCell>
                                <TableCell align="center">상태</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requestHistory}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

}

export default MyRequests;