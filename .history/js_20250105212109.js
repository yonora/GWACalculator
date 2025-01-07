function add(){
    const container = document.getElementById('container');
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades">
            </div>
        </div>`
    ;
}

function getUnits(){
    const units = document.querySelectorAll('.units');
    var totalUnits = 0;

    for(let i=0; i<units.length; i++){
        let unit = parseFloat(units[i].value);
        totalUnits += unit;
    }
    return totalUnits;
}

function getGWA(){
    const grades = grades = document.querySelectorAll('.grades');
    const units = units = document.querySelectorAll('.units');
    const gwa = 0.00;

    for(let i=0; i<grades.length; i++){
        let grade = parseFloat(grades[i].value);
        for(let i=0; i<grades.length; i++){
            let unit = parseFloat(grades[i].value);
            gwa += (grade * unit) / (this.getUnits());
        }
    }
    document.getElementById('gwa').innerHTML = gwa;

}