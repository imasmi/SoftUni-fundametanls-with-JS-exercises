function extractFile(path){
    let file = path.split("\\");
    file = file[file.length - 1].split(".");
    let filename = "";
    for (let i = 0; i < file.length - 1; i++) {
        filename += file[i] + ".";
    }
    console.log(`File name: ${filename.substring(0, filename.length - 1)}`);
    console.log(`File extension: ${file[file.length - 1]}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.min.cs');