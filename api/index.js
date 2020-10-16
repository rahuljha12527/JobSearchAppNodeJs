const createServer = require("http").createServer;
const url = require("url");
const axios = require("axios");
const chalk = require("chalk");
const config = require("./config");

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

//search
const decodeParams=searchParams=>Array
    .from(searchParams.keys())
    .reduce((acc,key)=>({
       ...acc,
       [key]:searchParams.get(key)     
    }),{});

const server=createServer((req,res)=>{
       const requestURL=url.parse(req.url);
       //
       const decodeParams=decodeParams(new URLSearchParams(requestURL.search));

});
