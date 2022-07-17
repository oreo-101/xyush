


function api(endPoint: string) {
    return "/api" + (endPoint.charAt(0) === '/' ? '' : '/') + endPoint;
}


export default {
    POSTINGS_API: api("all_posts"),
    SIGN_IN: api("/auth/signin"),
    SIGN_UP: api("/auth/signup"),
    AUTH_TEST: api("/auth/test"),
};

