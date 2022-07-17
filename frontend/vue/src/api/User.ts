import ax from "./AxiosUtil";

import URLS from "./ApiUrls";

export const login = (req: LoginRequest) => {
    return ax.post(URLS.SIGN_IN, req);
};

export const signup = (req: SignupRequest) => {
    return ax.post(URLS.SIGN_UP, req);
};

export const authTest = () => ax.get(URLS.AUTH_TEST);

export type SignupRequest = {
    username: String,
    email: String,
    roles: Set<String>,
    password: String,
};

export type LoginRequest = {
    username: String,
    password: String,
}

