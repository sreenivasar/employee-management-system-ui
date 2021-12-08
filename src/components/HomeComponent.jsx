import React, {Component} from 'react'
import logo from './../images/employee-management-system.png';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "40px"}}>Dashboard Home</h2>
                <br></br>
                <div className="card">
                    <div style={{display: "flex", flex: "1 1 auto"}}>
                        <div className="img-square-wrapper">
                            <img style={{}} className="img-fluid img-thumbnail" src={logo} alt="Card image cap"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Employee Management System gives the details of the employees and
                                their departments in the Organization</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent