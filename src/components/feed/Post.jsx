import { forwardRef } from "react";

import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

import "./Post.css";
const Post = forwardRef(
  ({ avatar, displayName, username, verified, text, image }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUser className="post_badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="Post Image" />

          <div className="post_footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
