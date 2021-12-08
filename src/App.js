import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/SidebarComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import HomeComponent from "./components/HomeComponent";
import CreateDepartmentComponent from './components/CreateDepartmentComponent';
import ViewDepartmentComponent from './components/ViewDepartmentComponent';
import ListDepartmentComponent from './components/ListDepartmentComponent';


function App() {
    return (
        <div>
            <HeaderComponent/>
            <div style={{display: "flex"}}>
                <div style={{flex: "1", 'flex-grow': "2"}}>
                    <SidebarComponent/>
                </div>
                <div style={{flex: "1", 'flex-grow': "9",}} id="page-content-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/" exact component={HomeComponent}/>
                            <Route path="/employees" component={ListEmployeeComponent}/>
                            <Route path="/add-employee/:id" component={CreateEmployeeComponent}/>
                            <Route path="/view-employee/:id" component={ViewEmployeeComponent}/>
                            <Route path="/departments" component={ListDepartmentComponent}/>
                            <Route path="/add-department/:id" component={CreateDepartmentComponent}/>
                            <Route path="/view-department/:id" component={ViewDepartmentComponent}/>
                        </Switch>
                    </Router>
                </div>
                <div style={{flex: "1", 'flex-grow': "1"}}/>
            </div>
            <FooterComponent/>

        </div>

    );
}

export default App;