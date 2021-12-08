import React, {Component} from 'react'
import '../App.css'

class SidebarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="border-end bg-white" id="sidebar-wrapper" style={{width: "200px", marginLeft: "5px"}}>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action list-group-item-light p-3"
                       href="/">Dashboard Home</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3"
                       href="/employees">Employee List</a>
                    <a className="list-group-item list-group-item-action list-group-item-light p-3"
                       href="/departments">Department List</a>
                </div>
            </div>
        )
    }
}

export default SidebarComponent