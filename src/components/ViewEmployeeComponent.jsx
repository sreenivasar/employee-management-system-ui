import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }

    viewAllEmployees() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "40px"}}>Employee Details</h2>
                <br></br>
                <div className="card">
                    <div className="card-header">{this.state.employee.firstName}</div>
                    <div className="card-body">
                        <p className="card-text">First Name: {this.state.employee.firstName}</p>
                        <p className="card-text">Middle Name: {this.state.employee.middleName}</p>
                        <p className="card-text">Last Name: {this.state.employee.lastName}</p>
                        <p className="card-text">Address: {this.state.employee.address}</p>
                    </div>
                </div>
                <br/>
                <div>
                    <button style={{marginLeft: "auto", marginRight: "0px"}} onClick={() => this.viewAllEmployees()}
                            className="btn btn-primary">Back to Employee List
                    </button>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent