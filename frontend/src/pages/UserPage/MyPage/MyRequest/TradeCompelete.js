import React from 'react'
import RequestCard from '../../../../components/RequestCard'
import { Container,Grid,Typography,Divider,makeStyles,Avatar } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'rgb(104,104,106)'
    },
    gridStyle: {
        margin: '4% auto',
        width: "80%",
    },
    loadingStyle: {
        display: 'block',
        margin: '4% auto',
    },
    large: {
        width: '100px',
        height: '100px',
    },
}));

const TradeCompelete = ({data,requestData}) => {

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid className={classes.gridStyle} container spacing={9}>
                <Grid item xs={6}>
                    <RequestCard obj={requestData} />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={3}>
                        {data.author.profile.profileImage 
                            ?
                            <Avatar src={data.author.profile.profileImage} className={classes.large} />
                            :
                            <Avatar className={classes.large}>
                                <PersonIcon style={{ fontSize: 100 }} />
                            </Avatar>
                        }
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: '8px' }}>
                            <Typography variant="h6">
                                {data.author.name}
                            </Typography>
                            <Rating name="half-rating-read" value={1} precision={0.5} readOnly />
                            <Typography>3.5/5.0</Typography>
                        </Grid>
                    </Grid>
                    <h1>거래완료</h1>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container className={classes.gridStyle} spacing={9}>
                <Grid item xs={4}>
                    <Typography align="center" variant="h5" gutterBottom>안내</Typography>
                    <ul>
                        <li>
                            본 웹사이트는 고객과 전문가를 연결시켜드리는 중개 플랫폼 입니다.
                        </li>
                        <br/>
                        <li>
                            사이트 운영자는 거래에 관여하지 않습니다.
                        </li>
                        <br/>
                        <li>

                        </li>
                    </ul>
                </Grid>
                <Grid item xs={4}>
                    <Typography align="center" variant="h5" gutterBottom>교환/환불</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography align="center" variant="h5" gutterBottom>평점과 리뷰</Typography>
                    <ul>
                        <li>
                            평점과 리뷰는 거래 완료 고객에 한해서만 작성이 가능합니다.
                        </li>
                        <br/>
                        <li>
                            사이트 운영자는 거래에 관여하지 않습니다.
                        </li>
                        <br/>
                        <li>

                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}

export default TradeCompelete
