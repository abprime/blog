import React from "react";
import Page from "../layouts/main";
import { NextPage } from "next";
import { List, ListItem, Typography } from "@material-ui/core";

var req = require.context("../content", true, /\.md$/);

export interface IPost {
  attributes: {
    title: string;
    date: Date;
    layout: string;
  };
  body: string;
  html: string;
}

interface Props {
  post: IPost;
}

const Post: NextPage<Props> = ({ post }) => {
  //   console.log("posts", posts);
  return (
    <Page>
      <div>this is coding page</div>
      <Typography variant="h2">{post.attributes.title}</Typography>
      <Typography variant="subtitle1">{post.attributes.date}</Typography>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Page>
  );
};

Post.getInitialProps = async params => {
  // console.log("**** req:", params);
  const {
    query: { id }
  } = params;
  const path: string = id as string;
  const post: IPost = await req(path);
  // console.log("post", post);
  return { post };
  // return {};
};

export default Post;
