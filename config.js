
module.exports = {
    
    debug  : '*',
    redis  :  {
        port:6379,
        host:'127.0.0.1'
    },
	web:
	{
		webPort: 4888,
		hostname: '0.0.0.0',
		webStaticPath: 'public'
	}
	

};
