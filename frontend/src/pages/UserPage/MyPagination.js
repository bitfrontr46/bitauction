//하단부 페이지 버튼 
import React from "react"
import { Pagination } from "react-admin";

const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export default PostPagination;
