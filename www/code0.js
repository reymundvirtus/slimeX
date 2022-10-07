gdjs.GameCode = {};
gdjs.GameCode.GDBackground0Objects1= [];
gdjs.GameCode.GDBackground0Objects2= [];
gdjs.GameCode.GDBackground0Objects3= [];
gdjs.GameCode.GDBackground1Objects1= [];
gdjs.GameCode.GDBackground1Objects2= [];
gdjs.GameCode.GDBackground1Objects3= [];
gdjs.GameCode.GDwallsObjects1= [];
gdjs.GameCode.GDwallsObjects2= [];
gdjs.GameCode.GDwallsObjects3= [];
gdjs.GameCode.GDtile0Objects1= [];
gdjs.GameCode.GDtile0Objects2= [];
gdjs.GameCode.GDtile0Objects3= [];
gdjs.GameCode.GDtile1Objects1= [];
gdjs.GameCode.GDtile1Objects2= [];
gdjs.GameCode.GDtile1Objects3= [];
gdjs.GameCode.GDtile2Objects1= [];
gdjs.GameCode.GDtile2Objects2= [];
gdjs.GameCode.GDtile2Objects3= [];
gdjs.GameCode.GDstone5Objects1= [];
gdjs.GameCode.GDstone5Objects2= [];
gdjs.GameCode.GDstone5Objects3= [];
gdjs.GameCode.GDplantObjects1= [];
gdjs.GameCode.GDplantObjects2= [];
gdjs.GameCode.GDplantObjects3= [];
gdjs.GameCode.GDplayerObjects1= [];
gdjs.GameCode.GDplayerObjects2= [];
gdjs.GameCode.GDplayerObjects3= [];
gdjs.GameCode.GDstone1Objects1= [];
gdjs.GameCode.GDstone1Objects2= [];
gdjs.GameCode.GDstone1Objects3= [];
gdjs.GameCode.GDstone2Objects1= [];
gdjs.GameCode.GDstone2Objects2= [];
gdjs.GameCode.GDstone2Objects3= [];
gdjs.GameCode.GDstone6Objects1= [];
gdjs.GameCode.GDstone6Objects2= [];
gdjs.GameCode.GDstone6Objects3= [];
gdjs.GameCode.GDtile3Objects1= [];
gdjs.GameCode.GDtile3Objects2= [];
gdjs.GameCode.GDtile3Objects3= [];
gdjs.GameCode.GDtileplant2Objects1= [];
gdjs.GameCode.GDtileplant2Objects2= [];
gdjs.GameCode.GDtileplant2Objects3= [];
gdjs.GameCode.GDplant1Objects1= [];
gdjs.GameCode.GDplant1Objects2= [];
gdjs.GameCode.GDplant1Objects3= [];
gdjs.GameCode.GDstone4Objects1= [];
gdjs.GameCode.GDstone4Objects2= [];
gdjs.GameCode.GDstone4Objects3= [];
gdjs.GameCode.GDwaterObjects1= [];
gdjs.GameCode.GDwaterObjects2= [];
gdjs.GameCode.GDwaterObjects3= [];
gdjs.GameCode.GDwalls01Objects1= [];
gdjs.GameCode.GDwalls01Objects2= [];
gdjs.GameCode.GDwalls01Objects3= [];
gdjs.GameCode.GDstoneObjects1= [];
gdjs.GameCode.GDstoneObjects2= [];
gdjs.GameCode.GDstoneObjects3= [];
gdjs.GameCode.GDwalls02Objects1= [];
gdjs.GameCode.GDwalls02Objects2= [];
gdjs.GameCode.GDwalls02Objects3= [];
gdjs.GameCode.GDwalls0Objects1= [];
gdjs.GameCode.GDwalls0Objects2= [];
gdjs.GameCode.GDwalls0Objects3= [];
gdjs.GameCode.GDwalls1Objects1= [];
gdjs.GameCode.GDwalls1Objects2= [];
gdjs.GameCode.GDwalls1Objects3= [];
gdjs.GameCode.GDstone3Objects1= [];
gdjs.GameCode.GDstone3Objects2= [];
gdjs.GameCode.GDstone3Objects3= [];
gdjs.GameCode.GDtileplantObjects1= [];
gdjs.GameCode.GDtileplantObjects2= [];
gdjs.GameCode.GDtileplantObjects3= [];
gdjs.GameCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.GameCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.GameCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.GameCode.GDRightArrowRoundButtonObjects1= [];
gdjs.GameCode.GDRightArrowRoundButtonObjects2= [];
gdjs.GameCode.GDRightArrowRoundButtonObjects3= [];
gdjs.GameCode.GDTopArrowRoundButtonObjects1= [];
gdjs.GameCode.GDTopArrowRoundButtonObjects2= [];
gdjs.GameCode.GDTopArrowRoundButtonObjects3= [];
gdjs.GameCode.GDAButtonObjects1= [];
gdjs.GameCode.GDAButtonObjects2= [];
gdjs.GameCode.GDAButtonObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background1"), gdjs.GameCode.GDBackground1Objects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.GameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDplayerObjects2[0].getPointX("")), 0.05 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDBackground1Objects2.length !== 0 ? gdjs.GameCode.GDBackground1Objects2[0] : null), false, "Background", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.GameCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDplayerObjects2[0].getPointY("")), 0.05 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDplayerObjects1.length !== 0 ? gdjs.GameCode.GDplayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 1, 4260, 535, "", 0);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects2[k] = gdjs.GameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects2.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimation(0);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.GameCode.GDLeftArrowRoundButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightArrowRoundButtonObjects2Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.GameCode.GDRightArrowRoundButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopArrowRoundButtonObjects2Objects = Hashtable.newFrom({"TopArrowRoundButton": gdjs.GameCode.GDTopArrowRoundButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.GameCode.GDAButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.GameCode.GDLeftArrowRoundButtonObjects2});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightArrowRoundButtonObjects2Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.GameCode.GDRightArrowRoundButtonObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.GameCode.GDLeftArrowRoundButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.GameCode.GDRightArrowRoundButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.GameCode.GDTopArrowRoundButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDTopArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameCode.GDAButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.GameCode.GDLeftArrowRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.GameCode.GDRightArrowRoundButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDLeftArrowRoundButtonObjects2Objects, runtimeScene, true, true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRightArrowRoundButtonObjects2Objects, runtimeScene, true, true);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.GameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.GameCode.GDAButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.GameCode.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.GameCode.GDRightArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.GameCode.GDTopArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.GameCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeftArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRightArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTopArrowRoundButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDAButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBackground0Objects1.length = 0;
gdjs.GameCode.GDBackground0Objects2.length = 0;
gdjs.GameCode.GDBackground0Objects3.length = 0;
gdjs.GameCode.GDBackground1Objects1.length = 0;
gdjs.GameCode.GDBackground1Objects2.length = 0;
gdjs.GameCode.GDBackground1Objects3.length = 0;
gdjs.GameCode.GDwallsObjects1.length = 0;
gdjs.GameCode.GDwallsObjects2.length = 0;
gdjs.GameCode.GDwallsObjects3.length = 0;
gdjs.GameCode.GDtile0Objects1.length = 0;
gdjs.GameCode.GDtile0Objects2.length = 0;
gdjs.GameCode.GDtile0Objects3.length = 0;
gdjs.GameCode.GDtile1Objects1.length = 0;
gdjs.GameCode.GDtile1Objects2.length = 0;
gdjs.GameCode.GDtile1Objects3.length = 0;
gdjs.GameCode.GDtile2Objects1.length = 0;
gdjs.GameCode.GDtile2Objects2.length = 0;
gdjs.GameCode.GDtile2Objects3.length = 0;
gdjs.GameCode.GDstone5Objects1.length = 0;
gdjs.GameCode.GDstone5Objects2.length = 0;
gdjs.GameCode.GDstone5Objects3.length = 0;
gdjs.GameCode.GDplantObjects1.length = 0;
gdjs.GameCode.GDplantObjects2.length = 0;
gdjs.GameCode.GDplantObjects3.length = 0;
gdjs.GameCode.GDplayerObjects1.length = 0;
gdjs.GameCode.GDplayerObjects2.length = 0;
gdjs.GameCode.GDplayerObjects3.length = 0;
gdjs.GameCode.GDstone1Objects1.length = 0;
gdjs.GameCode.GDstone1Objects2.length = 0;
gdjs.GameCode.GDstone1Objects3.length = 0;
gdjs.GameCode.GDstone2Objects1.length = 0;
gdjs.GameCode.GDstone2Objects2.length = 0;
gdjs.GameCode.GDstone2Objects3.length = 0;
gdjs.GameCode.GDstone6Objects1.length = 0;
gdjs.GameCode.GDstone6Objects2.length = 0;
gdjs.GameCode.GDstone6Objects3.length = 0;
gdjs.GameCode.GDtile3Objects1.length = 0;
gdjs.GameCode.GDtile3Objects2.length = 0;
gdjs.GameCode.GDtile3Objects3.length = 0;
gdjs.GameCode.GDtileplant2Objects1.length = 0;
gdjs.GameCode.GDtileplant2Objects2.length = 0;
gdjs.GameCode.GDtileplant2Objects3.length = 0;
gdjs.GameCode.GDplant1Objects1.length = 0;
gdjs.GameCode.GDplant1Objects2.length = 0;
gdjs.GameCode.GDplant1Objects3.length = 0;
gdjs.GameCode.GDstone4Objects1.length = 0;
gdjs.GameCode.GDstone4Objects2.length = 0;
gdjs.GameCode.GDstone4Objects3.length = 0;
gdjs.GameCode.GDwaterObjects1.length = 0;
gdjs.GameCode.GDwaterObjects2.length = 0;
gdjs.GameCode.GDwaterObjects3.length = 0;
gdjs.GameCode.GDwalls01Objects1.length = 0;
gdjs.GameCode.GDwalls01Objects2.length = 0;
gdjs.GameCode.GDwalls01Objects3.length = 0;
gdjs.GameCode.GDstoneObjects1.length = 0;
gdjs.GameCode.GDstoneObjects2.length = 0;
gdjs.GameCode.GDstoneObjects3.length = 0;
gdjs.GameCode.GDwalls02Objects1.length = 0;
gdjs.GameCode.GDwalls02Objects2.length = 0;
gdjs.GameCode.GDwalls02Objects3.length = 0;
gdjs.GameCode.GDwalls0Objects1.length = 0;
gdjs.GameCode.GDwalls0Objects2.length = 0;
gdjs.GameCode.GDwalls0Objects3.length = 0;
gdjs.GameCode.GDwalls1Objects1.length = 0;
gdjs.GameCode.GDwalls1Objects2.length = 0;
gdjs.GameCode.GDwalls1Objects3.length = 0;
gdjs.GameCode.GDstone3Objects1.length = 0;
gdjs.GameCode.GDstone3Objects2.length = 0;
gdjs.GameCode.GDstone3Objects3.length = 0;
gdjs.GameCode.GDtileplantObjects1.length = 0;
gdjs.GameCode.GDtileplantObjects2.length = 0;
gdjs.GameCode.GDtileplantObjects3.length = 0;
gdjs.GameCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.GameCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.GameCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.GameCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.GameCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.GameCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.GameCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.GameCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.GameCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.GameCode.GDAButtonObjects1.length = 0;
gdjs.GameCode.GDAButtonObjects2.length = 0;
gdjs.GameCode.GDAButtonObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
