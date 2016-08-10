var q = require("q");
var mongo_db = require("../common/mongo_database");
var mongo_conn = mongo_db.getConnection();

function getALlPosts(){
    var defer = q.defer();

    mongo_conn.then(function(db){
        // Get the documents collection
        var posts = db.collection('posts');

        var query = {};
        posts.find(query).toArray(function(err, docs) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(docs);
            }
        });

    });

    return defer.promise;
}

function addPost(post){
    var defer = q.defer();

    mongo_conn.then(function(db){
        // Get the documents collection
        var posts = db.collection('posts');

        // Insert new user from controller
        posts.insertOne(post, function(err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });

    });

    return defer.promise;
}

function getPostById(id){
    var objID = require("mongodb").ObjectID(id);

    var defer = q.defer();

    mongo_conn.then(function(db){
        // Get the documents collection
        var posts = db.collection('posts');

        // Insert new user from controller
        var query = {_id: objID};

        posts.find(query).toArray(function(err, post) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(post);
            }
        });

    });

    return defer.promise;
}

function updatePost(params){
    var defer = q.defer();

    var objID = require("mongodb").ObjectID(params.id);
    // params._id = objID;
    delete params.id;

    mongo_conn.then(function(db){
        // Get the documents collection
        var posts = db.collection('posts');

        // Insert new user from controller
        var query = {_id: objID};

        posts.updateOne(query, {$set: params }, function(err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });

    });

    return defer.promise;
}


function deleleById(_id){
    var defer = q.defer();

    var objID = require("mongodb").ObjectID(_id);

    mongo_conn.then(function(db){
        // Get the documents collection
        var posts = db.collection('posts');

        // Insert new user from controller
        var query = {_id: objID};

        posts.deleteOne(query, function(err, result) {
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });

    });

    return defer.promise;
}


module.exports = {
    getALlPosts: getALlPosts,
    addPost: addPost,
    getPostById: getPostById,
    updatePost: updatePost,
    deleleById: deleleById
}











