import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLead, getAllLeads } from "../features/leadDeatilSlice";
import { Link } from "react-router-dom";

const Readlead = () => {

    const { leads, loading, searchData } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    
    const [radioData, setRadioData] = useState("");

    useEffect(() => {
        dispatch(getAllLeads());
    }, [])

    if (loading) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            <h3 className="my-5">All Lead Data ({leads.length})</h3>
            <input
                class="form-check-input"
                name="gender"
                type="radio"    
                checked = {radioData === ""}
                onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label mx-2">All</label>
            <input
                class="form-check-input"
                name="gender"
                value="Male"
                type="radio"
                checked = {radioData === "Male"}
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label mx-2">Male</label>
            <input
                class="form-check-input"
                name="gender"
                value="Female"
                type="radio"
                checked = {radioData === "Female"}
                onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label mx-2">Female</label>

            <table class="table w-80 my-5 table-striped">
                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.filter((ele) => {
                        if (searchData.length === 0) {
                            return ele;
                        } else {
                            return ele.name.toLowerCase().includes(searchData.toLowerCase());
                        }
                    }).filter((ele) => {
                        if(radioData === "Male") {
                            return ele.gender === radioData;
                        } else if (radioData === "Female") {
                            return ele.gender === radioData;
                        } else {
                            return ele;
                        }
                    }).map((ele, index) => {
                        return <tr key={ele.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.number}</td>
                            <td>{ele.gender}</td>
                            <td>
                                <Link to={`/updateLead/${ele.id}`}><button type="button" class="btn btn-success mx-2">
                                    Edit
                                </button></Link>
                                <button type="button" class="btn btn-danger" onClick={() => dispatch(deleteLead(ele.id))}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default Readlead;