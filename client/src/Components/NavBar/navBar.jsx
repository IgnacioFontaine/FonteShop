import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import store from '../../Redux/store';
import { auth } from '../../firebase';
import { useDispatch} from 'react-redux';
import { removeStore } from '../../Redux/actions';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const subscribe_store = store.getState()
  const user_store = subscribe_store?.products.user;

  const products_favorites = useSelector((state) => state.products.like_products);
  const products_shop = useSelector((state) => state.products.shop_product);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user_store ?
        (<div>
          <MenuItem  >{user_store}</MenuItem>
          <MenuItem onClick={handleOut} >Sing Out</MenuItem>
        </div>
        )
        :
        (<MenuItem onClick={()=>(navigate("/singIn"),handleMenuClose)} >Sing In</MenuItem>)}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show purchease products" color="inherit">
          <Badge badgeContent={products_shop?.length} color="error">
            <ShoppingCartIcon onClick={()=>navigate("/purchease")}/>
          </Badge>
        </IconButton>
        <p>Carrrito</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show favorite products"
          color="inherit"
        >
          <Badge badgeContent={products_favorites?.length} color="error">
            <FavoriteIcon onClick={()=>navigate("/favorites")} />
          </Badge>
        </IconButton>
        <p>Me Gusta</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {user_store ? (
          <div>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleOut}
            >
            </IconButton>
            <p>{user_store}</p>
          </div>
        ) : (
            <div>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={()=>navigate("/singIn")}
            >
              <AccountCircle />
            </IconButton>
            <p>Perfil</p>
          </div>
        )}
      </MenuItem>
    </Menu>
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleOut() {
    if (user_store) {
      auth.signOut();
      dispatch(removeStore())
      navigate("/")
    }
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:"#FFA657", }} >
      <AppBar position="static" sx={{ backgroundColor:"#FFA657"}}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block', cursor: "pointer" } }}
            fontFamily={"fantasy"}
            onClick={()=>navigate("/")}
          >
            FonteShop
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show purchease_products" color="inherit">
              <Badge badgeContent={products_shop?.length} color="error">
                <ShoppingCartIcon onClick={()=>navigate("/purchease")}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show favorite products"
              color="inherit"
            >
              <Badge badgeContent={products_favorites?.length} color="error">
                <FavoriteIcon onClick={()=>navigate("/favorites")} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
