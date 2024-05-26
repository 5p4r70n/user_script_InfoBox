let resp=await fetch("https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&prop=revisions&titles=Scary Monsters and Nice Sprites&formatversion=2&rvprop=content&rvparse=1&rvsection=0&wrappedhtml=1")

// console.log(
//     )

let gg = resp.json().then((data)=>{ 
                                    
    
    console.log(data)
    // Convert string to HTML element
// const parser = new DOMParser();
// const htmlElement = parser.parseFromString(data.html, 'application/xml').documentElement;

// // console.log(typeof(htmlElement))

// console.log(htmlElement.getElementByClassName())

    
})


// console.log(gg)

// async function logMovies() {
//     const response = await fetch("https://en.wikipedia.org/w/api.php?action=query&format=jsonfm&prop=revisions&titles=Scary Monsters and Nice Sprites&formatversion=2&rvprop=content&rvparse=1&rvsection=0&wrappedhtml=1");
//     const movies = await response.json();
//     console.log(movies);
//   }
  