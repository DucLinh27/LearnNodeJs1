import db from "../models";

let getAllEmployeeService = () => {
    return new Promise(async (resolve, reject) => {
        try {
           let employee = await db.Employee.findAll({
            raw: true,
           })
           resolve(employee);
        } catch (e) {
            reject(e);
        }
    });
}

let getEmployeeByIdService = (employeeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await db.Employee.findOne({
                where: {id: employeeId},
                raw: true,
            });

            if (employee) {
                resolve(employee);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
}

let createNewEmployeeService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('Creating employee', data);
            await db.Employee.create({
                firstName : data.firstName,
                lastName : data.lastName,
                email : data.email,
                phoneNumber : data.phoneNumber,
                roleId : data.roleId,
            });
            resolve("create new employee successively!")
            
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getAllEmployeeService: getAllEmployeeService,
    getEmployeeByIdService: getEmployeeByIdService,
    createNewEmployeeService: createNewEmployeeService,
}
