import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MenuIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
  <>
        <style>
        {`
        .navigate {
          color: green;
          text-decoration: none;
        }
        `}
      </style>
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',}}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2,}}
            aria-controls={open ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>
              <img src="https://cdn-icons-png.flaticon.com/512/55/55003.png" style={{width:"16px"}}></img>
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
        <a href="/" className="navigate">HOME</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="/discography" className="navigate">DISCOGRAPHY</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="/notice" className="navigate">NOTICE</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="/schedule" className="navigate">SCHEDULE</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="/contact" className="navigate">CONTACT</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="/about" className="navigate">ABOUT</a>
        </MenuItem>
      </Menu>
    </React.Fragment>
    </>
  );
}
export default MenuIcon;
