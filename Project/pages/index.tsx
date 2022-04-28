import { GetStaticProps } from "next";
import axios from "axios";
import Head from "next/head";
import ItemList from "../component/itemList";

const Index = ({ list }) => {
  return (
    <div>
      <Head>
        <title>Next</title>
      </Head>
      <p>Hello Next.js</p>

      <ItemList data={list} />
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const response = await axios.get(API_URL);
  const data = response.data;

  return {
    props: {
      list: data,
    },
  };
};
