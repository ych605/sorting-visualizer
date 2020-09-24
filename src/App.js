import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SortingSection from './components/SortingSection';
import ConfigurationPanel from './components/ConfigurationPanel';

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    textAlign: 'center',
    height: '100vh',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    backgroundImage: 'linear-gradient(45deg, #142129, #3a404a)'
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SortingSection />
      <ConfigurationPanel />
    </div>
  );
};