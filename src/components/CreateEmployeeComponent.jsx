import React, {Component} from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            middleName: '',
            lastName: '',
            address: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    middleName: employee.middleName,
                    lastName: employee.lastName,
                    address: employee.address
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            address: this.state.address
        };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeMiddleNameHandler = (event) => {
        this.setState({middleName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h2 className="text-center">Add Employee</h2>
        } else {
            return <h2 className="text-center">Update Employee</h2>
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h2 className="text-center" style={{marginTop: "40px"}}>{
                            this.getTitle()
                        }</h2>
                        <div style={{marginTop: "40px"}} className="card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label style={{marginTop: "10px"}}> First Name: </label>
                                        <input style={{marginTop: "10px"}} placeholder="First Name" name="firstName"
                                               className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{marginTop: "10px"}}> Middle Name: </label>
                                        <input style={{marginTop: "10px"}} placeholder="Middle Name" name="middleName"
                                               className="form-control"
                                               value={this.state.middleName} onChange={this.changeMiddleNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{marginTop: "10px"}}> Last Name: </label>
                                        <input style={{marginTop: "10px"}} placeholder="Last Name" name="lastName"
                                               className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{marginTop: "10px"}}> Address: </label>
                                        <input style={{marginTop: "10px"}} placeholder="Address" name="address"
                                               className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                    <div className="col text-center">
                                        <button style={{marginTop: "40px", marginBottom: "20px"}}
                                                className="btn btn-primary" onClick={this.saveOrUpdateEmployee}>Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent