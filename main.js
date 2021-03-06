const {app, BrowserWindow} = require('electron');
const path = require ('path');
const url = require('url');
// var mongoose = require('mongoose')
// 	,Schema = mongoose.Schema
// 	,ObjectId = Schema.ObjectId;

// mongoose.connect('mongodb://localhost/spineLine',{useMongoClient:true});

// var Reminder = require('../models/reminder')
//var reminderSchema = mongoose.model('Reminder', reminderSchema);

//init win
let win;

function createWindow(){
	//Create browser window
	win = new BrowserWindow({
		width: 800,
		height: 600,
		icon: __dirname+'/img/spine.jpg'
	});

	//load index.html
	win.loadFile('index.html');

	//Open devtools
	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

//Run create window function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	};
});

