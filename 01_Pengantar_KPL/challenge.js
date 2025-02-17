import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("siapa nama kamu? ", (nama) => {
  console.info(`Hallo ${nama}`);
  input.question("jurusan kamu? ", (jurusan) => {
    console.info(`saya jurusan ${jurusan}`);
    input.question("kampus kamu? ", (kampus) => {
      console.info(`saya di kampus ${kampus}`);
      input.question("umur kamu? ", (umur) => {
        console.info(`saya berumur ${umur}`);
        input.close();
      });
    });
  });
});
