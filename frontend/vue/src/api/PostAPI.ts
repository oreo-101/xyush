
import { ref } from "vue";
import URLS from "./ApiUrls";
import ax from "./AxiosUtil";

const useAllPosts = () => {
    const posts = ref({
        data: []
    });

    ax.get(URLS.POSTINGS_API)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            posts.value.data = data;
        })
        .catch(error => console.error(error));

    return posts;
}


export {
    useAllPosts,
}
