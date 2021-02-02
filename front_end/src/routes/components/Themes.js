import { responsiveFontSizes } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

let lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#F8F9FA",
      main: "#E9ECEF",
      dark: "#DEE2E6",
    },
    secondary: {
      light: "#292929",
      main: "#121212",
      dark: "#000000",
    },
    text: {
      primary: "#0B090A",
      secondary: "#0645AD",
    },
  },
  overrides: {
    MuiPopover: {
      paper: {
        backgroundColor: "#E9ECEF"
      },
    },
    MuiCheckbox: {
      root: {
        color: "#000000"
      },
    },
  },
});

let darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#292929",
      main: "#121212",
      dark: "#000000",
    },
    secondary: {
      light: "#F8F9FA",
      main: "#E9ECEF",
      dark: "#DEE2E6",
    },
    text: {
      primary: "#fff",
      secondary: "#0645AD",
    }
  },
  overrides: {
    MuiPopover: {
      paper: {
        backgroundColor: "#292929"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#121212"
      }
    },
    MuiIconButton: {
      root: {
        color: "#fff"
      }
    },
    MuiCheckbox: {
      root: {
        color: "#fff"
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: "#121212",
        color: "#fff"
      },
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme, {
  factor: 10
});
darkTheme = responsiveFontSizes(darkTheme, {
  factor: 10
});

export { lightTheme, darkTheme };