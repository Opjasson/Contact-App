const fs = require('fs');

// Read line core module
const readLine = require('readline');

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

// membuat folder data
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]','utf-8')
}


const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama)
        });
        
    });
}

const simpanContact = (nama, noHp, email) => {
    const contact = { nama,noHp,email}
    const file= fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file)

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
    console.log('Terimakasih sudah memasukan data')
    console.log(contacts)
    rl.close()
}

module.exports = {tulisPertanyaan, simpanContact}