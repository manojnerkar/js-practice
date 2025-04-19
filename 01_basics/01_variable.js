

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      background: #f2f2f2;
    }
    form {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      max-width: 500px;
      margin: auto;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.3rem;
    }
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .error {
      color: red;
      font-size: 0.9rem;
    }
    .submit-btn {
      background: #4caf50;
      color: white;
      padding: 0.7rem 1.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .submit-btn:hover {
      background: #45a049;
    }
  </style>
</head>
<body>
  <form id="interactiveForm">
    <h2>Registration Form</h2>

    <div class="form-group">
      <label for="name">Name *</label>
      <input type="text" id="name" required />
      <div class="error" id="nameError"></div>
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" required />
      <div class="error" id="emailError"></div>
    </div>

    <div class="form-group">
      <label>Gender</label>
      <input type="radio" name="gender" value="male" checked /> Male
      <input type="radio" name="gender" value="female" /> Female
    </div>

    <div class="form-group">
      <label>Interests</label>
      <input type="checkbox" name="interest" value="coding" /> Coding
      <input type="checkbox" name="interest" value="music" /> Music
      <input type="checkbox" name="interest" value="sports" /> Sports
    </div>

    <div class="form-group">
      <label for="country">Country</label>
      <select id="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </select>
    </div>

    <button type="submit" class="submit-btn">Submit</button>
  </form>

  <script>
    const form = document.getElementById('interactiveForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');

      let valid = true;

      // Name validation
      if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters.";
        valid = false;
      } else {
        nameError.textContent = "";
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
      } else {
        emailError.textContent = "";
      }

      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  </script>
</body>
</html>
