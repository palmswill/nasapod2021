import React from "react";
import { Menu, Button } from "semantic-ui-react";
import Heart from "../heartIcon/Heart";
import { useHistory } from "react-router";

const ButtonTab = ({onHeartClick,heartLiked,closeButton,date}) => {
  const history = useHistory();
  return (
    <div className="button-tab">
      <Menu borderless className={"button-menu"}>
        <Menu.Item>
          <h5 className="secondary like-section">
            <Heart
              size={"50px"}
              liked={heartLiked}
              // if liked, click to filter item out of likedlist, if not liked, click to add in the likedlist
              onClick={onHeartClick}
            />
          </h5>
        </Menu.Item>
        <Menu.Item position="right">
          {closeButton?<Button
            className="close-button"
            basic
            inverted
            onClick={() => history.push(process.env.PUBLIC_URL)}
          >
            close
          </Button>:<Button
            className="close-button"
            basic
            inverted
            onClick={() => history.push(`${process.env.PUBLIC_URL}/${date}`)}
          >
            details
          </Button>}
          
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ButtonTab;
