import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../../components/Counter'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
import CardMedia from '@material-ui/core/CardMedia';
import { Grid,Paper } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        textDecoration: 'none',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    gridStyle: {
        display: 'inline-block',
        margin: 'auto',
    },
    tagStyle: {
        display: 'inline-block',
        backgroundColor: 'lightgray',
        borderRadius: '3px',
        padding: '3px 5px',
        marginTop: '5px',
        marginRight: '3px',
    }
}));

function Request({ data,checked }) {

    const classes = useStyles();

    const showTagList = data.tags.map((obj,index) => {
        return <small className={classes.tagStyle} key={index}>{obj}</small>
    })

    return (
        <Slide direction="left" in={!checked} mountOnEnter unmountOnExit>
            <Paper elevation={3}>
                <Card component={Link} to={{ pathname: `/seller/request/${data._id}`, state: { data: data } }} className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Grid container>
                            <Grid className={classes.gridStyle} item xs={6}>
                                <small>{data.requestedAt}</small>
                                <Typography variant="h5">
                                    {data.author.name} 님의 {data.category} 요청
                                </Typography>
                                {showTagList}
                            </Grid>
                            <Grid className={classes.gridStyle} item xs={6}>
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                    <Counter data={data}></Counter>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Paper>
        </Slide>
    )
}

export default Request;

