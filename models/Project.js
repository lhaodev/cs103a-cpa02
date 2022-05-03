'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var projectSchema = Schema( {
  userId: ObjectId,
  projectName: String,
  description:String,
  teamLeader: String,
  codingLanguage: String,
  completed: Boolean,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Project', projectSchema );