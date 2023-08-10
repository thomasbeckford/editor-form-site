export default function CacheStorage() {
  const localCache = {};

  const cacheToLocal = (key, value) => {
    localCache[key] = value;
  };
  const getCachedData = (key) => {
    return localCache[key];
  };

  return {
    localCache,
    cacheToLocal,
    getCachedData,
  };
}
