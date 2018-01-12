# Notes application

## Description

This application is primarily a sandbox app with Node.js. Its function is to read, write, and save command line inputs into a JSON file. Each note is placed inside an object which possess a title and body property. 

Utilizes the following:
* fs
* lodash
* yargs

## Usage

#### App utilizes four commands:
* add (Adds new note to file)
* list (Lists all notes inside of file)
* read (Reads a specific note based on input of title from command line)
* remove (Removes a specific note based on input of title from command line)

#### Syntax for commands
* add --title="Title1" --body="This is the body of Title1"
* list 
* read --title="Title1"
* remove --title="Title1"