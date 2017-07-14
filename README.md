# Fresh Mint

## Project Goals
- Utilize the transaction data that Mint gathers from my personal accounts and
  provide a better visual experience in reviewing my expenses. Mint does a poor
job in displaying month by month information as well as visualizing expenses in
buckets of categories. This app seeks to improve that.


## Setup

```sh
$ docker-compose build
```
 * in the event that the above does not work, you can still run the necessary
   steps manually

```sh
$ docker-compose run --rm web bash
$ npm install
$ bundle install
$ rails db:setup db:migrate
```

## Run the application
This project uses webpack to compile the React front-end. Running the docker
instance should compile your assets for you

```sh
$ docker-compose run --rm --service-ports web
```

The application will run at `http://fresh-mint.docker`

