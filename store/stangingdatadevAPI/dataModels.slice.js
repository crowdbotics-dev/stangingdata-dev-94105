import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_datamodel_list = createAsyncThunk(
  "dataModels/api_v1_datamodel_list",
  async payload => {
    const response = await apiService.api_v1_datamodel_list(payload)
    return response.data
  }
)
export const api_v1_datamodel_create = createAsyncThunk(
  "dataModels/api_v1_datamodel_create",
  async payload => {
    const response = await apiService.api_v1_datamodel_create(payload)
    return response.data
  }
)
export const api_v1_datamodel_retrieve = createAsyncThunk(
  "dataModels/api_v1_datamodel_retrieve",
  async payload => {
    const response = await apiService.api_v1_datamodel_retrieve(payload)
    return response.data
  }
)
export const api_v1_datamodel_update = createAsyncThunk(
  "dataModels/api_v1_datamodel_update",
  async payload => {
    const response = await apiService.api_v1_datamodel_update(payload)
    return response.data
  }
)
export const api_v1_datamodel_partial_update = createAsyncThunk(
  "dataModels/api_v1_datamodel_partial_update",
  async payload => {
    const response = await apiService.api_v1_datamodel_partial_update(payload)
    return response.data
  }
)
export const api_v1_datamodel_destroy = createAsyncThunk(
  "dataModels/api_v1_datamodel_destroy",
  async payload => {
    const response = await apiService.api_v1_datamodel_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dataModelsSlice = createSlice({
  name: "dataModels",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_datamodel_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datamodel_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_datamodel_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_datamodel_list,
  api_v1_datamodel_create,
  api_v1_datamodel_retrieve,
  api_v1_datamodel_update,
  api_v1_datamodel_partial_update,
  api_v1_datamodel_destroy,
  slice: dataModelsSlice
}
