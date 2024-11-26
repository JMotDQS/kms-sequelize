const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	'kms_v2_mysql',
	'root',
	'L0rdOfL1ghtn!ng',
	{
		host: 'localhost',
		port: 3369,
		dialect: 'mysql'
	}
);

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});