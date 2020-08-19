export function randomIntBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function bytesToSize(bytes) {
    let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) {
        return '0 Byte';
    }
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
