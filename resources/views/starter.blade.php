<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
    </head>

    <body>
        <div id="app">

            <el-container>
                <el-header>
                    <navbar-component></navbar-component>
                </el-header>

                <el-main>
                    <h1>{{ config('app.name') }}</h1>

                    <el-form label-width="120px">

                        <input-component
                            name="input"
                            label="this is a text field where you should enter your first name" :placeholder="test">
                        </input-component>

                        <textarea-component
                            name="textarea"
                            label="this is a text field"
                            :placeholder="test">
                        </textarea-component>

                        <date-component
                            name="date"
                            label="this is a date field">
                        </date-component>

                    </el-form>
                </el-main>

                <el-footer>
                    ©2018 Les Idées de Fous Inc.
                </el-footer>
            </el-container>

        </div>
    </body>

    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</html>