import { makeStyles, Drawer, Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
} from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { AppBar, Toolbar } from '@material-ui/core';
import { format } from 'date-fns'




const drawerWidth = 240
const useStyles = makeStyles((theme)=>(
    {
        page:{
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        root:{
            display: "flex",
        },
        active: {
            background: "#f4f4f4"
        },
        title:{
            padding: theme.spacing(2)
        },
        appBar:{
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow: 1
        },
        avatar:{
            marginLeft: theme.spacing(2),
        }
    }
))

const Layout =({children})=> {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color='secondary'/>,
            path: "/"
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutlineOutlined color='secondary'/>,
            path: "/create"
        },

    ]

    return (
        <div className={classes.root}>
            <AppBar
            className={classes.appBar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format( new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Shamim
                    </Typography>
                    <Avatar className={classes.avatar} src='/dp.jpg' />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant ='h5' className={classes.title} variant= "h5">
                        Ninja Notes
                    </Typography>

                    <List>
                        {
                            menuItems.map( item => (
                                <ListItem
                                button
                                key = {item.text}
                                className={ location.pathname === item.path ? classes.active : null}
                                onClick= { e => history.push(item.path)}
                                >
                                    
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
export default Layout