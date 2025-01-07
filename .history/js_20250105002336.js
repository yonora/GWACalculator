function add(){
    const container = document.getElementById('container');
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" oninput="getUnits()"> 
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

    for(let i=0; i<units.length; i++){
        let unit = units[i].value;
        var totalUnits += unit;
        console.log(totalUnits);
    }

}

function getGrades(){
    const grades = [];
    const units = [];
    grades = document.querySelectorAll('.grades').values;
    units = document.querySelectorAll('.units').values;

    const totalUnits = 0;

    grades.forEach(grade => {
        units.forEach(unit => {
        totalUnits += unit;
        });
    });
}