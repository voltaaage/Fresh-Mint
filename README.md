# Fresh Mint

## Project Goals
- Utilize the transaction data that Mint gathers from my personal accounts and
  provide a better visual experience in reviewing my expenses. Mint does a poor
job in displaying month by month information as well as visualizing expenses in
buckets of categories. This app seeks to improve that.
- Try out the react-rails gem and weigh the pros/cons vs other implementations


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


