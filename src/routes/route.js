import express from "express";
import employeeController from "./../controllers/employeeController";

const router = express.Router();

const initRountes = (app) => {
  // app.METHOD(PATH, HANDLER);
  // router.get("/homes", employeeController.getEmployee);
  router.get("/get-employee", employeeController.getAllEmployee);
  router.post("/post-employee", employeeController.createNewEmployee);


  // router.get("/about", (req, res) => {
  //   res.send("Hello World! Tran duc Linh");
  // });
  return app.use("/", router);
};

module.exports = initRountes;
