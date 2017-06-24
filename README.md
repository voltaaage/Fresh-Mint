## Setup

```sh
$ bundle
$ yarn install
```

## Run the application
This project uses webpacker to compile the React front-end. In development, you'll need to run `./bin/webpack-dev-server` in a separate terminal from `./bin/rails server` to have js files compiled as you make changes.

```sh
./bin/webpack-dev-server
./bin/rails server
```

Alternatively, you can run Foreman:

```sh
foreman start
```

The application will run at `http://localhost:5000`

## Dev
In one terminal run:
```
./bin/webpack-dev-server --host 127.0.0.1
```


