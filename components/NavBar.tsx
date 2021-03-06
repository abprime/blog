import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  makeStyles,
  createStyles,
  Theme,
  IconButton,
  Button,
  Link
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const styles = {
  link: {
    padding: "0 40px"
  }
};

const NavBar = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Blogs
          </Typography>
          <nav>
            <Link
              href="/"
              variant="button"
              color="textPrimary"
              style={styles.link}
            >
              Home
            </Link>
            <Link
              href="/coding"
              variant="button"
              color="textPrimary"
              style={styles.link}
            >
              Coding
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
