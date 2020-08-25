export function randomIntBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomBetween(min, max) { // min and max included
    return Math.random() * (max - min + 1) + min;
}

export function bytesToSize(bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) {
        return '0 Byte';
    }
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export function getMinAndMaxCoordinates(coordinates) {
    let minLatitude = Array.isArray(coordinates[0][0][0]) ? coordinates[0][0][0][0] : coordinates[0][0][0]
    let minLongitude = Array.isArray(coordinates[0][0][1]) ? coordinates[0][0][0][1] : coordinates[0][0][1]
    let maxLatitude = Array.isArray(coordinates[0][0][0]) ? coordinates[0][0][0][0] : coordinates[0][0][0]
    let maxLongitude = Array.isArray(coordinates[0][0][1]) ? coordinates[0][0][0][1] : coordinates[0][0][1]
    let drillDown = (coordArray) => {
        if (Array.isArray(coordArray[0])) {
            for (let i = 0; i < coordArray.length; i++) {
                drillDown(coordArray[i]);
            }
        } else {
            if (coordArray[0] < minLatitude) {
                minLatitude = coordArray[0];
            }
            if (coordArray[0] > maxLatitude) {
                maxLatitude = coordArray[0];
            }
            if (coordArray[1] < minLongitude) {
                minLongitude = coordArray[1];
            }
            if (coordArray[1] > maxLongitude) {
                maxLongitude = coordArray[1];
            }
        }
    }
    drillDown(coordinates)
    // if (coordinates == null || coordinates[0] == null || coordinates[0][0] == null || coordinates[0][0][0] == null || coordinates[0][0][0][1] == null) {
    //     return null;
    // }

    // for (let i = 0; i < coordinates.length; i++) {
    //     for (let j = 0; j < coordinates[i].length; j++) {
    //         for (let k = 0; k < coordinates[j].length; k++) {
    //             if (coordinates[i][j][k][0] < minLatitude) {
    //                 minLatitude = coordinates[i][j][k][0];
    //             }
    //             if (coordinates[i][j][k][0] > maxLatitude) {
    //                 maxLatitude = coordinates[i][j][k][0];
    //             }
    //             if (coordinates[i][j][k][1] < minLongitude) {
    //                 minLongitude = coordinates[i][j][k][1];
    //             }
    //             if (coordinates[i][j][k][1] > maxLongitude) {
    //                 maxLongitude = coordinates[i][j][k][1];
    //             }
    //         }
    //     }
    // }
    return [[minLatitude, minLongitude], [maxLatitude, maxLongitude]]
}
