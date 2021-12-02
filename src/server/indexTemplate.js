export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="/static/client.js" type="application/javascript"></script>
    <title>React-ssr</title>
</head>
<body>
    <noscript>You must enable JavaScript to use this application.</noscript>
    <div id="root">${content}</div>
</body>
</html>
`