
import { ref } from "vue";
import { POSTINGS_API } from "./ApiUrls";
import ax from "./AxiosUtil";

const useAllPosts = () => {
    const posts = ref({
        data: []
    });

    console.log(POSTINGS_API);

    ax.get(POSTINGS_API)
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
