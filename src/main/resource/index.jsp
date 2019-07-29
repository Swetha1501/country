<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body body onload="app.FetchAll()">
    <script src="country.js"></script>
    
    
    <form action="javascript:void(0);" method="POST" onsubmit="app.saveorupdate()">
        <label>Country id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" name="id" id="id"> <br>
        <label>Country name: </label>
        <input type="text" name="name" id="name"><br>
        <button id="btn">Add</button>
    </form>


    <hr>
    <table>
            <th>ID</th>
            <th>NAME</th>
            <th>OPERATION</th>
        <tbody id="countries">
            
        </tbody>
    </table>
    
</body>
</html>>
</html>
