
import UserManager from "@/manager/UserManager";
import { ref } from "vue";
import URLS from "./ApiUrls";
import ax from "./AxiosUtil";
import { UserView } from "./User";

const useAllPosts = (userManager: UserManager) => {
  const posts = ref({
    data: [] as Post[]
  });

  ax.get(URLS.POSTINGS_API,
    {
      headers: {
        Authorization: userManager.token.value,
      }
    })
    .then(res => res.data)
    .then(data => {
      posts.value.data = data;
    })
    .catch(error => console.error(error));

  return posts;
}

const useCreatePost = (userManager: UserManager) => {
  return (content: string) => {
    return ax.post(URLS.POSTS_CREATE,
      content, {
      headers: { Authorization: userManager.token.value },
    });
  };
};

export type Post = {
  id: number;
  user: UserView
  content: string;
  createdAt: string;
  udpatedAt: string;
}

export {
  useAllPosts,
  useCreatePost,
}
