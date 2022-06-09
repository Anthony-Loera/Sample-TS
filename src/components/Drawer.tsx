import Ripples from "react-ripples";
import Button from "../styled/Button";
import Listitem from "../styled/Listitem";
import Content from "../styled/Content";
import { Post } from "../views/Homepage";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
}

export default function Drawer(props: Props) {
  const navigate = useNavigate();

  const handleClick = (id: number) => () => {
    const post = props.posts.find((p) => p.id === id);
    console.log(post);
    if (post) {
      navigate(`/posts/` + post.id);
    }
  };

  return (
    <div>
      <Content className="container">
        {props.posts.map((post) => {
          return (
            <Listitem key={post.id}>
              <Ripples>
                <Button onClick={handleClick(post.id)}>{post.title}</Button>
              </Ripples>
            </Listitem>
          );
        })}
      </Content>
    </div>
  );
}
