export const getBase64 = (file: any, cb: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};

export const getFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
};

export const setToStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
};

export const removeStorage = async (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
};
