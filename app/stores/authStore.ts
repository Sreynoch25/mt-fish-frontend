import { defineStore } from "pinia";
import { ref } from "vue";
import { useApiInterceptor } from "~/composables/api/useApiInterceptor";
import type { LoginRequest, LoginResponse } from "~/types/login/login";
import { clearAccessToken, setAccessToken } from "~/utils/authToken";

const createEmptyLoginRequest = (): LoginRequest => ({
  user_name: "",
  password: "",
});

export const useAuthStore = defineStore("useAuthStore", () => {
  const authenticated = ref(false);
  const isSpinning = ref(false);
  const user = ref<LoginRequest>(createEmptyLoginRequest());

  const fetchLogin = async (): Promise<void> => {
    isSpinning.value = true;

    try {
      const response = await useApiInterceptor<LoginResponse>("/auth/login", {
        method: "POST",
        body: {
          user_name: user.value.user_name,
          password: user.value.password,
        },
      });

      const data = response?.data.value;
      
      console.log("data ======> ", data?.success)

      if (data?.success) {
        setAccessToken(data.data.auth.token);
        authenticated.value = true;
        await navigateTo("/");
        return;
      }

      throw data ?? { message: "Unknown error" };
    } catch (error: unknown) {
      if (error && typeof error === "object") {
        if ("message" in error || "error" in error) {
          throw error;
        }
      }

      throw { message: "Unknown error" };
    } finally {
      isSpinning.value = false;
    }
  };

  const logout = (): void => {
    clearAccessToken();

    authenticated.value = false;
    user.value = createEmptyLoginRequest();

    navigateTo("/login");
  };

  return {
    authenticated,
    isSpinning,
    user,
    fetchLogin,
    logout,
  };
});