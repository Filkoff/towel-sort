module.exports = function towelSort (matrix) {
    
    const united = []
    if (!matrix) {
        return united
    }

    for (let i=0; i<matrix.length; i++) {
        if (i%2===0) {
            matrix[i].sort((a,b)=> {
                return a-b
        })} else {
            matrix[i].sort((a,b)=> {
            return b-a
            })}
        }
    for (k of matrix) {
        for (l of k) {
            united.push(l)
        }
    }

    return united
}
