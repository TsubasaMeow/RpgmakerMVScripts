var Tsubasa = Tsubasa || {}

Tsubasa.TBS_ButtonToCommonEvent = Tsubasa.TBS_ButtonToCommonEvent || {}

//=============================================================================
 /*:
 * @plugindesc This plugin helps combine a button with a common event in the game.
 * @author Tsubasa (https://www.pixiv.net/users/36515596)
 *
 *
 * @param Q
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param W
 * @type number
 * @min 0
 * @desc 键盘B对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 *
 * @param E
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param R
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param A
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param S
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param D
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @param F
 * @type number
 * @min 0
 * @desc 键盘A对应公共事件编号,0表示没有,最大为10000
 * @default 0
 *
 * @help
 * ============================================================================
 * 1.简介
 * 该脚本通过学习Yanfly的脚本制作而成，
 * 可以在游戏中将按钮和公共事件绑定。
 * 
 * 2.使用方法
 * 在右边修改对应的值可以指定触发公共事件的编号，
 * 公共事件编号在RpgmakerMv中可以直接查看。
 * 例如将第一行的值改成10，则按下Q键会触发公共事件10。
 * 
 * 3.其它
 * 感谢制作过程中muyoo(https://www.pixiv.net/users/44168048)提供的帮助。
 * 如果遇到bug请通过Pixiv私信汇报，谢谢。
 * ============================================================================
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================
Tsubasa.Parameters = PluginManager.parameters('Tsubasa_ButtonToCommonEvent');
Tsubasa.Param = Tsubasa.Param || {};

Tsubasa.Param.tsubasaKeyA = Number(Tsubasa.Parameters['A']);
if(Tsubasa.Param.tsubasaKeyA < 0){
	Tsubasa.Param.tsubasaKeyA = 0
}
if(Tsubasa.Param.tsubasaKeyA > 10000){
	Tsubasa.Param.tsubasaKeyA = 10000
}

Tsubasa.Param.tsubasaKeyS = Number(Tsubasa.Parameters['S']);
if(Tsubasa.Param.tsubasaKeyS < 0){
	Tsubasa.Param.tsubasaKeyS = 0
}
if(Tsubasa.Param.tsubasaKeyS > 10000){
	Tsubasa.Param.tsubasaKeyS = 10000
}

Tsubasa.Param.tsubasaKeyD = Number(Tsubasa.Parameters['D']);
if(Tsubasa.Param.tsubasaKeyD < 0){
	Tsubasa.Param.tsubasaKeyD = 0
}
if(Tsubasa.Param.tsubasaKeyD > 10000){
	Tsubasa.Param.tsubasaKeyD = 10000
}

Tsubasa.Param.tsubasaKeyF = Number(Tsubasa.Parameters['F']);

if(Tsubasa.Param.tsubasaKeyF < 0){
	Tsubasa.Param.tsubasaKeyF = 0
}
if(Tsubasa.Param.tsubasaKeyF > 10000){
	Tsubasa.Param.tsubasaKeyF = 10000
}

Tsubasa.Param.tsubasaKeyQ = Number(Tsubasa.Parameters['Q']);

if(Tsubasa.Param.tsubasaKeyQ < 0){
	Tsubasa.Param.tsubasaKeyQ = 0
}
if(Tsubasa.Param.tsubasaKeyQ > 10000){
	Tsubasa.Param.tsubasaKeyQ = 10000
}

Tsubasa.Param.tsubasaKeyW = Number(Tsubasa.Parameters['W']);
if(Tsubasa.Param.tsubasaKeyW < 0){
	Tsubasa.Param.tsubasaKeyW = 0
}
if(Tsubasa.Param.tsubasaKeyW > 10000){
	Tsubasa.Param.tsubasaKeyW = 10000
}

Tsubasa.Param.tsubasaKeyE = Number(Tsubasa.Parameters['E']);
if(Tsubasa.Param.tsubasaKeyE < 0){
	Tsubasa.Param.tsubasaKeyE = 0
}
if(Tsubasa.Param.tsubasaKeyE > 10000){
	Tsubasa.Param.tsubasaKeyE = 10000
}

Tsubasa.Param.tsubasaKeyR = Number(Tsubasa.Parameters['R']);
if(Tsubasa.Param.tsubasaKeyR < 0){
	Tsubasa.Param.tsubasaKeyR = 0
}
if(Tsubasa.Param.tsubasaKeyR > 10000){
	Tsubasa.Param.tsubasaKeyR = 10000
}

//=============================================================================
// rpg_core
//=============================================================================
Input.keyMapper['65'] = 'keyA'
Input.keyMapper['83'] = 'keyS'
Input.keyMapper['68'] = 'keyD'
Input.keyMapper['70'] = 'keyF'
if(Tsubasa.Param.tsubasaKeyQ > 0){
	Input.keyMapper['81'] = 'keyQ'
}
if(Tsubasa.Param.tsubasaKeyW > 0){
	Input.keyMapper['87'] = 'keyW'
}
Input.keyMapper['69'] = 'keyE'
Input.keyMapper['82'] = 'keyR'

Tsubasa.isCommonEventWorking = false

Tsubasa.TBS_ButtonToCommonEvent.Input_onKeyDown = Input._onKeyDown
Input._onKeyDown = function(event) {
    Tsubasa.TBS_ButtonToCommonEvent.Input_onKeyDown.call(this, event);
	var buttonName = this.keyMapper[event.keyCode];
	var commonEventId = 0
    if (buttonName === 'keyA'){
		commonEventId = Tsubasa.Param.tsubasaKeyA
	}
    if (buttonName === 'keyS'){
		commonEventId = Tsubasa.Param.tsubasaKeyS
	}
    if (buttonName === 'keyD'){
		commonEventId = Tsubasa.Param.tsubasaKeyD
	}
    if (buttonName === 'keyF'){
		commonEventId = Tsubasa.Param.tsubasaKeyF
	}
    if (buttonName === 'keyQ'){
		commonEventId = Tsubasa.Param.tsubasaKeyQ
	}
    if (buttonName === 'keyW'){
		commonEventId = Tsubasa.Param.tsubasaKeyW
	}
    if (buttonName === 'keyE'){
		commonEventId = Tsubasa.Param.tsubasaKeyE
		
	}
    if (buttonName === 'keyR'){
		commonEventId = Tsubasa.Param.tsubasaKeyR
	}
	if(commonEventId > 0 && commonEventId < $dataCommonEvents.length){
		//if(!Tsubasa.isCommonEventWorking){
		//	$gameTemp.reserveCommonEvent(commonEventId)
		//}
		if($gameMap._interpreter._waitMode == ""){
			$gameTemp.reserveCommonEvent(commonEventId)
		}
	}
};

/*
Tsubasa.TBS_ButtonToCommonEvent.Game_Temp_prototype_reserveCommonEvent = Game_Temp.prototype.reserveCommonEvent
Game_Temp.prototype.reserveCommonEvent = function(commonEventId) {
    Tsubasa.isCommonEventWorking = true
	Tsubasa.TBS_ButtonToCommonEvent.Game_Temp_prototype_reserveCommonEvent.call(this, commonEventId)
};

Tsubasa.TBS_ButtonToCommonEvent.Game_Interpreter_requestImages = Game_Interpreter.requestImages
Game_Interpreter.requestImages = function(list, commonList){
    Tsubasa.TBS_ButtonToCommonEvent.Game_Interpreter_requestImages.call(this, list, commonList)
    Tsubasa.isCommonEventWorking = false
};
*/

//=============================================================================
// End of File
//=============================================================================
