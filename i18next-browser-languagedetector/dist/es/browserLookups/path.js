export default {
  name: 'path',

  lookup: function lookup(options) {
    var found = void 0;
    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromUrlIndex === 'number') {
          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }
    return found;
  }
};