import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import MedicamentosList from './components/medicamentos/MedicamentosList'
import MedicamentosForm from './components/medicamentos/MedicamentosForm';
import {LanguageStore} from './contexts/LanguageContext'
class App extends React.Component {

    render (){
        return (
        <LanguageStore>
        <div className="ui container">
          

            <Router>
                <Menu></Menu>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/medicamentos" component={MedicamentosList}></Route>
                <Route exact path="/medicamentos/add" component={MedicamentosForm}></Route>
                <Route exact path="/medicamentos/:id/edit" component={MedicamentosForm}></Route>
            </Router>
        </div>
        </LanguageStore>
        )
    }
}

export default App;


