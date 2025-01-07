function add(){
    const container = document.getElementById('container');
    container.innerHTML += 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control" class="units" class="units" oninput="compute()"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control" class="grades" class="grades" oninput="compute()">
            </div>
        </div>`
    ;
}

function getUnits(){
    const totalUnits = 0;

    const units = document.querySelectorAll('.units');

    for(i=0; i > units.length; i++){
        console.log(unit[i].value);
    }
    units.forEach(unit => {
        console.log(unit.value);
        gwa.innerHTML = unit.value;
        totalUnits += unit;
    });

    
    

    
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