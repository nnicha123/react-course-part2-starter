interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const loginStatusReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGOUT") return "";
  if (action.type === "LOGIN") return action.user;
  return state;
};

export default loginStatusReducer;
