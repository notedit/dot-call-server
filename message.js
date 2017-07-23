'use strict'


class Message
{
    static parse(raw)
    {
        let object;
        let message = {};


        object = JSON.parse(raw);

        message.id  = object.id;
        message.type = object.type;
        message.from = object.from;
        message.target = object.target;
        message.data = object.data || {};
        return message;
    }
    

}


module.exports  = Message;