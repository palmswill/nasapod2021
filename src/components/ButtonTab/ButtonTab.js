import React from "react";
import { Menu, Button, Popup } from "semantic-ui-react";
import Heart from "../heartIcon/Heart";
import { useHistory } from "react-router";

const ButtonTab = ({ onHeartClick, heartLiked, closeButton, date }) => {
  const history = useHistory();

  return (
    <div className="button-tab">
      <Menu borderless className={"button-menu"}>
        <Menu.Item>
          <h5 className="secondary like-section">
            <Heart
              size={"30px"}
              liked={heartLiked}
              // if liked, click to filter item out of likedlist, if not liked, click to add in the likedlist
              onClick={onHeartClick}
            />
          </h5>
        </Menu.Item>
        <Menu.Item>
          {closeButton ? (
            <Popup
            position={"top center"}
              content={window.location.href}
              on="click"
              trigger={<Button content="Share"className="close-button" basic inverted />}
              style={{maxWidth:"90vw",wordWrap:"break-word"}}
            />
          ) : (
            ""
          )}
        </Menu.Item>

        <Menu.Item position="right">
          {closeButton ? (
            <Button
              className="close-button"
              basic
              inverted
              onClick={() => history.push(process.env.PUBLIC_URL)}
            >
              close
            </Button>
          ) : (
            <Button
              className="close-button"
              basic
              inverted
              onClick={() => history.push(`${process.env.PUBLIC_URL}/${date}`)}
            >
              details
            </Button>
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ButtonTab;
