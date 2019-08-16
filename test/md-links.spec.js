
const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks("../README.md")).toBe(true)
  });

  it('should return false for a valid .md file', () => {
    expect(mdLinks("../index.js")).toBe(false)
  });
});
