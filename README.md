#Easymd

## How to run

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
After that, open `http://localhost:8080` in your browser.

Run this command in the application directory to run the test suite

```bash
php composer.phar test
```

That's it! Now go build something cool.

## How to update composer inside docker

If you take the `docker-compose` command you will have problems if you update
the composer.json file. It will not be updated automatically during the building
of the container, so eihter use the command `php composer.phar update` from the 
root of the project in your console, or go into docker console by running 
` docker exec -it easymd_slim_1 /bin/sh` in the rot of the project and then run
`composer update` inside it.


### Notes
- this line of html seems interesting `<img src="{{app.baseUrl}}/img/img.png" width="60" height="30" class="d-inline-block align-top" alt="">`
- Do the same page content mechanics from redefeminina in here.