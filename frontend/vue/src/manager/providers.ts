import { inject, InjectionKey, provide } from "vue";
import UserManager from "./UserManager";

export const USER_MANAGER_KEY: InjectionKey<UserManager> = Symbol("USER_MANAGER_KEY");

export const safeInject = <T>(key: InjectionKey<T>): T => {
    const v = inject(key);
    if (!v) {
        throw new Error("cannot find provided key: " + key);
    }
    return v;
}


