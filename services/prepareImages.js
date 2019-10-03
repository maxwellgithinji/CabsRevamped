import * as RNFS from 'react-native-fs';
export const PrepareImages = () => {
  // const files = fs
  //   .readdirSync('../assets/images')
  //   .filter(x => x.includes('png'));
  // const ex =
  //   '{\n' +
  //   files.map(x => `"${x.split('.png')[0]}": require("./${x}"),`).join('\n') +
  //   '}';
  // const res = 'export default ' + ex;
  // fs.writeFileSync('../assets/images/index.js', res);
  // require the module

  RNFS.readDir(RNFS.ExternalStorageDirectoryPath)
    .then(result => {
      console.log('GOT RESULT', result);
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then(statResult => {
      if (statResult[0].isFile()) {
        return RNFS.readFile(statResult[1], 'utf8');
      }
      return 'no file';
    })
    .then(contents => {
      console.log(contents);
    })
    .catch(err => {
      console.log(err.message, err.code);
    });

  // var RNFS = require('react-native-fs');

  // // create a path you want to write to
  // var path = RNFS.DocumentDirectoryPath + '/test.txt';

  // // write the file
  // RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
  //   .then(success => {
  //     console.log('FILE WRITTEN!', success);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });
};
