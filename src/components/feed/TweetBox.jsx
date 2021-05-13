import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://avatars.githubusercontent.com/u/45279411?v=4" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox_imageInput"
          type="text"
          placeholder="Enter image URL"
        />
        <Button className="tweetBox_assert">Assert</Button>
      </form>
    </div>
  );
};

export default TweetBox;
