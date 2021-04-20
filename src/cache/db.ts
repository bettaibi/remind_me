// @ts-ignore
import Localbase from 'localbase';

let db = new Localbase('remindMe');

db.config.debug = false

export default db;