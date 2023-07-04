const { fromPath } = require('pdf2pic');

const pdfPath = './poetryoncloth.pdf'; // Replace with the actual path to your PDF file
const savePath = './poetryoncloth'; // Replace with the desired output folder path

const options = {
  density: 100,
  saveFilename: "poetryoncloth",
  savePath,
  format: "jpg",
  width: 600,
  height: 600
}

const storeAsImage = fromPath(pdfPath, options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");

  return resolve;
});
