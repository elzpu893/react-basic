import ReactGA from 'react-ga'
// ReactGA.initialize('GA-MEASUREMENT-ID')
ReactGA.pageview(window.location.pathname + window.location.search);

ReactGA.initialize('UA-000000-01', {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});

const componentDidMount = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  