function add(){
    const container = document.getElementById('container');
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" oninput="getGWA()"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades" oninput="getGWA()">
            </div>
        </div>`
    ;
}

function getUnits(units){
    var totalUnits = 0;

    for(let i=0; i<units.length; i++){
        let unit = parseFloat(units[i].value);
        totalUnits += unit;
    }
    return totalUnits;
}

function getGWA(){
    const grades = document.querySelectorAll('.grades');
    const units = document.querySelectorAll('.units');
    let gwa = 0.00;

    for(let i=0; i<grades.length; i++){
        let grade = Nan ? parseFloat(grades[i].value) : 0;
        let unit = Nan ? parseFloat(units[i].value) : 0;
        gwa += (grade * unit) / (this.getUnits(units));
    }
    document.getElementById('gwa').innerHTML = gwa;

}