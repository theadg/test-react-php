import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // using PHP API

    axios.post('http://localhost:80/api/user/save', inputs).then((response) => {
      console.log(response.data);
      navigate('/');
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      <h1>Create Users</h1>

      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="name">Name:</label>
              </th>
              <td>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>
                <label htmlFor="email">Email:</label>
              </th>
              <td>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>
                {' '}
                <label htmlFor="number">Number:</label>
              </th>
              <td>
                <input
                  type="number"
                  name="number"
                  id="number"
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
