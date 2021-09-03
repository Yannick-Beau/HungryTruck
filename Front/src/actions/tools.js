// === action types
export const CHANGE_STATUS_ICON_USER = 'CHANGE_STATUS_ICON_USER';
export const LOADING_EDIT_USER = 'LOADING_EDIT_USER';
export const LOADING_MAP = 'LOADING_MAP';
export const CHANGE_REDIRECT = 'CHANGE_REDIRECT';
export const CHANGE_REDIRECT_LOGIN = 'CHANGE_REDIRECT_LOGIN';
export const LOADING_FAQ = 'LOADING_FAQ';

// === action creators
export const changeStatusIconUser = () => ({
  type: CHANGE_STATUS_ICON_USER,
});

export const loadingEditUser = () => ({
  type: LOADING_EDIT_USER,
});

export const loadingMap = () => ({
  type: LOADING_MAP,
});

export const loadingFaq = () => ({
  type: LOADING_FAQ,
});

export const changeRedirect = () => ({
  type: CHANGE_REDIRECT,
});

export const changeRedirectLogIn = () => ({
  type: CHANGE_REDIRECT_LOGIN,
});
