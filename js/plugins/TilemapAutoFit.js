//=============================================================================
// Tilemap Auto Fit to Scale
// TilemapAutoFit.js
// Version: 1.00
//=============================================================================
var Imported = Imported || {};
Imported.TilemapAutoFit = true;

var Kien = Kien || {};
Kien.TilemapAutoFit = {};
//=============================================================================
/*:
 * @plugindesc Let Tilemap Automatically fit the scale of screen. Prevent Black
 * Border of map
 * @author Kien
 *
 * @help
 * ============================================================================
 * Tilemap Auto Fit to Scale (English Document)
 * ============================================================================
 * 		Let Tilemap automatically resize it self to fit the scale of screen.
 * ============================================================================
 * * End of Document (English Document)
 * ============================================================================
 * ============================================================================
 * * タイルマップを自動的にスケールに合わせるプラグイン（Japanese Document）
 * ============================================================================
 * 　　デフォルトでついてる画面ズーム機能のスケールに合わせてTilemapのサイズを
 * 自動で変化させます。
 * ============================================================================
 * * ドキュメント終了 (Japanese Document)
 * ============================================================================
 * ============================================================================
 * * 令Tilemap自适应缩放（Chinese Document）
 * ============================================================================
 *     在Tilemap更改缩放率时自动更改Tilemap的大小来解决黑框问题
 * ============================================================================
 * * 文档结束 (Chinese Document)
 * ============================================================================
 */

Kien.TilemapAutoFit.Spriteset_Base_updatePosition = Spriteset_Base.prototype.updatePosition;
Spriteset_Base.prototype.updatePosition = function() {
    Kien.TilemapAutoFit.Spriteset_Base_updatePosition.call(this);
    this.setFrame(0,0,Graphics.width / this.scale.x,Graphics.height / this.scale.y);
};

Kien.TilemapAutoFit.Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	Kien.TilemapAutoFit.Spriteset_Map_createTilemap.call(this);
	this._tilemapWidth = this._tilemap.width;
	this._tilemapHeight = this._tilemap.height;
};

Kien.TilemapAutoFit.Spriteset_Map_updateTilemap = Spriteset_Map.prototype.updateTilemap; 
Spriteset_Map.prototype.updateTilemap = function() {
	Kien.TilemapAutoFit.Spriteset_Map_updateTilemap.call(this);
	this._tilemap.width = Math.round(this._tilemapWidth / this.scale.x);
	this._tilemap.height = Math.round(this._tilemapHeight / this.scale.y);
};