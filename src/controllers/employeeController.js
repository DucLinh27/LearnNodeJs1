import employeeService from "../services/employeeService";

let getAllEmployee = async (req, res) => {
  let employee = await employeeService.getAllEmployeeService();

  console.log(employee)
  return res.status(200).json({employee: employee});
};

let createNewEmployee = async (req, res) => {
    console.log(req.body)
    let employee = await employeeService.createNewEmployeeService(req.body);

    return res.send("sucessfully created employee");
};

module.exports = {
    getAllEmployee: getAllEmployee,
    createNewEmployee: createNewEmployee,
};
