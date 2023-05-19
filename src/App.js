import './App.css';
import Axios from "axios";
import { useState, useEffect } from 'react';
function App() {


  const [data, setData] = useState("");
 
  const [searchFilter, setSearchFilter] = useState("");

  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {

        const getAllData = async () => {

            await Axios.get("https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json").then((response) => {
                setData(response.data)
            })
        }
        getAllData()


    }, []);

    const handleChange = (event) => {
      setSearchData(event.target.value)

  }
    
  const handleSearchClick = () => {

    
    
    const searchDataEmployee = data.employees.filter((items) => 
      items.id && items.id == searchData
      || items.name && items.name.toLowerCase() === searchData.toLowerCase()
      || items.designation && items.designation.toLowerCase() === searchData.toLowerCase()
    )

    setSearchFilter(searchDataEmployee)
    setSearch(true)
  }
  return (
    <div className='employee_section'>
      <h1>Employee Details</h1>
      <div className='navbar'>
        <div className='nav_container'>
          <h3>Quick Search</h3>
          <div className='input_container'>
            <input type="text" className="search_bar" onChange={handleChange} placeholder='Search Employee by Name or ID or Designation"' autoComplete="off" required />
            <i class="fa-solid fa-magnifying-glass" onClick={handleSearchClick}></i>
          </div>
        </div>
      </div>
      {

      
            <div className="main_table">
                <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Total Projects</th>
                        <th>View Details</th>
                    </tr>

                    {data? (!search ? data.employees.map((data, index) => (
                            <tr key={index}>
                            <td>{data.id ? data.id : "ID Not Found"}</td>
                            <td>{data.name ? data.name : "Not not Found"}</td>
                            <td>{data.designation ? data.designation : "Designation not Found"}</td>
                            <td>{data.projects ? data.projects.length : "No Projects"}</td>
                            <td ><span>
                              View More</span></td>
                        </tr>
                        )) :
                        searchFilter ? searchFilter.map((data, index) => (
                          <tr key={index}>
                          <td>{data.id ? data.id : "ID Not Found"}</td>
                          <td>{data.name ? data.name : "Not not Found"}</td>
                          <td>{data.designation ? data.designation : "Designation not Found"}</td>
                          <td>{data.projects ? data.projects.length : "No Projects"}</td>
                          <td ><span>
                            View More</span></td>
                      </tr> )) : 
                      <tr>
                            <td colspan="5" style={{ textAlign: "center" }}>
                                No Employees Found!
                            </td>
                        </tr>
                        ) : 
                        <tr>
                            <td colspan="5" style={{ textAlign: "center" }}>
                                No Employees Found!
                            </td>
                        </tr>
                    }
                </table>
            </div>

                  }
    </div>
  );
}

export default App;
