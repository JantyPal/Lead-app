import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchLead } from "../features/leadDeatilSlice";


const Navbar = () => {

    const [searchData, setSearchData] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchLead(searchData));
    });
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <h4 className="navbar-brand">Lead Application</h4>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">
                                    Create Lead
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                All Lead
                                </Link>
                            </li>
                        </ul>
                        <input
                            className="form-control me-2 w-50"
                            type="search"
                            placeholder="Search by Name"
                            aria-label="Search"
                            onChange={(e) => setSearchData(e.target.value)}
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;