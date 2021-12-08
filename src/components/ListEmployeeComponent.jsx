import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService'


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id) {
        this.props.history.push('/view-employee/' + id);
    }

    editEmployee(id) {
        this.props.history.push('/add-employee/' + id);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeID !== id)});
        });
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {

            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center" style={{marginTop: "40px"}}>Employees List</h2>
                </div>
                <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                <br></br>
                <hr style={{height: "10px solid"}}/>

                <br/>
                {
                    this.state.employees.map(
                        employee =>
                            <div>
                                <div className="card">
                                    <div className="card-body" style={{display: "flex"}}>
                                        <div style={{flex: "1", 'flex-grow': "6"}}>
                                            <h5 className="card-title">{employee.firstName}</h5>
                                            <p className="card-text">Id: {employee.employeeID}</p>
                                        </div>
                                        <div style={{flex: "1", 'flex-grow': "6"}}>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.viewEmployee(employee.employeeID)}
                                                    className="btn btn-outline-primary">Details
                                            </button>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.editEmployee(employee.employeeID)}
                                                    className="btn btn-outline-secondary">Update Info
                                            </button>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.deleteEmployee(employee.employeeID)}
                                                    className="btn btn-outline-danger">Delete
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <br/>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default ListEmployeeComponent