function add(){
    const container = document.getElementById('container').innerHTML;
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control" class="units"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control" class="grades">
            </div>
        </div>`
    ;
}

function compute(){
    const gwa = document.getElementById('gwa');
    gwa.innerHTML = "Hello World";
}