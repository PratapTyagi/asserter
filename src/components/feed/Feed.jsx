import TweetBox from "./TweetBox";

import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />
    </div>
  );
};

export default Feed;
