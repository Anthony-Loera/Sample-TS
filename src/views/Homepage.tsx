import { useEffect, useState } from "react";
import Wrapper from "../styled/wrapper";
import "../App.css";
import Drawer from "../components/Drawer";
import Postdata from "../components/PostData";
import UserComments from "../components/Comments";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Homepage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      <Drawer posts={posts} />
      <Postdata posts={posts} />
      <UserComments />
    </Wrapper>
  );
}
