import React from "react";
import {
  List,
  ListItem,
  Typography,
  Link,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button
} from "@material-ui/core";
import NextLink from "next/link";
import Page from "../layouts/main";
import { IPost } from "./post";
import reqMap from "../resources/postContext";
import { NextPage } from "next";
import { string } from "prop-types";

interface Props {
  postCategory: string;
  posts: IPost[];
}

const Posts: NextPage<Props> = ({ postCategory, posts }) => {
  return (
    <Page>
      <Typography variant="h2">{`${postCategory.toUpperCase()} Post List`}</Typography>
      <List>
        {posts.map(post => (
          <ListItem key={post.attributes.title}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.attributes.title}
                </Typography>
                <Typography color="textSecondary">
                  {post.attributes.date}
                </Typography>
              </CardContent>
              <CardActions>
                <NextLink
                  href={`${postCategory}/${post.attributes.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                >
                  <Button size="small">Read More</Button>
                </NextLink>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

Posts.getInitialProps = async ({ query }) => {
  const { postCategory }: { postCategory?: string } = query;
  console.log(reqMap.keys());
  var posts: IPost[] = reqMap
    .keys()
    .filter(p => p.indexOf(postCategory) > -1)
    .map(postName => {
      const post: IPost = reqMap(postName);
      console.log(post);
      return post;
    });
  return { postCategory, posts };
};

export default Posts;
