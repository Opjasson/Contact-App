const contacts = require('./contact')

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukan nama anda : ');
    const noHp = await contacts.tulisPertanyaan('Masukan noHp anda : ');
    const email = await contacts.tulisPertanyaan('Masukan email anda : ');

    contacts.simpanContact(nama, noHp, email) 
   
}

main()


