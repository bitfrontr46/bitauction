import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_BIDS_IN_REQUEST } from '../../../lib/queries';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        textDecoration: 'none',
    },
    cardHead: {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    tagStyle: {
        display: 'inline-block',
        backgroundColor: '#F0F0F0',
        borderRadius: '3px',
        padding: '2px 5px',
        margin: '5px',
        fontWeight: 'bold',
    },
    loadingStyle: {
        display: 'block',
        margin: '18% auto',
    }
}));

const MyRequestDetail = (props) => {

    const classes = useStyles();

    const history = useHistory();

    const [requestData] = useState(props.location.state);


    const { loading, data, error } = useQuery(GET_BIDS_IN_REQUEST, {
        variables: { request: requestData._id }
    }
    )

    if (loading) {
        return (
            <CircularProgress className={classes.loadingStyle} />
        )
    }

    if (error) {
        alert(error);
        history.push('/');
        return (
            <CircularProgress className={classes.loadingStyle} />
        )
    }

    const bids = data.getBidsInRequest.map((obj) => {
        return (
            <Card key={obj._id} size="large" color="primary" variant="outlined" className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Grid container>
                        <Grid item xs={6}>
                            {obj.author.name}님의 제안 {obj.price}원!
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined">
                                1:1 상담
                            </Button>
                            <Button variant="outlined">
                                낙찰하기
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    })

    return (
        <div>
            {bids}
        </div>
    )
}

export default MyRequestDetail;
