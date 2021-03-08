<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body class="antialiased">
         <!--React root Dom -->
        <div id="app"></div>
         <!--React js styles -->
        <script src="{{asset('js/index.js')}}" defer></script>
    </body>
</html>
