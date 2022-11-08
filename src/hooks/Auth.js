import { useLocalStorage } from "./UseLocalStorage";

export const useAuth = () => {
    const [user, setUser] = useLocalStorage("user", null);

    const signIn = (user) => {
        console.log("logging in user", user)
        setUser(user);
    };

    const signOut = () => {
        setUser(null);
    }

    return { user, signIn, signOut };
};

