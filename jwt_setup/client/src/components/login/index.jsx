import {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform signup logic here using the form data
        console.log(formData);
        // make an axios request to the server, to make a new user in the database.
       let response = await axios({
            method: "POST",
            url: "/users/login",
            data: formData
        })

        console.log(response);
        const jwtToken = response.data;
        localStorage.setItem('jwt-token', jwtToken);
        // Reset the form
        // setFormData({ username: '', email: '', password: '' });
      };
    
      return (
        <div>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default Login