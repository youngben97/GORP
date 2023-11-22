import * as React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { AppBar, Box, Button, Typography, Modal, Tab, Tabs } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
  );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

  export default function LogSignModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
      };
    
    return (
        <>
            <Button onClick={handleOpen} sx={{color: 'background.paper'}}>Login/Sign up</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
              <Box sx={style}>  
                <AppBar position="static">
                  <Tabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='inherit' variant='fullWidth' aria-label="login/signup tabs">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <CustomTabPanel value={value} index={0}>
                  <LoginForm />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <SignUpForm />
                </CustomTabPanel>
              </Box>
            </Modal>
        </>
    )
  }