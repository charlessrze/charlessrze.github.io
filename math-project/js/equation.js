let equationResult = document.getElementById('equation_result');

document.getElementById('equation_form').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = document.getElementById('equation_a').value;
    const b = document.getElementById('equation_b').value;
    const c = document.getElementById('equation_c').value;

    let D = Math.pow(b, 2);
    const subtraction = 4 * a * c;
    D = D - subtraction;

    if(D <= 0)
        return equationResult.innerHTML = "Решения нет";

    const firstX = (-b + Math.sqrt(D)) / (2 * a);
    const secondX = (-b - Math.sqrt(D)) / (2 * a);

    equationResult.innerHTML = firstX + ", " + secondX;
});