export enum CONSTANTS {
  AUTH_TOKEN = "token",
}

export enum LINKS {
  BASE_URL = "/",
  LOGIN = "/login",
  USER_DETAILS = "/details",
  DASHBOARD = "/dashboard",
}

export enum ENDPOINTS {
  LOGIN = "/v1/auth/login",
  REGISTER = "/v1/auth/register",
  GET_CURRENT_USER = "user/current",
  GETUSERPOSTS = "/v1/dashboard/posts",
  HANDLELIKES = "v1/posts/likes/",
  GETPOSTS = "/v1/posts",
}
