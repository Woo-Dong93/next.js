import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const Dynamic = ({ item }) => {
  // item 확인
  console.log(item);

  const router = useRouter();

  const moveHome = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={moveHome}>홈으로</button>
      <p>id: {item.id}</p>
      <p>name: {item.name}</p>
    </div>
  );
};

export default Dynamic;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const response = await axios.get(API_URL);
  const data = response.data;

  return {
    props: {
      item: data,
    },
  };
};
