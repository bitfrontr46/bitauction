import React from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function ProductItem({ data }) {

    const classes = useStyles();


    const showTagList = data.tags.map((obj) => {
        return <span key={obj}><Chip variant="outlined" size="small" label={obj}/>&nbsp;</span>
    })

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.category}
                </Typography>
                <Typography>
                    <Counter data={data}></Counter>
                </Typography>
                <br/>
                {showTagList}
            </CardContent>
            <Divider/>
            <CardActions>
                <Button component={Link} to={{ pathname: `list/${data._id}`, state: { data: data } }} size="large" color="primary">
                    상세보기
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductItem;

