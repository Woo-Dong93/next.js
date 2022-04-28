import Link from "next/link";

export interface IItem {
  id: number;
  name: string;
}

export interface IProps {
  data: IItem[];
}

const ItemList = ({ data }: IProps) => {
  return (
    <div>
      {data.map((data) => (
        <Link href={`/dynamic_2/${data.id}`} key={data.id}>
          <div key={data.id}>{data.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
