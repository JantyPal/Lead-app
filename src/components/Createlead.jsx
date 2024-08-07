import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLead } from "../features/leadDeatilSlice";

const Createlead = () => {

    const [lead, setLead] = useState({});

    const getLeadData = (e) => {
        setLead({...lead, [e.target.name] : e.target.value});
    }   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createLead(lead));
        navigate("/")
    }
    return (
        <div>
            <h2 className="my-5">Create Lead</h2>
            <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        onChange={getLeadData}
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        class="form-control"
                        onChange={getLeadData}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Number</label>
                    <input
                        type="number"
                        name="number"
                        class="form-control"
                        onChange={getLeadData}
                        required
                    />
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        onChange={getLeadData}
                        required
                    />
                    <label class="form-check-label"><span className="mx-3">Male</span></label>
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        onChange={getLeadData}
                    />
                    <label class="form-check-label"><span className="mx-3">Female</span></label>
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Createlead;