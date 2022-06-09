import { useParams } from "react-router-dom";
import Content from "../styled/Content";
import { useEffect, useState } from "react";
import Userinfo from "../styled/Userinfo";
import Image from "../styled/Image";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function UserComments() {
  const pathParams = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const postComments = data.filter((comment: Comment) => {
          return Number(pathParams.id) === comment.postId;
        });
        setComments(postComments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pathParams]);

  return (
    <div>
      <Content className="container">
        {comments.map((comment) => {
          return (
            <div className="comments" key={comment.id}>
              <Image
                className="commentImage"
                height={50}
                alt="Random"
                src="https://picsum.photos/50/50"
              />
              <div>
                <h3>{comment.name}</h3>
                <Userinfo>{comment.body}</Userinfo>
              </div>
            </div>
          );
        })}
      </Content>
    </div>
  );
}
