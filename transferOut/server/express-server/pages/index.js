import fetch from "isomorphic-unfetch";
import Link from "next/link";
import  React from "react";
import Modal from "../portal/Modal";
import "../public/styles/a.css";
import Login from "./login/login";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import Header from "./components/layout/Header";

const MyGrid = ({ data }) => (
 
  
  <Grid  columns={"100px 1fr 100px"} rows={"minmax(100px,auto) 1fr minmax(100px,auto)"} >
    <Cell width={3}> <Header data={[1,2,3,4]} ></Header></Cell>
    {/* <Modal /> */}
    <Cell>Menu</Cell>
  
  
    <Cell center middle>
    <Grid columns="repeat(auto-fit,minmax(120px,1fr))">
      {data.map(obj =>
      {
        return Object.entries(obj).map(([key, val], i) =>
        { if((key !== "password") && (key !== "passwordsalt"))
        return (
          <Cell  key={i}>
          {key} : {val}
          </Cell>
        );
      });
    })}  </Grid> </Cell>

<Cell>Ads</Cell>

<Cell center middle>Footer</Cell>
  </Grid>
);




const Index = ({ data,log_in }) =><div><MyGrid data={data}></MyGrid></div>;
Index.getInitialProps = async () => {
  const res = await fetch(`https://localhost:3000/users`);
  const loginres = await fetch(`https://localhost:3000/login?name=George&password=password2`);
  const log_in = await loginres.json();
  let data = await res.json()

 

  return {
    log_in,
    data
  };
};
export default Index;

