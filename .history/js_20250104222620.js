function add(){
    const container = document.getElementById('container');
    const elements = "";
    elements += 
        `<div class="row" id="grade-container">
            <div class="col-auto">
                <label for="units" class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control" id="units"> 
            </div>
            <div class="col-auto">
                <label for="grades" class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control" id="grades">
            </div>
            <button class="col-auto add" onclick="add()"><i class="bi bi-plus-square"></i> ADD</button>
        </div>`
    ;
    container.append(elements);
}

function compute(){
    const gwa = document.getElementById('gwa');
    gwa.innerHTML = "Hello World";
}