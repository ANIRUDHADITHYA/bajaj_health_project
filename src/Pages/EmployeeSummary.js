
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from 'react';


const EmployeeSummary = () => {


    let { employee_id } = useParams();
    const [data, setData] = useState("");

    useEffect(() => {

        const getEmployeeData = async () => {

            await Axios.get("https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json").then((response) => {
                setData(response.data.employees.filter((item) => (
                    item.id == employee_id
                ))[0]
                )
            })


        }

        if (employee_id) {
            getEmployeeData()
        }




    }, []);



    return (
        <div className='employee_section'>
            <h1>Employee Summary</h1>

            {


                <div className="main_table">
                    <table>
                        <tr>
                            <th>Employee ID</th>
                            <td>{data.id ? data.id : "ID Not Found"}</td>
                        </tr>
                        <tr>
                            <th>Employee Name</th>
                            <td>{data.name ? data.name : "Name Not Found"}</td>
                        </tr>
                        <tr>
                            <th>Employee Designation</th>
                            <td>{data.designation ? data.designation : "Designation Not Found"}</td>
                        </tr>
                        <tr>
                            <th>Skills</th>
                            {data.skills ? data.skills.map((data, index) => (<td>
                                {data}
                            </td>)) : "Sills Not Found"}
                        </tr>

                        <tr>
                            <th>Projects</th>

                        </tr>

                        {data.projects ? data.projects.map((data, index) => (
                            <tr>
                                <>
                                    <th>Project Name</th>
                                    <td>
                                        {data.name}
                                    </td>

                                </>


                                <>
                                    <th>Project Discription</th>
                                    <td>
                                        {data.description}
                                    </td>
                                </>

                                <>
                                    <th>Team Size</th>
                                    <td>
                                        {data.team.length}
                                    </td>
                                </>
                                


                            </tr>
                        )) : "Projects Not Found"}







                    </table>
                </div>

            }
        </div>
    );
}

export default EmployeeSummary;