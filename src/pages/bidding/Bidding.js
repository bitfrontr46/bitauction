import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Bidding(props) {
  const history = useHistory();
  const [price, setPrice] = useState();
  const [data, setData] = useState(props.location.state.data);

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/api/bidding", {
      requestId: data._id,
      // sellerId : "testID",
      price: price,
    })
      .then((res) => {
        alert(res.data.result);
        history.goBack(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {price}
      <h3>가격</h3>
      <form onSubmit={onSubmitForm}>
        <input type="number" onChange={onChangePrice} />
      </form>
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        끄악
      </button>
    </div>
  );
}

export default Bidding;
