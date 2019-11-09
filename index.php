<!DOCTYPE html>
<html>
  <head>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Dota Underlords</title>
    <meta charset="UTF-8" />
    <style>
    body  {
    background-image: url("jail_background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Blackadder ITC;
    font-size: 200%;
    }

    button {
    position: absolute;
    left: 100px;
    }

    </style>
  </head>
 
  <body>
    <h1 align = 'center' style="font-size:300%;">Today's Jailbirds</h1>
    <button id="button" type="button" class="btn btn-link" onclick="redrawJail()"><img src="refresh.png" style="width:125px;height:125px;"></button>
    <br>
    <div id="content" class="container"></div>
    <script src="index.js"></script>
</body>
</html>
