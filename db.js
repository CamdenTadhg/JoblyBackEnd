"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

DB_URI = getDatabaseUri();

db.connect();

module.exports = db;