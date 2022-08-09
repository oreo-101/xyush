
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

const useAllPostCategory = () => {
  const postCategories = ref({
    data: [] as PostCategory[]
  });

  const reload = () => {
    ax.get(URLS.POST_CATEGORY_ALL)
      .then(res => res.data)
      .then(data => {
        postCategories.value.data = data;
      })
      .catch(error => console.error(error));
  }

  reload();

  return {
    postCategories,
    reload,
  };
}

const useCreatePostCategory = (userManager: UserManager) => {
  return (newCategory: string) => {
    return ax.post(URLS.POST_CATEGORY_CREATE, { name: newCategory }, {
      headers: { Authorization: userManager.token.value },
    });
  };
}

export type Post = {
  id: number;
  user: UserView
  content: string;
  createdAt: string;
  udpatedAt: string;
}

export type PostCategory = {
  id: number;
  name: string;
}

export {
  useAllPosts,
  useCreatePost,
  useAllPostCategory,
  useCreatePostCategory,
}
