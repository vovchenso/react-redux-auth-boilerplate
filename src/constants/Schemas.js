import { Schema, arrayOf } from 'normalizr';


const usersSchema = new Schema('users');
const dataSchema = new Schema('data');

const Schemas = {
    USER: dataSchema,
    USER_ARRAY: arrayOf(usersSchema),

    DATA: dataSchema,
    DATA_ARRAY: arrayOf(dataSchema),
};

export default Schemas;