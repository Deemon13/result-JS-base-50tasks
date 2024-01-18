function arrayToList(arr) {
    let str ='<ul>'
    
    for (const el of arr) {
      str += `<li>${el}</li>`
    }
    return str + '</ul>';
  }