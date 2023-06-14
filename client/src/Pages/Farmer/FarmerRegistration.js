import React, { useState } from "react";
import { Box, Paper, Typography, Tab, Tabs } from "@mui/material";
import Login from "../../Components/FarmerLogin";
import Signup from "../../Components/FarmerSignup";

const FarmerRegistration = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = { width: "auto", margin: "5px auto" };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div style={paperStyle}>
      <Tabs
        TabIndicatorProps={{
          style: {
            background: "#1bbd7e",
            backgroundColor: "white",
          },
        }}
        sx={{
          marginX: "auto",
          width: { xs: "100%", sm: "35%", md: "25%" },
          color: "black",
        }}
        value={value}
        indicatorColor="secondary"
        textColor="white"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          label="Sign In"
          sx={{
            width: "50%",
            fontWeight: "",
            fontSize: "15px",
            "&:hover": { backgroundColor: "white", color: "#1bbd7e" },
            "&.Mui-selected": {
              color: "#1bbd7e",
              fontWeight: "bold",
              fontSize: "17px",
            },
          }}
        />

        <Tab
          label="Sign Up"
          sx={{
            width: "50%",
            fontWeight: "",
            fontSize: "15px",
            "&:hover": { backgroundColor: "white", color: "#1bbd7e" },
            "&.Mui-selected": {
              color: "#1bbd7e",
              fontWeight: "bold",
              fontSize: "17px",
            },
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </div>
  );
};

export default FarmerRegistration;
