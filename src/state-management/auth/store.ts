import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (user: string) => set(() => ({ user: user })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
