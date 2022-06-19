


function api(endPoint: string) {
    return "/api" + (endPoint.charAt(0) === '/' ? '' : '/') + endPoint;
}

export const POSTINGS_API = api("all_posts");
