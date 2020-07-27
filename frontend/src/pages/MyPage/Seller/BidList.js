import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const BidList = () => {
  const user_id = useSelector((state) => state.userAction.user_id);
  const [myList, setMyList] = useState([]);
  const [is_loading, setLoading] = useState(true);
  const loadingStyle = {
    display: "block",
    margin: "18% auto",
  };

  useEffect(() => {
    Axios.post("http://localhost:4000/api//MyBiddingList", { user_id: user_id })
      .then((res) => {
        setMyList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

  const showList = myList.map((obj) => {
    return (
      <TableRow key={obj._id}>
        <TableCell component="th" scope="row">
          {obj.request_id.category}
        </TableCell>
        <TableCell align="center">{obj.request_id.user_id.userName}</TableCell>
        <TableCell align="center">{obj.request_id.uploadAt}</TableCell>
        <TableCell align="center">{obj.request_id.state}</TableCell>
        <TableCell align="center">
          <Link to="#">상세보기</Link>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div>
      {is_loading ? (
        <CircularProgress style={loadingStyle} />
      ) : (
        <>
          <h2>입찰내역</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>카테고리</TableCell>
                  <TableCell align="center">이름</TableCell>
                  <TableCell align="center">요청일</TableCell>
                  <TableCell align="center">상태</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{showList}</TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default BidList;
