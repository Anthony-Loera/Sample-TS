import { useParams } from "react-router-dom";
import Button from "../styled/Button";
import Content from "../styled/Content";
import Ripples from "react-ripples";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  posts: Post[];
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Profile(props: Props) {
  const pathParams = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<User | null>(null);
  const userPosts = props.posts.filter((post) => {
    return Number(pathParams.id) === post.userId;
  });

  const handleClick = (id: number) => () => {
    navigate(`/posts/` + id);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + pathParams?.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathParams]);

  return (
    <div>
      <Content className="container">
        <h2 className="profile">{profile?.name}</h2>
        <h2 className="profile">{profile?.username}</h2>
        <h2 className="profile">{profile?.email}</h2>
        {userPosts.map((post) => {
          return (
            <div key={post.id}>
              <Ripples>
                <Button onClick={handleClick(post.id)}>
                  <h3>{post.title}</h3>
                </Button>
              </Ripples>
              <div>{post.body}</div>
            </div>
          );
        })}
      </Content>
    </div>
  );
}
