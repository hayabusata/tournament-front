import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from "@material-ui/core/IconButton";
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import useMedia from "use-media";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    ToolBar: {
        height: "75px",
    },
    Links: {
        height: "100%",
        marginLeft: "auto",
    },
    LinkButton: {
        height: "100%",
        color: "#ffffff",
    },
    DrawerList: {
        width: "200px",
        height: "100%",
        padding: "20px 0 0 0",
    },
    SideBarItem: {
        width: "100%",
        height: "50px",
        padding: "0 0 0 10px",
    },
    ItemLinkButton: {
        display: "block",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        textAlign: "left",
    }
});

type DashboardProps = {
    children?: React.ReactNode;
    title: string;
}

const Dashboard = ({children, title}: DashboardProps): JSX.Element => {
    const styles = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isWide = useMedia({minWidth: "750px"});

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <div>
        <AppBar>
            <Toolbar className={styles.ToolBar}>
                {isWide 
                ? <div className={styles.Links}>
                    <Button href="/" className={styles.LinkButton}>Home</Button> 
                    <Button href="/reagues" className={styles.LinkButton}>Reagues</Button>
                </div>
                : <IconButton color="inherit" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton>
                }
            </Toolbar>
        </AppBar>

        <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
            <List className={styles.DrawerList}>
            <ListItem className={styles.SideBarItem}>
                <Button href="/" className={styles.ItemLinkButton}><HomeIcon /></Button>
            </ListItem>
            <ListItem className={styles.SideBarItem}>
                <Button href="/reagues" className={styles.ItemLinkButton}>Reagues</Button>
            </ListItem>
            </List>
        </Drawer>
        
        <Container>
            <h1>{title}</h1>
            <div>{children}</div>
        </Container>
        </div>
    );
};

export default Dashboard;