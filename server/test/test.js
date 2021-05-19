var supertest = require("supertest");
var should = require("should");
const fs = require("fs");

// This agent refers to PORT where the program is running.

var server = supertest.agent("http://localhost:5000");

// UNIT test begin

describe("Testing App",function(){

    describe("Home Page", function(){

        // #1 should return home page
        it("Return home page",function(done){
          // calling home page
          server
          .get("/")
          .expect(200) // THis is HTTP response
          .end(function(err,res){
            // HTTP status should be 200
            res.status.should.equal(200);
            done();
          });
        });
    });

    describe("Register API", function(){

        // it("Return successful on valid inputs",function(done){
        
        //   server
        //   .post("/users/register")
        //   .set('Content-Type', 'application/x-www-form-urlencoded')
        //   .send({ name: 'name', email: 'name2@gmail.com', password: 'password', password2: 'password' })
        //   .end(function(err,res){
        //     res.status.should.equal(200);
        //     done();
        //   });
        // });
        
        it("Return Unsuccessful on Invalid inputs",function(done){
        
            server
            .post("/users/register")
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ name: 'name', email: 'name1gmail.com', password: 'password', password2: 'password' })
            .end(function(err,res){
              res.status.should.equal(400);
              done();
            });
          });
        
    });

    describe("Login API", function(){

        it("Return successful on valid credentials",function(done){
        
          server
          .post("/users/login")
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ email: 'name@gmail.com', password: 'password'})
          .end(function(err,res){
            res.status.should.equal(200);
            done();
          });
        });

        it("Return Unsuccessful on Invalid credentials",function(done){
        
            server
            .post("/users/login")
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ email: 'what@gmail.com', password: 'passw'})
            .end(function(err,res){
              res.status.should.equal(404);
              done();
            });
          });

    });

    // describe("Upload API", function(){

    //     it("Return successful upload",function(done){
        
    //       server
    //       .post("/upload")
    //       .set('Content-Type', 'multipart/form-data')
    //       .field('description', 'Some description')
    //       .field('roomType', 'Large')
    //       .field('height', '16 feet')
    //       .field('width', '15 feet')
    //       .field('price', '5500')
    //       .attach('image', '/home/lakshay/Downloads/room8.jpeg')
    //       .expect(200)
    //       .end(function(err,res){
    //         res.status.should.equal(200);
    //         done();
    //       });
    //     });
    // });

    describe("Search API", function(){

        it("Return successful search",function(done){
        
          server
          .get("/search")
          .expect(200)
          .end(function(err,res){
            res.status.should.equal(200);
            done();
          });
        });
    });

});