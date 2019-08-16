import React from "react";
import Page from "../layouts/main";
import { NextPage } from "next";
import { List, ListItem, Typography } from "@material-ui/core";
import reqMap from "../resources/postContext";

export interface IPost {
  attributes: { title: string; date: Date; layout: string; summary: string };
  html: string;
  body: string;
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
      <Typography variant="h5">{post.attributes.summary}</Typography>
      <Typography variant="subtitle1">{post.attributes.date}</Typography>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Page>
  );
};

Post.getInitialProps = async ({ query }) => {
  // console.log("**** req:", params);
  const { category, name }: { name?: string; category?: string } = query;
  console.log("post, category", name, category);
  const post: IPost = reqMap(`./${category}/${name}`);
  return { post };
};

export default Post;
