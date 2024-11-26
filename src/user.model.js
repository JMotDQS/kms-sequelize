const { Sequelize, DataTypes } = require("sequelize");
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

const User = sequelize.define("users", {
	pk_id: {
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: DataTypes.UUID,
		unique: true
	},
	created_date: {
		type: DataTypes.DATE,
		allowNull: false
	},
	emp_id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	last_name: {
		type: DataTypes.STRING,
		allowNulls: false
	},
	middle_initial: {
		type: DataTypes.STRING,
		allowNulls: true
	}
});

sequelize.sync().then(() => {
	console.log('users table created successfully!');
}).catch((error) => {
	console.error('Unable to create table : ', error);
});