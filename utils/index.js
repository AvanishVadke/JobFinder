// utils/index.js
export const checkImageURL = (url) => {
    if (!url) return false;
    const pattern = new RegExp('^https?:\\/\\/.*', 'i'); // Checks if URL starts with http/https
    return pattern.test(url);
  };