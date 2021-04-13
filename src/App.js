import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Creates from './pages/Creates'
import Notes from './pages/Notes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#fefefe'
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes/>
            </Route>
            <Route path='/create'>
              <Creates/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
