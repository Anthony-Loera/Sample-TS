import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../styled/Image";
import Userinfo from "../styled/Userinfo";
import { Post } from "../views/Homepage";

interface Props {
  posts: Post[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Postdata(props: Props) {
  const [author, setAuthor] = useState<User | null>(null);
  const pathParams = useParams<{ id: string }>();
  const postdata = props.posts.find(
    (data) => data.id === Number(pathParams.id)
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + postdata?.userId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAuthor(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postdata]);

  return (
    <div className="stuff">
      <Image alt="Random" src="https://picsum.photos/400/500" />
      <h3>{postdata?.title}</h3>
      <Userinfo>{postdata?.body}</Userinfo>
      <Link to={"/users/" + author?.id}>Author: {author?.name} </Link>
    </div>
  );
}
