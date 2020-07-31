import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios"
const useStyles = makeStyles({
    root:{
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    
})


function CardForm(props) {
    const classes = useStyles();

    const [Uploads, setUploads] = useState([])

    useEffect(()=>{
       
        axios.post("http://localhost:4000/api/upload/uploads", )
        .then(response=>{
            if(response.data.success){
                //console.log(response.data);
                //  -> 연속해서 콘솔 로그가 찍히는 문제 발생(무한반복)

                setUploads(response.data.uploadInfo)
            }else{
                alert("이미지를 가져오는데 실패했습니다.")
            }
        })
    })


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=""
                    title=""
                />
            <CardContent>
                <Typography gutterBotton variant="h5" component="h2">
                    abc
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    aaa
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="smail" color="primary">
                    공유
                </Button>
                <Button size="smail" color="primary">
                    더보기 
                </Button>
            </CardActions>
        </Card>
      
    );
}

export default CardForm;

// 사진 업로드 -> 페이지로 이동
//저장한 사진을 가져와서 보여준다

