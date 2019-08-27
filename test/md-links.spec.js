
const mdLinks = require('../index.js');

describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks.extencion("../README.md")).toBe(true)
  });

  it('should return false for a valid .md file', () => {
    expect(mdLinks.extencion("../index.js")).toBe(false)
  });
  
  it('should return content for a directory', ()=>{
    mdLinks.directoryContent("/home/laboratoria-172/Documentos/Laboratoria/GDL003-md-links/k"), (File)=>{
      expect(File).toBe('README.md')
    }
  })
});
