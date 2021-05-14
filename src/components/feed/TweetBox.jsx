import { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
import firebase from "firebase";

import "./TweetBox.css";
const TweetBox = () => {
  const [description, setdescription] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const assertPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      avatar: "https://avatars.githubusercontent.com/u/45279411?v=4",
      displayName: "Pratap Tyagi",
      username: "pratapTyagi",
      verified: false,
      text: description,
      image: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setdescription("");
    setimageUrl("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://avatars.githubusercontent.com/u/45279411?v=4" />
          <input
            placeholder="What's happening?"
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <input
          className="tweetBox_imageInput"
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setimageUrl(e.target.value)}
        />
        <Button className="tweetBox_assert" type="submit" onClick={assertPost}>
          Assert
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
