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
    var gwa = 0.00;
    const totalUnits = getUnits(units);


    for(var i=0; i<grades.length; i++){
        const unit = parseFloat(units[i].value) || 0;
        const grade = parseFloat(grades[i].value) || 0;
        console.log(grades[i+=1].value);
        if(grade > 0){
            console.log(true);
            gwa += (grade * unit) / totalUnits;
            document.getElementById('gwa').innerHTML = gwa.toFixed(2);
        }
    }
}