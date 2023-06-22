# IoTQGenParser

This Node.js application sets up a server that converts an XML file to JSON format and provides the JSON data through a REST API.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/your-username/your-repo.git
```

2. Navigate to the project directory

```shall
cd your-repo
```
3. Install the dependencies

- Place your XML file in the project directory. 
- Start the server:

``` shell
npm start
```
- The server will run on port 1337. You can access the JSON data by making a GET request to http://localhost:1337

## Configuration

- You can modify the server's behavior by adjusting the following variables in the index.js file:

- xmlFile: Specifies the path to the XML file to be parsed. By default, it looks for IoTSySML_QM.xml in the project directory.
- jsonFields: An array of fields to be extracted from the parsed JSON. By default, it extracts the @_Name field.
