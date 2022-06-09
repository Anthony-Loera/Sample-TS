import Ripples from "react-ripples";
import Button from "../styled/Button";
import Container from "../styled/container";
import Content from "../styled/Content";
import Listitem from "../styled/Listitem";

interface User {
  id: number;
  name: string;
}

interface Props {
  handleClick(id: number): () => void;
  users: User[];
}

export default function Menu(props: Props) {
  return (
    <Container>
      <Content>
        {props.users.map((user, index) => {
          return (
            <Listitem>
              <Ripples>
                <Button
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  onClick={props.handleClick(user.id)}
                >
                  {user.name}
                </Button>
              </Ripples>
            </Listitem>
          );
        })}
      </Content>
    </Container>
  );
}
