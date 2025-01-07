function add(){
    const container = document.getElementById('container');
    container.insertAdjacentHTML(
        'beforeend', 
        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" min="1" oninput="getGWA()"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades" oninput="getGWA()">
            </div>
            <button class="col-auto add" onclick="add()"><i class="bi bi-plus-square"></i></button>
        </div>`
    );
    var row = document.querySelectorAll('.row');
    row = row[row.length - 2];
    console.log(row);
    row.insertAdjacentHTML(
        'beforeend', 
        `<button class="col-auto remove" onclick="removeIcon()"><i class="bi bi-x"></i></button>`
    );
    var add = document.querySelectorAll('.add');
    add = add[add.length - 2];
    add.remove(); 
}

function removeIcon(){
    var row = document.querySelectorAll('.row');
    row = row[row.length - 2];
    row.remove();
}

function remove(){
    const container = document.getElementById('container');
    container.removeChild(

        `<div class="row" class="grade-container">
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" min="1" oninput="getGWA()"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades" oninput="getGWA()">
            </div>
            <button class="col-auto remove" onclick="remove()"><i class="bi bi-x"></i></button>
        </div>`
    );
}

function getUnits(units){
    var totalUnits = 0;

    for(let i=0; i<units.length; i++){
        const unit = parseFloat(units[i].value);
        totalUnits += unit;
    }
    return totalUnits;
}


function getGWA(){
    const grades = document.querySelectorAll('.grades');
    const units = document.querySelectorAll('.units');
    const totalUnits = getUnits(units);
    var gwa = 0.00;
    
    for(let i=0; i<grades.length; i++){
        let unit = parseFloat(units[i].value) || 0;
        let grade = parseFloat(grades[i].value) || 0;
        gwa += (grade * unit) / totalUnits;
        document.getElementById('gwa').innerHTML = gwa.toFixed(2);
    }
}