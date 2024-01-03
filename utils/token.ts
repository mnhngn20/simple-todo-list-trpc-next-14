const ACCESS_TOKEN = "simple-todo-list-access-token";

export function setAccessToken(token: string) {
  return localStorage.setItem(ACCESS_TOKEN, token);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}
