import { Router } from "express";
const router = Router(); // Accessing the Router() object from express. It allows you to handle various requests

// Importing the four CRUD functions
import {
  getDepartment,
  getDepartments,
  createDepartment,
  /*updateInstitution,
  deleteInstitution,*/
} from "../controllers/departments.js";

router.route("/")
    .get(getDepartments)
    .post(createDepartment)

router.route("/:id")
    .get(getDepartment)
    /*.put(updateInstitution)
    .delete(deleteInstitution)*/

export default router; // You do not need to enclose router in curly braces