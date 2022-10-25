const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.write(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pefumes online</title>
        <link rel="shortcut icon" href="icons/icons8-perfume-100.png" type="image/x-icon">
        <!-- font link  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <!-- css link  -->
        <link rel="stylesheet" href="estilo/style.css">
        <link rel="stylesheet" href="estilo/mobile.css">
    </head>
    <body>
    <h1 style="backgroud:red">Ola Mundo</h1>
    </body>
    </html>
    `)

    res.end()
});

srv.listen(3001, () => {
    console.log('Servidor Funcionado!')
});