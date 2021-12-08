import axios from 'axios';

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/api/v1";

class DepartmentService {

    getDepartments() {
        return axios.get(DEPARTMENT_API_BASE_URL + '/' + 'departments');
    }

    createDepartment(department) {
        return axios.post(DEPARTMENT_API_BASE_URL + '/department/', department);
    }

    getDepartmentById(departmentId) {
        return axios.get(DEPARTMENT_API_BASE_URL + '/department/' + departmentId);
    }

    updateDepartment(department, departmentId) {
        return axios.put(DEPARTMENT_API_BASE_URL + '/department/' + departmentId, department);
    }

    deleteDepartment(departmentId) {
        return axios.delete(DEPARTMENT_API_BASE_URL + '/department/' + departmentId);
    }
}

export default new DepartmentService()