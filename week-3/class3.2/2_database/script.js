document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Dabba")
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   console.log(username,password,email)
    try {
      // Send a POST request to the signup endpoint
      const response = await fetch("http://localhost:2000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  console.log("Messagegaya")
      const data = await response.json();
  
      if (response.ok) {
        // Show success message if signup is successful
        document.getElementById("signup-form").classList.add("hidden");
        document.getElementById("success-message").classList.remove("hidden");
      } else {
        alert(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  });
  