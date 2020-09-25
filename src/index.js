import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Choice from './components/Choice';
import Covid from './components/Covid';
import Flag from './components/Flag';
import Global from './components/Global';
import { getAll, getFlag, getCountriesByRegion } from './services';
import './index.css'
import './queries.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Form from './components/Form';
import AllInformation from './components/AllInformation';

const App = () => {

  const [info,setInfo] = useState([]);
  const [infoAll,setInfoAll] = useState([])
  const [flag,setFlag] = useState([]);
  const [countries,setCountries] = useState([]); // Niz svih drzava
  const [region,setRegion] = useState(undefined);
  const [filter,setFilter] = useState(''); // u Search Country... filtrira drzave
  const [prikaz,setPrikaz] = useState('') // na klik More info... prikazuje u trecem delu covid-19 informacije
  const [isLoggedIn,setLoggedIn] = useState(false)
  const [global,setGlobal] = useState([]);

  console.log(countries.map(el => el.name));


  useEffect(() => {
    getAll().then(res => {
      setInfo(res.data.Countries);
      setInfoAll(res.data.Countries)

    })
  },[])

  useEffect(() => {
    getFlag().then(res => {
      setFlag(res.data);
      setCountries(res.data)
    })
  },[])

  useEffect(() => {
    let tmp = info.map(el => el.Country)
    setFlag(countries.filter(el => tmp.includes(el.name)))
  },[info])

  useEffect(() => {
    region ? getCountriesByRegion(region).then(res => setFlag(res.data)) 
    : setCountries(countries)
  },[region,countries])
  

  useEffect(() => {
    getAll().then(res => {
        setGlobal(res.data.Global)
    })
  },[])

  return (
    <Router basename='/'>
        
        <AllInformation global={global} />

        <Switch>
          <Route exact path='/login'>
            <Form setLoggedIn={setLoggedIn} countries={countries} />
          </Route>
          <Route path='/show'>

            <Choice setRegion={setRegion} setFilter={setFilter} infoAll={infoAll} flag={flag} setInfo={setInfo} />

            <Flag flag={flag} region={region} filter={filter} info={info} setPrikaz={setPrikaz} />
         
          </Route>
          <Route path="/"> 
        
            {isLoggedIn ? <Redirect to="/show" /> : <Global isLoggedIn={isLoggedIn} />}

          </Route>
        </Switch>

  
    <Covid info={info} prikaz={prikaz} />
  
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);