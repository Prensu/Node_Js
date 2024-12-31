const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  try {
    const fileStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity // To recognize all line endings (CRLF, LF)
    });

    for await (const line of rl) {
      // Each line will be successively available here as 'line'
      console.log(`Line from file: ${line}`);
      // Add any processing you need for each line here.
    }
    console.log("File reading complete.");
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}

processLineByLine();