import { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";

import "./Feed.css";
const Feed = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [posts]);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* Posts */}
      {posts.map(({ id, data }) => (
        <Post
          key={id}
          avatar={data.avatar}
          displayName={data.displayName}
          username={data.username}
          verified={data.verified}
          text={data.text}
          image={data.image}
        />
      ))}
    </div>
  );
};

export default Feed;
