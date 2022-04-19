import React from "react";
import "./post.css";

const Post = ({ author, created_at, num_comments, title, points, url }) => (
  <li className="post">
    <div className="description">
      <a href={url} className="smTitle">
        {title}
      </a>
      <span className="text">{`${points} points`}</span>
      <span className="comments">{`${num_comments} comments`}</span>
      <span className="date">
        {created_at ? new Date(created_at).toLocaleDateString() : "No date"}
      </span>
      <span className="author">{author}</span>
    </div>
  </li>
);

Post.defaultProps = {
  author: "Yauhen",
  created_at: "",
  num_comments: 0,
  title: "Here should be a title",
  points: 0,
  url: "#",
};

export default Post;
