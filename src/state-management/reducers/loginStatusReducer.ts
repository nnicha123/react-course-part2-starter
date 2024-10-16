interface LoginAction {
  type: "LOGIN";
  user: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type Action = LoginAction | LogoutAction;

const loginStatusReducer = (state: string, action: Action): string => {
  if (action.type === "LOGOUT") return "";
  if (action.type === "LOGIN") return action.user;
  return state;
};

export default loginStatusReducer;
