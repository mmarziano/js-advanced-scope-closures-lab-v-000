function produceDrivingRange(range) {
    return function(point1, point2) {
        let distance = parseInt(point2) - parseInt(point1);
        if (range >= distance) {
            return `within range by ${range - distance}`
        } else {
            return `${distance - range} blocks out of range`;
        };
    };
}

function produceTipCalculator(percent) {
    return function(total) {
        return total * percent;
    };
}


function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}

const Driver = createDriver();