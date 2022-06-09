import Wrapper from "../styled/wrapper";
import "../App.css";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Userprofile() {
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
    <div>
      <Wrapper>
        <Profile posts={posts} />
      </Wrapper>
    </div>
  );
}
