function add(){
    const container = document.getElementById('container');
    const rows = document.querySelectorAll('.grade-container');
    const lastRow = rows[rows.length - 1];
    var lastIndex = parseFloat(lastRow.dataset.index);
    lastIndex++;
    console.log(`index: ${lastIndex}`);
    container.insertAdjacentHTML(
        'beforeend', 
        `<div class=" row grade-container" data-index=${lastIndex}>
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
    var previousContainer = document.querySelectorAll('.grade-container');
    previousContainer = previousContainer[previousContainer.length - 2];
    console.log(`last index: ${previousContainer.dataset.index}`);
    previousContainer.insertAdjacentHTML(
        'beforeend', 
        `<button class="col-auto remove" onclick="remove(${previousContainer.id})"><i class="bi bi-x"></i></button>`
    );
    var add = document.querySelectorAll('.add');
    add = add[add.length - 2];
    add.remove(); 
}

function remove(id){
    const rows = document.querySelectorAll('.grade-container');
    const row = rows.dataset.index = id;
    row.remove();
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