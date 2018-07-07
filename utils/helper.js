export function formatObjectToArray (result) {
    // Return object to array 
    if(result) {
        return Object.keys(result).map(key => result[key])
    }
    // If result is empty return empty array
    return []
}

export const guid =() => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }