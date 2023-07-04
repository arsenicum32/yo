const fs = require('fs');
const path = require('path');

const folderPath = './poetryoncloth'; // Replace with the actual folder path

const prefix = 'poetryoncloth-'; // The new filename prefix
const padding = 3; // Number of digits to pad the index with

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.sort(); // Sort the files alphabetically

  files.forEach((filename, index) => {
    if (filename.endsWith('.jpg')) {
      const fileExtension = path.extname(filename);
      const newIndex = (index + 1).toString().padStart(padding, '0');
      const newFilename = `${prefix}${newIndex}${fileExtension}`;

      const oldPath = path.join(folderPath, filename);
      const newPath = path.join(folderPath, newFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error renaming file:', err);
        }
      });
    }
  });

  console.log('Files renamed successfully.');
});
