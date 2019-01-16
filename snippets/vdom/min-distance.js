const asTable = require ('as-table')

/**
 * 动态规划算法
 * @param {string} a
 * @param {string} b
 * @returns {number} 从 a → b 的最小编辑距离
 */
function minDistance(a, b) {
    let lenA = a.length;
    let lenB = b.length;
    let d = [];
    d[0] = [];

    for (let j = 0; j <= lenB; j++) {
        d[0].push(j);
    }

    for (let i = 0; i <= lenA; i++) {
        if (d[i]) {
            d[i][0] = i;
        } else {
            d[i] = [];
            d[i][0] = i;
        }
    }

    for (let i = 1; i <= lenA; i++) {
        for (let j = 1; j <= lenB; j++) {
            if (a[i - 1] === b[j - 1]) {
                d[i][j] = d[i - 1][j - 1];
            } else {
                let m1 = d[i - 1][j] + 1;
                let m2 = d[i][j - 1] + 1;
                let m3 = d[i - 1][j - 1] + 1;
                d[i][j] = Math.min(m1, m2, m3);
            }
            if (i > 1 && j > 1) {
                if (a[i] === b[j - 1] && a[i - 1] === b[j]) {
                    d[i][j] = Math.min(d[i - 2][j - 2], d[i][j]);
                }
            }
        }
    }
    // console.log(d)

    return d[lenA][lenB];
}


console.log( minDistance('houfeng', 'houfeng2') );
console.log( minDistance('houfeng', '22houfeng') );
console.log( minDistance('houfeng', 'huofeng') ); // move
console.log( minDistance('houf', 'hfou') ); // move2 // 待优化