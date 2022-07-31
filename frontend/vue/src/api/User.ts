import ax from "./AxiosUtil";

import URLS from "./ApiUrls";
import { AxiosResponse } from "axios";

export const login = (req: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return ax.post(URLS.SIGN_IN, req);
};

export const signup = (req: SignupRequest) => {
    return ax.post(URLS.SIGN_UP, req);
};

export const authTest = () => ax.get(URLS.AUTH_TEST);

export type SignupRequest = {
    username: string,
    email: string,
    roles: Set<string>,
    password: string,
};

export type LoginRequest = {
    username: string,
    password: string,
};

export type LoginResponse = {
    type: "Bearer",
    token: string,
    id: number,
    username: string,
    email: string,
    roles: string[],
};

export type UserView = {
    id: number,
    username: string
    roles: Set<{ id: number, name: string }>
};