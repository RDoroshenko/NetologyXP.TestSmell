var totalyDrunked = 0;

export function drink(volume) {
    totalyDrunked += volume;
    return volume;
}

export function sober() {
    totalyDrunked = 0;
}

export function isDrunked() {
    return totalyDrunked > 150;
}

export function getTotallyDrunked() {
    return totalyDrunked;
}

export function getMyCar() {

}

export function goToBar(car) {

}

export function showWhisky() {

}