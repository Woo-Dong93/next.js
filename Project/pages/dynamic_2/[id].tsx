import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

const Dynamic = ({ item }) => {
  // item 확인
  console.log(item);

  const router = useRouter();

  router.isFallback;

  const moveHome = () => {
    router.push("/");
  };

  return (
    <div>
      {item && (
        <>
          <button onClick={moveHome}>홈으로</button>
          <p>id: {item.id}</p>
          <p>name: {item.name}</p>
        </>
      )}
    </div>
  );
};

export default Dynamic;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "495" } }, { params: { id: "488" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
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
