'use strict';

const should = require('chai').should();
const { describe, suite, it } = require('mocha');
const greet = require('../../hash-tables/greet.js');

describe('Hash Table', () => {
  suite('#greet', () => {
    it('should greet user in English if the provided lang is "English"', () => {
      greet('english').should.equal('Welcome a Miami.');
    });

    it('should greet user in Dutch if the provided lang is "dutch"', () => {
      greet('dutch').should.equal('Welkom a Miami.');
    });

    it('should greet the user in English for invalid inputs', () => {
      greet('bob').should.equal('Welcome a Miami.');
    });
  });
});



//Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
//Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
//Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
