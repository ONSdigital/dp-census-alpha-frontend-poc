export function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export function makeArrayList(list, maxLength) {
    let arrayList = list.join(" · ")
    if (arrayList.length > maxLength) {
        list.pop();
        arrayList = makeArrayList(list, maxLength)
    }
    return arrayList;
}