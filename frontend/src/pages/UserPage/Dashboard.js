import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core/";
import AdminHomeChart1 from "../Admin/AdminHomeChart1"

export default () => (
  <>
  <Card>
    <CardHeader title="Admin Page" />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sint
      quam assumenda dolores nemo temporibus similique ducimus, blanditiis
      aliquam voluptas, corporis qui dolorum magni impedit numquam dolor harum
      aperiam! Delectus!
    </CardContent>
  </Card>
  <Card>
    <CardHeader title="Admin Chart1"/>
    <CardContent>
      <AdminHomeChart1/>
    </CardContent>
  </Card>
  </>
);
