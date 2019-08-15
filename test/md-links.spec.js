const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLiks("../README.md"))toBe(true)
  });

  it('should return true for a valid .md file', () => {
    expect(mdLiks("../index.js"))toBe(false)
  });
}
  


});
