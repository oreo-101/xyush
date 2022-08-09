


function api(endPoint: string) {
    return "/api" + (endPoint.charAt(0) === '/' ? '' : '/') + endPoint;
}


export default {
    POSTINGS_API: api("/post/all"),
    POSTS_CREATE: api("/post/create"),
    SIGN_IN: api("/auth/signin"),
    SIGN_UP: api("/auth/signup"),
    AUTH_TEST: api("/auth/test"),
    POST_CATEGORY_ALL: api("/post_category/all"),
    POST_CATEGORY_CREATE: api("/post_category/create"),
};

