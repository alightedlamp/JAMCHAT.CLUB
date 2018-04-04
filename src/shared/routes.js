// @flow

export const HOME_PAGE_ROUTE = '/'
export const ABOUT_PAGE_ROUTE = '/about'
export const LOBBY_PAGE_ROUTE = '/lobby'
export const USER_REGISTER_ROUTE = '/register'
export const USER_LOGIN_ROUTE = '/login'
export const USER_LOGOUT_ROUTE = '/logout'

export const jamPageRoute = (id: string) => `/jam/${id || ':id'}`
export const userProfilePageRoute = (id: string) => `/user/${id || ':id'}`
