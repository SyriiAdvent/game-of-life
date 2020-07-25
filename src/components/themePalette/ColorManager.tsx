import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const ColorManager = (props: { children: import("react").ReactNode; }) => {
  const [darkModeState, setDarkModeState] = useState(false);
  const palletType = darkModeState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });

  const handleThemeChange = () => {
    setDarkModeState(!darkModeState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      {props.children}
    </ThemeProvider>
  )
}

export default ColorManager