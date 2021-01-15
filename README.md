#Easymd

Before running the project, verify the permisions of the files (if they can be edited by your user). In linux you can use the command `sudo chmod 777 -R *.` when in the root of the project. 

## How to run without Docker

In order to run without docker, you need to have PHP Cli on your command line. After, run `php -S localhost:8080`.

## How to run using Docker

To run the application in development, you can run these commands 

```bash
cd [my-app-name]
php composer.phar start
```

Or you can use `docker-compose` to run the app with `docker`, so you can run these commands:
```bash
cd [my-app-name]
docker-compose up -d
```

To install the dependencies from the project, either use the command `php composer.phar update` from the 
root of the project in your console, or go into docker console by running 
` docker exec -it easymd_slim_1 /bin/sh` in the root of the project and then run
`composer update` inside it.

After that, open `http://localhost:8080` in your browser.

### Notes
- this line of html seems interesting `<img src="{{app.baseUrl}}/img/img.png" width="60" height="30" class="d-inline-block align-top" alt="">`
- Do the same page content mechanics from redefeminina in here.
