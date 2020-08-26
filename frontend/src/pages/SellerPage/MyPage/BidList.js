import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  CircularProgress,
  Container,
  Grid,
  CardHeader,
  Divider,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GET_MY_BIDS } from "../../../lib/queries";
import { useQuery } from "@apollo/client";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Chat from "../../../components/chat";

const BidList = () => {
  const user_id = useSelector((state) => state.userAction.user_id);

  const loadingStyle = {
    display: "block",
    margin: "18% auto",
  };

  const [checked, setChecked] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);

  const handleChatClose = () => {
    setChatOpen(false);
  };

  const onClickChecked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const history = useHistory();

  const { loading, data, error } = useQuery(GET_MY_BIDS, {
    variables: { author: user_id },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    alert(error);
    history.push("/");
    return <CircularProgress style={loadingStyle} />;
  }

  if (loading) {
    return <CircularProgress style={loadingStyle} />;
  } else {
    const BidHistory = data.getMyBids.map((obj) => {
      return (
        <TableRow key={obj.request._id}>
          <TableCell component="th" scope="row">
            {obj.request.category}
          </TableCell>
          <TableCell align="center">{obj.request.author.name}</TableCell>
          <TableCell align="center">{obj.request.requestedAt}</TableCell>
          <TableCell align="center">{obj.state}</TableCell>
        </TableRow>
      );
    });

    const ChosenList = data.getMyBids.filter((obj) => {
      return obj.state === "거래 진행중";
    });

    const MyChosenList = ChosenList.map((obj) => {
      return (
        <Grid key={obj._id} style={{ margin: "auto" }} item xs={4}>
          <Collapse in={checked} collapsedHeight={88}>
            <Card elevation={3}>
              <CardHeader
                onClick={onClickChecked}
                action={checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                style={{ textAlign: "center" }}
                title={`${obj.request.author.name}님의 요청서`}
                subheader={obj.request.requestedAt}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button style={{ width: "100%" }} variant="outlined">
                      자세히
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => {
                        setChatOpen(true);
                      }}
                      style={{ width: "100%" }}
                      variant="outlined"
                    >
                      1:1 채팅
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
              <Chat
                open={chatOpen}
                onClose={handleChatClose}
                request={obj.request._id}
                seller={user_id}
              />
            </Card>
          </Collapse>
        </Grid>
      );
    });

    return (
      <div>
        <Typography variant="h5" gutterBottom>
          진행중인 거래
        </Typography>
        <Container>
          {ChosenList.length === 0 ? (
            <Typography
              variant="h5"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              현재 진행중인 거래가 없습니다.
            </Typography>
          ) : (
            <Grid container>{MyChosenList}</Grid>
          )}
        </Container>
        <Divider style={{ marginTop: "30px" }} />
        <Typography variant="h5" gutterBottom>
          거래내역
        </Typography>
        <TableContainer variant="outlined" component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>카테고리</TableCell>
                <TableCell align="center">이름</TableCell>
                <TableCell align="center">요청일</TableCell>
                <TableCell align="center">상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{BidHistory}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

// const BidList = () => {

//     const user_id = useSelector(state => state.userAction.user_id);

//     const loadingStyle = {
//         display: 'block',
//         margin: '18% auto',
//     }

//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const getMyBids = () => {
//         axios.get('/my-bid',{
//             author : user_id
//         })
//         .then(res=>{
//             setData(res.data);
//             setLoading(false);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     }

//     useEffect(() => {
//         getMyBids();
//     }, [])

//     if (loading) {
//         return (
//             <CircularProgress style={loadingStyle} />
//         )
//     } else {

//         const BidHistory = data.map((obj) => {
//             return (
//                 <TableRow key={obj.request._id}>
//                     <TableCell component="th" scope="row">
//                         {obj.request.category}
//                     </TableCell>
//                     <TableCell align="center">{obj.request.author.name}</TableCell>
//                     <TableCell align="center">{obj.request.requestedAt}</TableCell>
//                     <TableCell align="center">{obj.state}</TableCell>
//                 </TableRow>
//             )
//         })

//         const ChosenList = data.filter((obj) => {
//             return obj.state === '거래 진행중';
//         })

//         const WaittingList = data.filter((obj) => {
//             return obj.state === '거래 대기중';
//         })

//         const MyChosenList = ChosenList.map((obj) => {
//             return (
//                 <Grid key={obj._id} style={{ margin: 'auto' }} item xs={4}>
//                     <RequestCard obj={obj.request} />
//                 </Grid>
//             )
//         })

//         const MyWaittingList = WaittingList.map((obj) => {
//             return (
//                 <Grid key={obj.request._id} style={{ margin: 'auto' }} item xs={4}>
//                     <Card style={{ textAlign: 'center' }} variant="outlined">
//                         <CardContent>
//                             {obj.request.author.name} 님의 {obj.request.category}<br/>
//                             <Counter data={obj.request} />
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             )
//         })

//         return (
//             <div>
//                 <h2>진행중인 거래</h2>
//                 <Container>
//                     {ChosenList.length === 0
//                         ?
//                         <h1 style={{ textAlign: 'center' }}>현재 진행중인 거래가 없습니다!</h1>
//                         :
//                         <Grid container spacing={4}>
//                             {MyChosenList}
//                         </Grid>
//                     }
//                 </Container>
//                 <Divider style={{ marginTop: '30px' }} />
//                 <h2>대기중인 거래</h2>
//                 <Container>
//                     {WaittingList.length === 0
//                         ?
//                         <h1 style={{ textAlign: 'center' }}>현재 대기중인 견적이 없습니다!</h1>
//                         :
//                         <Grid container spacing={4}>
//                             {MyWaittingList}
//                         </Grid>
//                     }
//                 </Container>
//                 <Divider style={{ marginTop: '30px' }} />
//                 <h2>거래내역</h2>
//                 <TableContainer variant="outlined" component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>카테고리</TableCell>
//                                 <TableCell align="center">이름</TableCell>
//                                 <TableCell align="center">요청일</TableCell>
//                                 <TableCell align="center">상태</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {BidHistory}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>

//         )
//     }

// }

export default BidList;
