import pool from '../connection';

const insertAdmin = `insert into users (name, email, phone, address, password, usertype) 
values ('Admin', 'admin@gmail.com', '08082300954', 'Andela EPIC Tower', 'adminuser', 'admin')`;

class InsertAdminHandler {
  static createAdmin() {
    const create = pool.query(insertAdmin)
      .then((result => console.log(`Admin account ${result.command}ED`)))
      .catch((error) => {
        console.log(error);
      });
    return create;
  }
}

const { createAdmin } = InsertAdminHandler;

export default createAdmin;