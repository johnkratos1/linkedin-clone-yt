import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import Post from "./Post";
import { db, auth } from "./firebase";
import {
  onSnapshot,
  collection,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
// import firebase from './firebase';

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    console.log(input);
    // db.collection('posts').add({
    //     name: 'John Ayomide',
    //     description: 'This is a test',
    //     message: input,
    //     photoUrl: '',
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // })

    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "This is a test",
      message: input,
      photoUrl: user.photoUrl || "",
      // timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('')
  };
//   const handlePosts = () => {
//     const docRef = doc(db, "posts");
//     const payload = {
//       name: "John Ayomide",
//       description: "This is a test",
//       message: input,
//       photoUrl: "",
//       timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     };
//     setDoc(docRef, payload);
//   };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#e7a33e" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Post */}

      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>


      {/* <Post name='John Ayomide' description='This is a test' message='this work' /> */}
    </div>
  );
}

export default Feed;
