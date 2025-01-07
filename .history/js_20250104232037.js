function add(){
    const container = document.getElementById('container');
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control" class="units" name="units"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control" class="grades" name="grades">
            </div>
        </div>`
    ;
}

function compute(){
    const grades = [];
    const units = [];
    grades = document.querySelectorAll('grades').val;
    units = document.querySelectorAll('units').val;

    const totalUnits = 0;

    grades.forEach(grade => {
        units.forEach(unit => {
        totalUnits += unit;
        });
    });
    

    gwa.innerHTML = totalUnits;
}