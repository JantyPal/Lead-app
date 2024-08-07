import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateLead } from "../features/leadDeatilSlice";

const Updatelead = () => {

    const { id } = useParams();
    const [updateData, setUpdateData] = useState();
    const { leads, loading} = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(id) {
            const singleLead = leads.filter((ele) => ele.id === id);
            setUpdateData(singleLead[0]);
        }
    },[updateData]);

    const newData = (e) => {
        setUpdateData({...updateData, [e.target.name] : e.target.value});
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateLead(updateData));
        navigate("/");
    }
    if(loading) {
        return <h3>Loading...</h3>
    }
    return (
        <div>
            <h2 className="my-5">Update Lead</h2>
            <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        value={ updateData && updateData.name}
                        onChange={newData}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        class="form-control"
                        value={updateData && updateData.email}
                        onChange={newData}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label class="form-label">Number</label>
                    <input
                        type="number"
                        name="number"
                        class="form-control"
                        value={updateData && updateData.number}
                        onChange={newData}
                        required
                    />
                </div>
                <div class="mb-3">
                    <input
                        class="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        checked = {updateData && updateData.gender === "Male"}
                        onChange={newData}
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
                        checked = {updateData && updateData.gender === "Female"}
                        onChange={newData}
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

export default Updatelead;