import React from "react";
import { List, ListItem, Typography, Link } from "@material-ui/core";
import NextLink from "next/link";
import Page from "../layouts/main";

const Coding = ({ posts }) => {
  return (
    <Page>
      <Typography variant="h2">Coding Post list..</Typography>
      <List>
        {posts.map(post => (
          <ListItem key={post}>
            <NextLink href={`${post}`}>
              <Link variant="h4">{post}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Page>
  );
};

Coding.getInitialProps = ({ query }) => {
  const { posts } = query;
  return { posts };
};

export default Coding;
