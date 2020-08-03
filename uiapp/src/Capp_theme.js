// 2020, 7/30m
//  @material-ui/core@4.11.0 套件的命名空間不是太直觀，例如 /colors 和 /style 無法引入，只需要引入上層 core/

import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;