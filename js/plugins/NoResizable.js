//=============================================================================
// No Resizable
// NoResizable.js
// Version: 1.00
//=============================================================================
var Imported = Imported || {};
Imported.Kien_NoResizable = true;

var Kien = Kien || {};
Kien.noResizable = {};

//=============================================================================
/*:
 * @plugindesc Make your game not resizable by player, and provide a custom 
 * resolution
 * @author Kien

 * @param Screen Width
 * @desc The width of the screen
 * @default 816

 * @param Screen Height
 * @desc The height of the screen
 * @default 624
 */

Kien.noResizable.parameters = PluginManager.parameters("NoResizable");
SceneManager._screenWidth = Kien.noResizable.parameters["Screen Width"];
SceneManager._screenHeight = Kien.noResizable.parameters["Screen Height"];
SceneManager._boxWidth = SceneManager._screenWidth;
SceneManager._boxHeight = SceneManager._screenHeight;


Kien.noResizable.SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
	Kien.noResizable.SceneManager_initialize.call(this);
	if(Utils.isNwjs()){
		var win = require("nw.gui").Window.get();
		win.resizeBy(SceneManager._screenWidth,SceneManager._screenHeight);
		win.setMaximumSize(SceneManager._screenWidth,SceneManager._screenHeight);
		win.setMinimumSize(SceneManager._screenWidth,SceneManager._screenHeight);
	}
};