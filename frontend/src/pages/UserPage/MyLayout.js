//AppBar Designing 위한 Component
// MyLayout 불러와 사용하면 됨

import React from "react"
import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

export default MyLayout;
