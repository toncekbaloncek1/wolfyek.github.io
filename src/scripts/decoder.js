const input = document.getElementById('input');

const Canvas = document.getElementById("myCanvas");
const ctx = Canvas.getContext("2d");

const res = 64

input.addEventListener('change', () => {
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
        const file = e.target.result;
        let lines = file.split(/\r\n|\n/)
        const data = lines.map(line => line.replace(/\s/g, '').split(','))
        const size = data.shift()[0].split('x')

        ctx.canvas.width = size[0] * res
        ctx.canvas.height = size[1] * res

        data.forEach(px => {
            const [x, y, col] = px
            ctx.fillStyle = '#' + col
            ctx.fillRect(x * res, y * res, res, res);
        });
    };

    reader.onerror = (e) => alert(e.target.error.name);

    reader.readAsText(file);
});