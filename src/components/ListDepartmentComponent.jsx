import React, {Component} from 'react'
import DepartmentService from '../services/DepartmentService'


class ListDepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            departments: []
        }
        this.addDepartment = this.addDepartment.bind(this);
        this.editDepartment = this.editDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
    }

    viewDepartment(id) {
        this.props.history.push('/view-department/' + id);
    }

    editDepartment(id) {
        this.props.history.push('/add-department/' + id);
    }

    deleteDepartment(id) {
        DepartmentService.deleteDepartment(id).then(res => {
            this.setState({departments: this.state.departments.filter(department => department.departmentId !== id)});
        });
    }

    componentDidMount() {
        DepartmentService.getDepartments().then((res) => {

            this.setState({departments: res.data});
        });
    }

    addDepartment() {
        this.props.history.push('/add-department/_add');
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h2 className="text-center" style={{marginTop: "40px"}}>Departments List</h2>
                </div>
                <button className="btn btn-primary" onClick={this.addDepartment}> Add Department</button>
                <br></br>
                <hr style={{height: "10px solid"}}/>

                <br/>
                {
                    this.state.departments.map(
                        department =>
                            <div>
                                <div className="card">
                                    <div className="card-body" style={{display: "flex"}}>
                                        <div style={{flex: "1", 'flex-grow': "6"}}>
                                            <h5 className="card-title">{department.departmentName}</h5>
                                            <p className="card-text">Id: {department.departmentId}</p>
                                        </div>
                                        <div style={{flex: "1", 'flex-grow': "6"}}>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.viewDepartment(department.departmentId)}
                                                    className="btn btn-outline-primary">Details
                                            </button>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.editDepartment(department.departmentId)}
                                                    className="btn btn-outline-secondary">Update Info
                                            </button>
                                            <button style={{marginLeft: "10px", width: "150px"}}
                                                    onClick={() => this.deleteDepartment(department.departmentId)}
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

export default ListDepartmentComponent