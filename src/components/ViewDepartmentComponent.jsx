import React, {Component} from 'react'
import DepartmentService from '../services/DepartmentService'

class ViewDepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            department: {}
        }
    }

    componentDidMount() {
        DepartmentService.getDepartmentById(this.state.id).then(res => {
            this.setState({department: res.data});
        })
    }

    viewAllDepartments() {
        this.props.history.push('/departments');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "40px"}}>Department Details</h2>
                <br></br>
                <div className="card">
                    <div className="card-header">{this.state.department.departmentName}</div>
                    <div className="card-body">
                        <p className="card-text">Department Name: {this.state.department.departmentName}</p>
                        <p className="card-text">Department ID: {this.state.department.departmentId}</p>
                    </div>
                </div>
                <br/>
                <div>
                    <button style={{marginLeft: "auto", marginRight: "0px"}} onClick={() => this.viewAllDepartments()}
                            className="btn btn-primary">Back to Department List
                    </button>
                </div>
            </div>
        )
    }
}

export default ViewDepartmentComponent