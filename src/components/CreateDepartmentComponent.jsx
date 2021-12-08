import React, {Component} from 'react'
import DepartmentService from '../services/DepartmentService';

class CreateDepartmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            departmentName: ''
        }
        this.changeDepartmentNameHandler = this.changeDepartmentNameHandler.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            DepartmentService.getDepartmentById(this.state.id).then((res) => {
                let department = res.data;
                this.setState({
                    departmentName: department.departmentName
                });
            });
        }
    }

    saveOrUpdateDepartment = (e) => {
        e.preventDefault();
        let department = {departmentName: this.state.departmentName};
        console.log('department => ' + JSON.stringify(department));

        // step 5
        if (this.state.id === '_add') {
            DepartmentService.createDepartment(department).then(res => {
                this.props.history.push('/departments');
            });
        } else {
            DepartmentService.updateDepartment(department, this.state.id).then(res => {
                this.props.history.push('/departments');
            });
        }
    }

    changeDepartmentNameHandler = (event) => {
        this.setState({departmentName: event.target.value});
    }

    cancel() {
        this.props.history.push('/departments');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h2 className="text-center">Add Department</h2>
        } else {
            return <h2 className="text-center">Update Department</h2>
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
                                        <label style={{marginTop: "10px"}}> Department Name: </label>
                                        <input style={{marginTop: "10px"}} placeholder="Department Name"
                                               name="departmentName" className="form-control"
                                               value={this.state.departmentName}
                                               onChange={this.changeDepartmentNameHandler}/>
                                    </div>
                                    <div className="col text-center">
                                        <button style={{marginTop: "40px", marginBottom: "20px"}}
                                                className="btn btn-primary" onClick={this.saveOrUpdateDepartment}>Submit
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

export default CreateDepartmentComponent