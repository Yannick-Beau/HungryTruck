// === action types
export const CHANGE_STATUS_ICON_USER = 'CHANGE_STATUS_ICON_USER';
export const LOADING_EDIT_USER = 'LOADING_EDIT_USER';
export const LOADING_MAP = 'LOADING_MAP';
export const CHANGE_REDIRECT = 'CHANGE_REDIRECT';
export const CHANGE_REDIRECT_LOGIN = 'CHANGE_REDIRECT_LOGIN';
export const LOADING_FAQ = 'LOADING_FAQ';
export const LOADING_LOGIN = 'LOADING_LOGIN';
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';
export const CHANGE_SHOW_FLASH = 'CHANGE_SHOW_FLASH';

// === action creators
export const changeIsLoading = (newValue, identifier) => ({
  type: CHANGE_IS_LOADING,
  newValue: newValue,
  identifier: identifier,
});

export const changeShowFlash = (newValue, identifier) => ({
  type: CHANGE_SHOW_FLASH,
  newValue: newValue,
  identifier: identifier,
});

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

export const loadingLogIn = () => ({
  type: LOADING_LOGIN,
});

export const changeRedirect = () => ({
  type: CHANGE_REDIRECT,
});

export const changeRedirectLogIn = () => ({
  type: CHANGE_REDIRECT_LOGIN,
});
