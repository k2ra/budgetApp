import Realm from 'realm';

export const Gastos ={
    name:TBL_GASTO,
    primaryKey:'id',
    properties: {
        id: 'int',
        description: 'string',
        amount: {type: 'decimal', default:0.00}
    }
}