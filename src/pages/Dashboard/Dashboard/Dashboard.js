import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import ManageAllOreder from '../ManageAllOreder/ManageAllOreder';
import AddService from '../../AddService/AddService';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import UserRoute from '../../Login/UserRoute/UserRoute';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // For Nasted Router
    let { path, url } = useRouteMatch();
    // Use For useFriebase
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <Link to="/"><Button style={{
                textDecoration: 'none', color: 'blue', marginTop: '20px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
            }} color="inherit">Home</Button>
            </Link><br />
            {/* if Admin identify then show their */}
            {
                admin ?
                    <Box>
                        <Link to={`${url}/manageAllOrder`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Manage All Order</Button>
                        </Link><br />

                        <Link to={`${url}/addservice`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Add Service</Button>
                        </Link><br />

                        <Link to={`${url}/makeAdmin`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Make Admin</Button>
                        </Link><br />

                        <Link to={`${url}/manageProduct`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Manage Product</Button>
                        </Link><br />

                    </Box>
                    :
                    <Box>
                        {/* User Panal */}

                        <Link to={`${url}/myOrder`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">My Order</Button>
                        </Link> <br />
                        <Link to={`${url}/payment`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Pay</Button>
                        </Link> <br />
                        <Link to={`${url}/review`}><Button style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }} color="inherit">Review</Button>
                        </Link> <br />
                    </Box>
            }
            <Box>
                <Link to="">
                    <Button
                        style={{
                            textDecoration: 'none', color: 'blue', marginTop: '10px', textAlign: 'left', border: 0, fontSize: '20px', fontWeight: 'bold',
                        }}
                        color="inherit"
                        onClick={logOut}>
                        Logout
                    </Button>
                </Link><br />

            </Box>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOreder />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addservice`}>
                        <AddService />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </AdminRoute>
                    <UserRoute exact path={`${path}/payment`}>
                        <Payment />
                    </UserRoute>
                    <UserRoute exact path={`${path}/myOrder`}>
                        <MyOrder />
                    </UserRoute>
                    <UserRoute exact path={`${path}/review`}>
                        <Review />
                    </UserRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
