import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductListDrawer from "./ProductListDrawer";
import ProductSearch from "./ProductSearch";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loadingStyle: {
    display: "block",
    margin: "10% auto",
  },
  backgroundStyle: {
    backgroundColor: "#fafafa",
  },
}));

function ProductList() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const [categories, setCategory] = useState("");

  useEffect(() => {
    if (categories === "") {
      Axios.get(`http://localhost:4000/api/list`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Axios.get(`http://localhost:4000/api/list?category=${categories}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return setData([]);
  }, [categories]);

  const productList = data.map((obj) => {
    return (
      <Grid key={obj._id} item xs={12} sm={6} md={4}>
        <ProductItem data={obj}></ProductItem>
      </Grid>
    );
  });

  function filtering(e) {
    setCategory(e.target.value);
    setLoading(true);
  }

  return (
    <div className={classes.backgroundStyle}>
      {/* inputs */}
      <ProductListDrawer />
      <ProductSearch/>
      <input
        type="radio"
        name="category"
        id="cate1"
        value="웹개발"
        onClick={filtering}
      />
      <label htmlFor="cate1">웹개발</label>
      <input
        type="radio"
        name="category"
        id="cate2"
        value="앱개발"
        onClick={filtering}
      />
      <label htmlFor="cate2">앱개발</label>
      <br />
      {isLoading ? (
        <CircularProgress className={classes.loadingStyle} />
      ) : (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={6}>
            {productList}
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default ProductList;
