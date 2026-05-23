export interface LoginRequest {
  user_name: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  status_code: number;
  data: LoginResponseData;
}

export interface LoginResponseData {
  auth: AuthData;
}

export interface AuthData {
  token: string;
  token_type: string;
}
