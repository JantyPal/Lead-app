import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create Lead

export const createLead = createAsyncThunk("createLead" , async (data, {rejectWithValue}) => {
    const response =  await fetch(
        "https://66a4dd945dc27a3c190a045d.mockapi.io/lead" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(data)
        });
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
});

//read Leads
export const getAllLeads = createAsyncThunk("getAllLeads", async (args, {rejectWithValue}) => {
    const response = await fetch("https://66a4dd945dc27a3c190a045d.mockapi.io/lead");
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
}); 

//update Leads
export const updateLead = createAsyncThunk("updateLead",async (data, {rejectWithValue}) => {
    const response = await fetch(
        `https://66a4dd945dc27a3c190a045d.mockapi.io/lead/${data.id}` , {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

//Delete Lead
export const deleteLead = createAsyncThunk("deleteLead", async (id, {rejectWithValue}) => {
    const response = await fetch(
        `https://66a4dd945dc27a3c190a045d.mockapi.io/lead/${id}`,
        {method : "DELETE"}
    );
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});


export const leadDetail = createSlice({
    name : "leadDetail",
    initialState : {
        leads : [],
        loading : false,
        error : null,
        searchData : [],
    },
    reducers : {
        searchLead : (state,action) => {
            state.searchData = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(createLead.pending , (state) => {
            state.loading = true;

        }).addCase(createLead.fulfilled , (state, action) => {
            state.loading = false;
            state.leads.push(action.payload);

        }).addCase(createLead.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload;

        }).addCase(getAllLeads.pending , (state) => {
            state.loading = true;

        }).addCase(getAllLeads.fulfilled , (state, action) => {
            state.loading = false;
            state.leads = action.payload;

        }).addCase(getAllLeads.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload;

        }).addCase(updateLead.pending , (state) => {
            state.loading = true;

        }).addCase(updateLead.fulfilled , (state, action) => {
            state.loading = false;
            state.leads = state.leads.map((ele) => 
                ele.id === action.payload.id ? action.payload : ele
            );

        }).addCase(updateLead.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload;

        }).addCase(deleteLead.pending , (state) => {
            state.loading = true;

        }).addCase(deleteLead.fulfilled , (state, action) => {
            state.loading = false;
            const {id} = action.payload;
            state.leads = state.leads.filter((user) => user.id !== id);

        }).addCase(deleteLead.rejected , (state, action) => {
            state.loading = false;
            state.error = action.payload;

        })
    }
});

export default leadDetail.reducer;

export const {searchLead} = leadDetail.actions;