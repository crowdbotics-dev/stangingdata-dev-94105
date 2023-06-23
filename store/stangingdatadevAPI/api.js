import axios from "axios"
const stangingdatadevAPI = axios.create({
  baseURL: "https://stangingdata-dev-94105.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return stangingdatadevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_datamodel_list(payload) {
  return stangingdatadevAPI.get(`/api/v1/datamodel/`)
}
function api_v1_datamodel_create(payload) {
  return stangingdatadevAPI.post(`/api/v1/datamodel/`, payload.data)
}
function api_v1_datamodel_retrieve(payload) {
  return stangingdatadevAPI.get(`/api/v1/datamodel/${payload.id}/`)
}
function api_v1_datamodel_update(payload) {
  return stangingdatadevAPI.put(
    `/api/v1/datamodel/${payload.id}/`,
    payload.data
  )
}
function api_v1_datamodel_partial_update(payload) {
  return stangingdatadevAPI.patch(
    `/api/v1/datamodel/${payload.id}/`,
    payload.data
  )
}
function api_v1_datamodel_destroy(payload) {
  return stangingdatadevAPI.delete(`/api/v1/datamodel/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return stangingdatadevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return stangingdatadevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return stangingdatadevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return stangingdatadevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return stangingdatadevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return stangingdatadevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return stangingdatadevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return stangingdatadevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return stangingdatadevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return stangingdatadevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return stangingdatadevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return stangingdatadevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return stangingdatadevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_datamodel_list,
  api_v1_datamodel_create,
  api_v1_datamodel_retrieve,
  api_v1_datamodel_update,
  api_v1_datamodel_partial_update,
  api_v1_datamodel_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
