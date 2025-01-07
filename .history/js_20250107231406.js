function add(){
    const container = document.getElementById('container');
    container.insertAdjacentHTML(
        'beforeend', 
        `<div class=" row grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" min="1" oninput="getGWA()"> 
                <!--<input type="number" class="col-form-control units" min="1"> -->
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades" oninput="getGWA()">
                <!--<input type="text" class="col-form-control grades"> -->
            </div>
            <button class="col-auto add " onclick="add()"><i class="bi bi-plus-square"></i></button>
        </div>`
    );
    const rows = document.querySelectorAll('.grade-container');
    const lastrow = rows[rows.length - 2];
    const lastIndex = Array.from(rows).indexOf(lastrow);
    console.log(lastIndex, lastrow);
    lastrow.insertAdjacentHTML(
        'beforeend', 
        `<button class="col-auto remove" onclick="remove(${lastIndex})"><i class="bi bi-x"></i></button>`
    );
    var add = document.querySelectorAll('.add');
    add = add[add.length - 2];
    add.remove(); 
}

function remove(id){
    var row = document.querySelectorAll('.grade-container');
    row[id].remove();
    getGWA();
}

function getUnits(units, grades){
    var totalUnits = 0;

    for(let i=0; i<units.length; i++){
        const unit = parseFloat(units[i].value);
        const grade = parseFloat(grades[i].value);
        if (grade > 0){
            totalUnits += unit;
        }
    }
    return totalUnits;
}


function getGWA(){
    const grades = document.querySelectorAll('.grades');
    const units = document.querySelectorAll('.units');
    const totalUnits = getUnits(units, grades);
    var gwa = 0.00;
    
    for(let i=0; i<grades.length; i++){
        let unit = parseFloat(units[i].value) || 0;
        let grade = parseFloat(grades[i].value) || 0;
        if(grade > 0) {
            gwa += (grade * unit) / totalUnits;
            document.getElementById('gwa').innerHTML = gwa.toFixed(2);
        }
        
    }
}