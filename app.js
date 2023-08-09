// Import the Express module
import express from 'express';

// Import the index routes module
import indexRoutes from './routes/index.js';
import institutionRoutes from "./routes/institution.js";
import departmentRoutes from "./routes/department.js";

// Create an Express application
const app = express();

app.use(express.urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data
app.use(express.json()); // To parse the incoming requests with JSON payloads. For example, REST API requests

// Use the routes module
app.use('/', indexRoutes);
app.use("/api/institutions", institutionRoutes);
app.use("/api/departments", departmentRoutes);


// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

// Export the Express application. Other modules may use it. For example, API testing
export default app;