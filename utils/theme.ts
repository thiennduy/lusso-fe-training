import { createTheme, } from "@mui/material/styles";


export const theme = createTheme({
  typography: {
    fontSize: 12
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        }
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small"
      }
    },
    MuiSelect: {
      defaultProps: {
        size: "small"
      }
    },
    MuiChip: {
      defaultProps: {
        size: 'small'
      }
    }
  },
});
