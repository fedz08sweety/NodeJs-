const  fs=required('fs');
let data="This is afile a collection"
+"of programmings languages.\n"
+"1.JAVA\n2. C++\n3. R";
fs.writefilesync("programming.txt",data);
console.log("file written successfully\n");
console.log("the writte has the following content:");
console.log(fs.readfilesync("programming.txt","utf8"));