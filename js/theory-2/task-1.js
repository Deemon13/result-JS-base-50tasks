const car = {
  name: "Hendai Solaris",
  type: "sedan",
  maxSpeed: "320",
  color: "red",
};

function makeCarArticle({name, type, maxSpeed, color}) {
    return `<article>
    <div>
        <h2>${name}</h2>
        <span>${type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${maxSpeed}</span>
    </div>
    <div>
        <span>Color:</span>
        <span>${color}</span>
    </div>
  </article>`
}

console.log(makeCarArticle(car));