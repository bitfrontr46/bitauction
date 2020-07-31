// https://hocheon.tistory.com/59
// https://marmelab.com/react-admin/
// Redux-Saga 사용해야 함
// https://marmelab.com/react-admin/CustomApp.html

import React from "react";
import { Admin } from "react-admin";

const dataProvider = dataProvider
.getOne('posts', { id: 123 })
.then(response => {
    console.log(response.data); // { id: 123, title: "hello, world" }
});

console.log("data");

function UserPage() {
  return <Admin dataProvider={dataProvider} />;
}

export default UserPage;