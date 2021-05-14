import TweetBox from "./TweetBox";
import Post from "./Post";

import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Posts */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
