import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CreateUser() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  function getUser() {
    axios.get(`http://localhost:80/api/user/${id}`).then((response) => {
      console.log(response);
      setInputs(response.data[0]);
      console.log(typeof inputs, inputs);
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // using PHP API
    axios
      .put(`http://localhost:80/api/use/${id}/edit`, inputs)
      .then((response) => {
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
      <h1>Edit Users</h1>

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
                  value={inputs.name}
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
                  value={inputs.email}
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
                  value={inputs.mobile}
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
