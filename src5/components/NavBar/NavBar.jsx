import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.png';
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Button type="button" component={Link} to="/">
            <Typography variant="h6" className={classes.title}>
              <img
                src={logo}
                alt="E-SHOP"
                height="25px"
                className={classes.image}
              />
              E-SHOP
            </Typography>
          </Button>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
