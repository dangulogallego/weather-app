import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington,us',
  'Ciudad de México,mex',
  'Madrid,es',
  'Cali,col',
]

class App extends Component {
    
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer 
              cities={cities}
            />
          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="deatils">
              <ForecastExtendedContainer />
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
