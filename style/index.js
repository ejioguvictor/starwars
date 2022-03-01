
let tableEl = document.getElementById("table1")
// Here we fetch some server api files 
fetch("https://swapi.dev/api/people")
  .then(res => res.json())
  .then(data => {
    let newdata = data["results"]
    for (let i = 0; i < newdata.length; i++) {
      tableEl.innerHTML += `  
    <div class="col-sm-4"><br>
        <div class="card">

    <img src="./Images/pix${i + 1}.jpeg" alt="..." class="img-responsive">
    <div class="card-body">
    <h5 class="card-title">${newdata[i].name}</h5>
    <p class = "card-text">War Titans</p>
    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${i}">Details</a>
    </div>
    </div>
    </div>

    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${newdata[i].name}</h5>

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 class="card-title">Name: ${newdata[i].name}<h5>
            <h5 class="card-title">Height: ${newdata[i].height}<h5>
            <h5 class="card-title">Gender: ${newdata[i].gender}<h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
    }

  })
