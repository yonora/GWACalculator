function add(){
    const container = document.getElementById('container');
    var lastIndex = document.querySelectorAll('.grade-container');
    lastIndex = lastIndex[lastIndex.length - 1];
    lastIndex = parseFloat(lastIndex.id);
    lastIndex++;
    container.insertAdjacentHTML(
        'beforeend', 
        `<div class="grade-container" id=${lastIndex}>
            <div class="col-auto">
                <label class="col-form-label-sm">UNITS</label>
                <input type="number" class="col-form-control units" min="1" oninput="getGWA()"> 
            </div>
            <div class="col-auto">
                <label class="col-form-label-sm">GRADES</label>
                <input type="text" class="col-form-control grades" oninput="getGWA()">
            </div>
            <button class="col-auto add " onclick="add()"><i class="bi bi-plus-square"></i></button>
        </div>`
    );
    var previousContainer = document.querySelectorAll('.grade-container');
    previousContainer = previousContainer[previousContainer.length - 2];
    previousContainer.insertAdjacentHTML(
        'beforeend', 
        `<button class="col-auto remove" onclick="remove(${previousContainer.id})"><i class="bi bi-x"></i></button>`
    );
    var add = document.querySelectorAll('.add');
    add = add[add.length - 2];
    add.remove(); 
}

function remove(id){
    var row = document.getElementById(`${id}`)
    row.remove();
    getGWA();
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
    var grade = 0.00;
    var unit = 0;
    

    for(let i=0; i<grades.length; i++){
        unit = parseFloat(units[i].value) || 0;
        grade = parseFloat(grades[i].value) || 0;  
    }
    if (grades.length > 1){
        var lastgrade = parseFloat(grades[grades.length-1].value) || 0;
    } else {
        lastgrade = grade;
    }
    console.log(`No. ${grades.length}`);
        console.log(`last grade: ${lastgrade}`);
        if(lastgrade > 0){
            gwa += (grade * unit) / totalUnits;
            document.getElementById('gwa').innerHTML = gwa.toFixed(2);
        } 
}