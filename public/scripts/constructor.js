const head = document.getElementsByTagName('head')[0]
const body = document.getElementsByTagName('body')[0]

head.innerHTML = `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TicTac</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />`

body.innerHTML = `<div class="bg-dark text-white text-center">
    <h1>TicTac</h1>
    
        <iframe width="100%" height="600" src="https://tictac.digitalsamba.com/tictac" title="Video call" frameborder="0" allow="microphone; camera; autoplay; display-capture"></iframe></div>`
