     // Use Fetch to get the Details in the Api link.

     let Data = fetch("https://api.jikan.moe/v4/anime?q=naruto&sfw")

    // Use .then method to handle the promise
    // And json() to convert to readable stream
    
    Data.then((response) => response.json()).then((results) => {
        
        let a =  results.data;
        console.log(a)
     
        for(let i in a){
  
    // Create a element and add the data inside the Tag using innerhtml
    
    let InnerData = document.createElement("div")
    InnerData.innerHTML = `
    <div class="cards">
      <div class="col-3">
        <div class="card" style="width: 28rem;">
          <div class="card-body">
            <div class="card-text">
              <div class="row">
                <div class="col">
                  <img src="${a[i].images.jpg.image_url}">
                </div>
              </div>
              <div class="row">
                <div class="col-4"><b>Movie Title:</b></div>
                <div class="col-8"><b><i>${a[i].title}</i></b></div>
              </div>
              <div class="row">
                <div class="col-4"><b>Trailer:</b></div>
                <div class="col-8">
                  <a href="${a[i].trailer.embed_url}" style="text-decoration: underline" target="_blank">Trailer</a>
                </div>
              </div>
              <div class="row">
                <div class="col-4"><b>Movie:</b></div>
                <div class="col-8">
                  <a href="${a[i].url}" style="text-decoration: underline" target="_blank">Click To Watch The Movie</a>
                </div>
              </div>
              <div class="row">
                <div class="col-4"><b>Duration:</b></div>
                <div class="col-8"><i>${a[i].duration}</i></div>
              </div>
              <div class="row">
                <div class="col-4"><b>Aired:</b></div>
                <div class="col-8"><i>${a[i].aired.from}</i></div>
              </div>
              <div class="row">
                <div class="col-4"><b>Ratings:</b></div>
                <div class="col-8" style="color:red;"><i>${a[i].rating}</i></div>
              </div>
              <div class="row">
                <div class="col-4"><b>Studio:</b></div>
                <div class="col-8"><i>${a[i].studios[0].name}</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    let Data = document.getElementById("row");
    Data.append(InnerData)
    // Finally append the data inside the body
    
    document.body.append(Data);
    
        }
      }).catch((Error)=>{
        
        Alert("Error")
    
    })