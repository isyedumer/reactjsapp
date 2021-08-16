export function add(value, valuetoAdd) {
    var json = localStorage.getItem("data");
    var object = null;
    object = JSON.parse(json);
    let j = 0;
    for (var i = 0; i < object.length; i++) {
        if (i == value) {
            j = i;
        }
    }
    object[j].qatuntiy = eval(object[j].qatuntiy) + eval(valuetoAdd);

    localStorage.setItem("data", JSON.stringify(object));
    return JSON.parse(localStorage.getItem("data",));
}