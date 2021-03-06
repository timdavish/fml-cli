# FML CLI [![travis][travis]][travis-url]

A cli for serving [fml](http://www.fmylife.com/) stories to your terminal.

## Install

```bash
$ npm install -g fml-cli
```

## Usage

```
$ fml --help

  Usage
    fml [command] [option]

    The command argument is optional. If no command is provided,
    then the random command will be run by default.

  Commands
    random               Serve random fml
    top                  Serve top fml

  Options
    --search, -s         Add search term
    --version, -v        Print version
    --help, -h           Print help

  Examples
    fml                  # Print random fml
    fml top              # Print top fml
    fml -s meme          # Print searched fml
```

[travis]: https://travis-ci.org/timdavish/fml-cli.svg
[travis-url]: https://travis-ci.org/timdavish/fml-cli
