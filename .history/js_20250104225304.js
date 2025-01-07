function add(){
    const container = document.getElementById('container').innerHTML;
    const cnt = 1;
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label for="units" class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control" id="units#${cnt}"> 
            </div>
            <div class="col-auto">
                <label for="grades" class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control" id="grades#">
            </div>
        </div>`
    ;
}

function compute(){
    const gwa = document.getElementById('gwa');
    gwa.innerHTML = "Hello World";
}