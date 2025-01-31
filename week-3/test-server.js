const { z } = require("zod"); // Import Zod
const express = require("express"); // Import Express
const app = express(); // Initialize Express app
const port = 2000;

app.use(express.json()); // Middleware to parse JSON request body

// Define Zod schema for user validation
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(), // Validate email format
  password: z.string().min(6) // Ensure password has a minimum length of 6
});

// Route for signup
app.post("/signup", (req, res) => {
  try {
    // Validate request body using Zod
    const validatedUser = userSchema.parse(req.body);

    // At this point, `validatedUser` contains the validated data
    // Proceed with your business logic
    res.status(200).json({
      message: "Signup successful",
      user: validatedUser
    });
  } catch (error) {
    // If validation fails, Zod throws an error
    res.status(400).json({
      message: "Validation failed",
      error: error.errors // Provide detailed validation errors
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
