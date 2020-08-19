export const getColourBetween = (color1, color2, weight) => {
    var w = weight * 2 - 1;
    var w1 = (w + 1) / 2;
    var w2 = 1 - w1;
    return [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
}