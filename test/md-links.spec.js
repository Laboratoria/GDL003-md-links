
const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks.extencion("../README.md")).toBe(true)
  });

  it('should return false for a valid .md file', () => {
    expect(mdLinks.extencion("../index.js")).toBe(false)
  });
  
  it()
});
