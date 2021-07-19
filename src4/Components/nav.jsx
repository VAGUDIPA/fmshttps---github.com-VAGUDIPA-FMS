import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <AppBar color="secondary" >
            <Toolbar>
                <Box borderRadius={16} border={1} p={1}>
                    <Typography variant="h6">Pizza App</Typography>
                </Box>
                <Button color="inherit" component={NavLink} to="/home">
                    Home
                 </Button>
                <Button color="inherit" component={NavLink} to="/pizzas">
                    Pizza
                </Button>
                <Button color="inherit" component={NavLink} to="/pizzalist">
                    PizzaList
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;