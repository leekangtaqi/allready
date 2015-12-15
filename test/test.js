var Ar = require('../lib');
var ar = null;
var assert = require('chai').assert;

describe('all ready', function(){
    beforeEach(function(done){
        ar = new Ar();
        done();
    });

    it('custom service', function(done){
        ar.add('test', null, function onUp(){
            ar.up('test');
        }, function onDown(){
            setTimeout(function(){
                ar.down('test');
            }, 2000)
        });
        ar.ready(function(){
            assert.equal(ar.getReadyCount(), 1);
        }).disconnect(function(id){
            assert.equal(id, 'test');
            done();
        })
    });
});