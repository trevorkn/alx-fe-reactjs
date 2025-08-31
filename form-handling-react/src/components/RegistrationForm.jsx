import React , { useState } from 'react'

function RegistrationForm() {
   const [username, setUsername ] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState({});

   const validate = () => {
        const newErrors = {};

        if (!username) {
             newErrors.username = "Name is required";

        }

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }else if (password.length < 6) {
            newErrors.password = "Password must be atleast 6 characters long!";
        }
        return newErrors
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
            } else {
                setErrors({});
                console.log({ username, email, password });
                // Send data to server here
                alert("Form submitted successfully")
                setUsername("");
                setEmail("");
                setPassword("");
                
            }
        };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>Name:</label>
            <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p style={{color: "red"}}> {errors.username}</p>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
               type='email'
               id='email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
               {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        </div>

        <div>
            <label htmlFor='password'>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm