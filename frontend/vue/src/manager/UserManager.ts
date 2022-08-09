import { login } from "@/api/User";
import { AxiosError } from "axios";
import { computed, ComputedRef, Ref, ref } from "vue";


export default class UserManager {

    username: Ref<string> = ref("");
    email: Ref<string> = ref("");
    id: Ref<number> = ref(-1);
    roles: Ref<string[]> = ref([]);

    error: Ref<string> = ref("");
    token: Ref<string> = ref("");

    isSignedIn: ComputedRef<boolean> = computed(() => {
        return this.username.value !== "" && this.error.value === ""
    })

    isAdmin: ComputedRef<boolean> = computed(() => {
        return this.isSignedIn.value && this.roles.value.includes("ADMIN");
    })

    constructor() {
    }

    /**
     * login
     */
    public login(creds: { username: string, password: string }) {
        return login(creds)
            .then(res => {
                this.username.value = res.data.username;
                this.email.value = res.data.email;
                this.id.value = res.data.id;
                this.roles.value = res.data.roles;
                this.token.value = res.data.token;
                console.log("Roles " + this.roles.value);

            })
            .catch((e: AxiosError) => {
                if (e.response?.status === 401) {
                    console.log("Not authorized");
                    this.error.value = "Not authorized";
                }
                throw e;
            });
    }
}

