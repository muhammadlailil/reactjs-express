
export const base64encode = (string) => window.btoa(string);

export const base64decode = (string) => (string ? window.atob(string) : null);