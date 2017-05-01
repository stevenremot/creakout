define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("Creakout");
$core.packages["Creakout"].innerEval = function (expr) { return eval(expr); };
$core.packages["Creakout"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass("CreakoutBallModel", $globals.Object, ["position", "direction"], "Creakout");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutBallModel.comment="I represent a ball in the creakout game";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "direction",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@direction"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "direction\x0a\x09^direction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "direction:",
protocol: "accessing",
fn: function (aVector){
var self=this,$self=this;
var radius;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
radius=$recv(aVector)._r();
$1=$recv(radius).__eq((0));
if($core.assert($1)){
$self["@direction"]=aVector;
$self["@direction"];
} else {
$self["@direction"]=$recv(aVector).__slash(radius);
$self["@direction"];
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"direction:",{aVector:aVector,radius:radius},$globals.CreakoutBallModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector"],
source: "direction: aVector\x0a\x09| radius |\x0a\x09radius := aVector r.\x0a\x09\x0a\x09radius = 0\x0a\x09\x09ifTrue: [ direction := aVector ]\x0a\x09\x09ifFalse: [ direction := aVector / radius ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["r", "ifTrue:ifFalse:", "=", "/"]
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@position"]=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$self["@direction"]=(0).__at((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CreakoutBallModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09position := 0@0.\x0a\x09direction := 0@0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@"]
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "isInRect:",
protocol: "testing",
fn: function (aRect){
var self=this,$self=this;
var halfInnerRect,innerRect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=1;
//>>excludeEnd("ctx");
halfInnerRect=$recv($1).__at($self._radius());
$3=$self._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__minus(halfInnerRect);
innerRect=$recv($2)._rectangle_($recv($self._position()).__plus(halfInnerRect));
return $recv(aRect)._containsRect_(innerRect);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInRect:",{aRect:aRect,halfInnerRect:halfInnerRect,innerRect:innerRect},$globals.CreakoutBallModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect"],
source: "isInRect: aRect\x0a\x09| halfInnerRect innerRect |\x0a\x09halfInnerRect := (self radius)@(self radius).\x0a\x09innerRect := (self position - halfInnerRect) rectangle: (self position + halfInnerRect).\x0a\x09^aRect containsRect: innerRect.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "radius", "rectangle:", "-", "position", "+", "containsRect:"]
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "position",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@position"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09^position",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "position:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
$self["@position"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "position: aPoint\x0a\x09position := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "radius",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (1.5);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radius\x0a\x09^1.5",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "speed",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (70);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "speed\x0a\x09\x22pixels / second\x22\x0a\x09^70",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBallModel);

$core.addMethod(
$core.method({
selector: "update:",
protocol: "updating",
fn: function (milliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self["@position"];
$3=$recv($recv($self["@direction"]).__star($self._speed())).__star(milliseconds);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__slash((1000));
$self["@position"]=$recv($1).__plus($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update:",{milliseconds:milliseconds},$globals.CreakoutBallModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds"],
source: "update: milliseconds\x0a\x09position := position + (direction * self speed * milliseconds / 1000.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "/", "*", "speed"]
}),
$globals.CreakoutBallModel);



$core.addClass("CreakoutBrickModel", $globals.Object, ["radius", "thickness", "origin", "angle", "width", "color", "bounceFactor"], "Creakout");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutBrickModel.comment="I represent a general purpose brick in the breakout.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "angle",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@angle"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "angle\x0a\x09^angle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "angle:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@angle"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "angle: aNumber\x0a\x09angle := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "bounceFactor",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@bounceFactor"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bounceFactor\x0a\x09^bounceFactor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "bounceFactor:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@bounceFactor"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "bounceFactor: aNumber\x0a\x09bounceFactor := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "collisionVectorWith:",
protocol: "collision",
fn: function (aBall){
var self=this,$self=this;
var ballVector,leftVector,rightVector,offset,leftCenter,rightCenter;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3,$6,$7;
ballVector=$recv($recv(aBall)._position()).__minus($self["@origin"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=$self._orbitCollidesWith_vector_(aBall,ballVector);
if(!$core.assert($1)){
return nil;
}
leftVector=$self._leftVector();
rightVector=$self._rightVector();
offset=$recv($recv(aBall)._radius()).__plus($recv($self["@thickness"]).__slash((2)));
$2=$self._innerPartCollidesWith_vector_(aBall,ballVector);
if($core.assert($2)){
return $self._computeInnerBounceAngleWith_vector_(aBall,ballVector);
} else {
leftCenter=$recv(leftVector).__star($self["@radius"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
leftCenter;
rightCenter=$recv(rightVector).__star($self["@radius"]);
rightCenter;
$5=$recv(leftCenter).__minus(ballVector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._r();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["r"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__lt_eq(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<="]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$6=$self._computeOuterBounceAngleBetween_and_vector_(leftCenter,aBall,ballVector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["computeOuterBounceAngleBetween:and:vector:"]=1;
//>>excludeEnd("ctx");
return $6;
}
$7=$recv($recv($recv(rightCenter).__minus(ballVector))._r()).__lt_eq(offset);
if($core.assert($7)){
return $self._computeOuterBounceAngleBetween_and_vector_(rightCenter,aBall,ballVector);
}
}
return nil;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collisionVectorWith:",{aBall:aBall,ballVector:ballVector,leftVector:leftVector,rightVector:rightVector,offset:offset,leftCenter:leftCenter,rightCenter:rightCenter},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall"],
source: "collisionVectorWith: aBall\x0a\x09| ballVector leftVector rightVector offset leftCenter rightCenter |\x0a\x09ballVector := aBall position - origin.\x0a\x09\x0a\x09(self orbitCollidesWith: aBall vector: ballVector)\x0a\x09\x09ifFalse: [ ^ nil ].\x0a\x09\x09\x0a\x09leftVector := self leftVector.\x0a\x09rightVector := self rightVector.\x0a\x09offset := aBall radius + (thickness / 2.0).\x0a\x09\x0a\x09(self innerPartCollidesWith: aBall vector: ballVector)\x0a\x09\x09ifTrue: [ ^ self computeInnerBounceAngleWith: aBall vector: ballVector ]\x0a\x09\x09ifFalse: [ leftCenter := leftVector * radius.\x0a\x09\x09\x09rightCenter := rightVector * radius.\x0a\x09\x09\x09((leftCenter - ballVector) r <= offset)\x0a\x09\x09\x09\x09ifTrue: [ ^ self computeOuterBounceAngleBetween: leftCenter and: aBall vector: ballVector ].\x0a\x09\x09\x09((rightCenter - ballVector) r <= offset)\x0a\x09\x09\x09\x09ifTrue: [ ^ self computeOuterBounceAngleBetween: rightCenter and: aBall vector: ballVector ]].\x0a\x09\x09\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "position", "ifFalse:", "orbitCollidesWith:vector:", "leftVector", "rightVector", "+", "radius", "/", "ifTrue:ifFalse:", "innerPartCollidesWith:vector:", "computeInnerBounceAngleWith:vector:", "*", "ifTrue:", "<=", "r", "computeOuterBounceAngleBetween:and:vector:"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "color",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@color"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "color\x0a\x09^color",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "color:",
protocol: "accessing",
fn: function (aColor){
var self=this,$self=this;
$self["@color"]=aColor;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "computeInnerBounceAngleWith:vector:",
protocol: "private - collision",
fn: function (aBall,aBallVector){
var self=this,$self=this;
var bounceAngle,bounceOffset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(aBallVector)._angle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["angle"]=1;
//>>excludeEnd("ctx");
bounceOffset=$recv($1).__minus($recv($self["@angle"])._degreesToRadians());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
bounceAngle=$recv($recv(aBallVector)._angle()).__minus($recv(bounceOffset).__star($self["@bounceFactor"]));
$2=$recv($recv(aBallVector)._dotProduct_($recv(aBall)._direction())).__gt((0));
if($core.assert($2)){
bounceAngle=$recv(bounceAngle).__plus($recv($globals.CreakoutMath)._pi());
bounceAngle;
}
return $recv($recv(bounceAngle)._cos()).__at($recv(bounceAngle)._sin());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"computeInnerBounceAngleWith:vector:",{aBall:aBall,aBallVector:aBallVector,bounceAngle:bounceAngle,bounceOffset:bounceOffset},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall", "aBallVector"],
source: "computeInnerBounceAngleWith: aBall vector: aBallVector\x0a\x09\x22Assume there is a collision with the ball in the inner part, and compute the new direction of the ball\x0a\x09after bounce\x22\x0a\x0a\x09| bounceAngle bounceOffset |\x0a\x09bounceOffset := (aBallVector angle - angle degreesToRadians).\x0a\x09\x09\x0a\x09bounceAngle := aBallVector angle - (bounceOffset * bounceFactor).\x0a\x09(aBallVector dotProduct: aBall direction) > 0\x0a\x09\x09ifTrue: [ bounceAngle := bounceAngle + CreakoutMath pi ].\x0a\x09^ bounceAngle cos @ bounceAngle sin",
referencedClasses: ["CreakoutMath"],
//>>excludeEnd("ide");
messageSends: ["-", "angle", "degreesToRadians", "*", "ifTrue:", ">", "dotProduct:", "direction", "+", "pi", "@", "cos", "sin"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "computeOuterBounceAngleBetween:and:vector:",
protocol: "private - collision",
fn: function (aCenter,aBall,aBallVector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(aBallVector).__minus(aCenter))._normalized();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"computeOuterBounceAngleBetween:and:vector:",{aCenter:aCenter,aBall:aBall,aBallVector:aBallVector},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCenter", "aBall", "aBallVector"],
source: "computeOuterBounceAngleBetween: aCenter and: aBall vector: aBallVector\x0a\x09\x22Assume there is a collision with the ball in the outer part, and compute the new direction of the ball\x0a\x09after bounce\x22\x0a\x09^ (aBallVector - aCenter) normalized",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["normalized", "-"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "innerPartCollidesWith:vector:",
protocol: "private - collision",
fn: function (aBall,aBallVector){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv($self._leftVector())._normal();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["normal"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._dotProduct_(aBallVector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dotProduct:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt((0));
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self._rightVector())._normal())._dotProduct_(aBallVector)).__lt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"innerPartCollidesWith:vector:",{aBall:aBall,aBallVector:aBallVector},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall", "aBallVector"],
source: "innerPartCollidesWith: aBall vector: aBallVector\x0a\x09\x22Assume the ball is in the pad orbit, and check whether the ball collides with the \x22\x22inner\x22\x22 part\x0a\x09of the pad (inner part = pad without the circles)\x22\x0a\x09^ (self leftVector normal dotProduct: aBallVector) > 0\x0a\x09\x09and: [ (self rightVector normal dotProduct: aBallVector) < 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">", "dotProduct:", "normal", "leftVector", "<", "rightVector"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "leftAngle",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@angle"]).__minus($recv($self._width()).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftAngle",{},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leftAngle\x0a\x09^ angle - (self width / 2.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "/", "width"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "leftVector",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._r_degrees_((1),$self._leftAngle());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftVector",{},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leftVector\x0a\x09^ Point r: 1 degrees: self leftAngle",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["r:degrees:", "leftAngle"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "orbitCollidesWith:vector:",
protocol: "private - collision",
fn: function (aBall,aBallVector){
var self=this,$self=this;
var ballRadius,isNavigatingInside,offset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
ballRadius=$recv(aBallVector)._r();
isNavigatingInside=$recv($recv(aBallVector)._dotProduct_($recv(aBall)._direction())).__lt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<"]=1;
//>>excludeEnd("ctx");
$2=$recv($recv(ballRadius).__lt($self["@radius"]))._and_(isNavigatingInside);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(ballRadius).__gt($self["@radius"]))._and_($recv(isNavigatingInside)._not());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
return false;
}
offset=$recv($recv(aBall)._radius()).__plus($recv($self._thickness()).__slash((2)));
return $recv($recv(ballRadius).__minus($self["@radius"]))._between_and_($recv(offset)._negated(),offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orbitCollidesWith:vector:",{aBall:aBall,aBallVector:aBallVector,ballRadius:ballRadius,isNavigatingInside:isNavigatingInside,offset:offset},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall", "aBallVector"],
source: "orbitCollidesWith: aBall vector: aBallVector\x0a\x09\x22Check is the ball is in the pad orbit, and in a direction the allows collision\x22\x0a\x09| ballRadius isNavigatingInside offset |\x0a\x09ballRadius := aBallVector r.\x0a\x09isNavigatingInside := (aBallVector dotProduct: aBall direction) < 0.\x0a\x09\x0a\x09(((ballRadius < radius) and: isNavigatingInside)\x0a\x09\x09or: [ (ballRadius > radius) and: isNavigatingInside not ])\x0a\x09\x09ifTrue: [ ^ false ].\x0a\x09\x09\x0a\x09offset := aBall radius + (self thickness / 2.0).\x0a\x09\x0a\x09^((ballRadius - radius)\x0a\x09\x09between: offset negated\x0a\x09\x09and: offset).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["r", "<", "dotProduct:", "direction", "ifTrue:", "or:", "and:", ">", "not", "+", "radius", "/", "thickness", "between:and:", "-", "negated"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "origin",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@origin"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "origin\x0a\x09^origin",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "origin:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
$self["@origin"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "origin: aPoint\x0a\x09origin := aPoint.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "radius",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@radius"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radius\x0a\x09^radius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "radius:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@radius"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "radius: aNumber\x0a\x09radius := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "rightAngle",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@angle"]).__plus($recv($self._width()).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightAngle",{},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rightAngle\x0a\x09^ angle + (self width / 2.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "/", "width"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "rightVector",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._r_degrees_((1),$self._rightAngle());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightVector",{},$globals.CreakoutBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rightVector\x0a\x09^Point r: 1 degrees: self rightAngle",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["r:degrees:", "rightAngle"]
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "thickness",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@thickness"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thickness\x0a\x09^thickness",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "thickness:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@thickness"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "thickness: aNumber\x0a\x09thickness := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "width",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@width"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);

$core.addMethod(
$core.method({
selector: "width:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
$self["@width"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "width: aNumber\x0a\x09width := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutBrickModel);


$core.addMethod(
$core.method({
selector: "radius:thickness:origin:angle:width:color:bounceFactor:",
protocol: "instance creation",
fn: function (aRadius,aThickness,aPoint,anAngle,aWidth,aColor,aFactor){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._radius_(aRadius);
$recv($1)._thickness_(aThickness);
$recv($1)._origin_(aPoint);
$recv($1)._angle_(anAngle);
$recv($1)._width_(aWidth);
$recv($1)._color_(aColor);
return $recv($1)._bounceFactor_(aFactor);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radius:thickness:origin:angle:width:color:bounceFactor:",{aRadius:aRadius,aThickness:aThickness,aPoint:aPoint,anAngle:anAngle,aWidth:aWidth,aColor:aColor,aFactor:aFactor},$globals.CreakoutBrickModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRadius", "aThickness", "aPoint", "anAngle", "aWidth", "aColor", "aFactor"],
source: "radius: aRadius thickness: aThickness origin: aPoint angle: anAngle width: aWidth color: aColor bounceFactor: aFactor\x0a\x09^ self new\x0a\x09\x09radius: aRadius;\x0a\x09\x09thickness: aThickness;\x0a\x09\x09origin: aPoint;\x0a\x09\x09angle: anAngle;\x0a\x09\x09width: aWidth;\x0a\x09\x09color: aColor;\x0a\x09\x09bounceFactor: aFactor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["radius:", "new", "thickness:", "origin:", "angle:", "width:", "color:", "bounceFactor:"]
}),
$globals.CreakoutBrickModel.a$cls);


$core.addClass("CreakoutTargetBrickModel", $globals.CreakoutBrickModel, ["life", "deadBlock"], "Creakout");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutTargetBrickModel.comment="I am a brick that can be broken by a ball";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "hit",
protocol: "damage handling",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self["@life"]=$recv($recv($self["@life"]).__minus((1)))._max_((0));
$1=$self["@life"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hit",{},$globals.CreakoutTargetBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hit\x0a\x09^ life := (life - 1) max: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["max:", "-"]
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "ifDead:",
protocol: "damage handling",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self._life()).__eq((0));
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifDead:",{aBlock:aBlock},$globals.CreakoutTargetBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifDead: aBlock\x0a\x09(self life = 0) ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "life"]
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "initWidth",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._width_($self._targetWidth());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initWidth",{},$globals.CreakoutTargetBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initWidth\x0a\x09self width: self targetWidth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "targetWidth"]
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "life",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@life"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "life\x0a\x09^ life",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "life:",
protocol: "accessing",
fn: function (aLife){
var self=this,$self=this;
$self["@life"]=aLife;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLife"],
source: "life: aLife\x0a\x09life := aLife",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "onDead:",
protocol: "accessing",
fn: function (aBlock){
var self=this,$self=this;
$self["@deadBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onDead: aBlock\x0a\x09deadBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "shrinkSpeed",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shrinkSpeed\x0a\x09\x22degrees / sec\x22\x0a\x09^ 100.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "targetWidth",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@life"]).__star($self._widthByLife());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"targetWidth",{},$globals.CreakoutTargetBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetWidth\x0a\x09^ life * self widthByLife",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "widthByLife"]
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "update:",
protocol: "updating",
fn: function (milliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$6,$5,$4,$7;
$2=$self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$3=$self._targetWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["targetWidth"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt($3);
if($core.assert($1)){
$6=$self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($recv($recv($self._shrinkSpeed()).__star(milliseconds)).__slash((1000)));
$4=$recv($5)._max_($self._targetWidth());
$self._width_($4);
}
$7=$recv($self._width()).__eq((0));
if($core.assert($7)){
$recv($self["@deadBlock"])._value_(self);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update:",{milliseconds:milliseconds},$globals.CreakoutTargetBrickModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds"],
source: "update: milliseconds\x0a\x09self width > self targetWidth\x0a\x09\x09ifTrue: [ self\x0a\x09\x09\x09\x09width: (self width - (self shrinkSpeed * milliseconds / 1000.0) max: self targetWidth) ].\x0a\x09\x09\x09\x0a\x09(self width = 0) ifTrue: [ deadBlock value: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", ">", "width", "targetWidth", "width:", "max:", "-", "/", "*", "shrinkSpeed", "=", "value:"]
}),
$globals.CreakoutTargetBrickModel);

$core.addMethod(
$core.method({
selector: "widthByLife",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (20);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "widthByLife\x0a\x09^ 20.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel);


$core.addMethod(
$core.method({
selector: "defaultBounceFactor",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultBounceFactor\x0a\x09^ 1.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel.a$cls);

$core.addMethod(
$core.method({
selector: "defaultThickness",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (3);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultThickness\x0a\x09^ 3.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutTargetBrickModel.a$cls);

$core.addMethod(
$core.method({
selector: "radius:origin:angle:life:",
protocol: "instance creation",
fn: function (aRadius,aPoint,anAngle,aLife){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._radius_(aRadius);
$recv($1)._thickness_($self._defaultThickness());
$recv($1)._origin_(aPoint);
$recv($1)._angle_(anAngle);
$recv($1)._color_($self._randomColor());
$recv($1)._bounceFactor_($self._defaultBounceFactor());
$recv($1)._life_(aLife);
return $recv($1)._initWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radius:origin:angle:life:",{aRadius:aRadius,aPoint:aPoint,anAngle:anAngle,aLife:aLife},$globals.CreakoutTargetBrickModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRadius", "aPoint", "anAngle", "aLife"],
source: "radius: aRadius origin: aPoint angle: anAngle life: aLife\x0a\x09^ self new\x0a\x09\x09radius: aRadius;\x0a\x09\x09thickness: self defaultThickness;\x0a\x09\x09origin: aPoint;\x0a\x09\x09angle: anAngle;\x0a\x09\x09color: self randomColor;\x0a\x09\x09bounceFactor: self defaultBounceFactor;\x0a\x09\x09life: aLife;\x0a\x09\x09initWidth.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["radius:", "new", "thickness:", "defaultThickness", "origin:", "angle:", "color:", "randomColor", "bounceFactor:", "defaultBounceFactor", "life:", "initWidth"]
}),
$globals.CreakoutTargetBrickModel.a$cls);

$core.addMethod(
$core.method({
selector: "radius:origin:angle:life:onDead:",
protocol: "instance creation",
fn: function (aRadius,aPoint,anAngle,aLife,aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._new();
$recv($1)._radius_(aRadius);
$recv($1)._thickness_($self._defaultThickness());
$recv($1)._origin_(aPoint);
$recv($1)._angle_(anAngle);
$recv($1)._color_($self._randomColor());
$recv($1)._bounceFactor_($self._defaultBounceFactor());
$recv($1)._life_(aLife);
$recv($1)._onDead_(aBlock);
return $recv($1)._initWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"radius:origin:angle:life:onDead:",{aRadius:aRadius,aPoint:aPoint,anAngle:anAngle,aLife:aLife,aBlock:aBlock},$globals.CreakoutTargetBrickModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRadius", "aPoint", "anAngle", "aLife", "aBlock"],
source: "radius: aRadius origin: aPoint angle: anAngle life: aLife onDead: aBlock\x0a\x09^ self new\x0a\x09\x09radius: aRadius;\x0a\x09\x09thickness: self defaultThickness;\x0a\x09\x09origin: aPoint;\x0a\x09\x09angle: anAngle;\x0a\x09\x09color: self randomColor;\x0a\x09\x09bounceFactor: self defaultBounceFactor;\x0a\x09\x09life: aLife;\x0a\x09\x09onDead: aBlock;\x0a\x09\x09initWidth.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["radius:", "new", "thickness:", "defaultThickness", "origin:", "angle:", "color:", "randomColor", "bounceFactor:", "defaultBounceFactor", "life:", "onDead:", "initWidth"]
}),
$globals.CreakoutTargetBrickModel.a$cls);

$core.addMethod(
$core.method({
selector: "randomColor",
protocol: "color",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Color)._h_s_v_((360)._atRandom(),(0.6),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomColor",{},$globals.CreakoutTargetBrickModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "randomColor\x0a\x09^ Color h: 360 atRandom s: 0.6 v: 1.0",
referencedClasses: ["Color"],
//>>excludeEnd("ide");
messageSends: ["h:s:v:", "atRandom"]
}),
$globals.CreakoutTargetBrickModel.a$cls);


$core.addClass("CreakoutModel", $globals.Object, ["pad", "ball", "phase", "bricks", "currentLevel", "lives"], "Creakout");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutModel.comment="I gather all the data of a Creakout game.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addBrickRadius:angle:life:",
protocol: "level creation",
fn: function (aRadius,anAngle,aLife){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@bricks"])._add_($recv($globals.CreakoutTargetBrickModel)._radius_origin_angle_life_onDead_(aRadius,$self._boardCenter(),anAngle,aLife,(function(brick){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._handleBrickDead_(brick);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({brick:brick},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addBrickRadius:angle:life:",{aRadius:aRadius,anAngle:anAngle,aLife:aLife},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRadius", "anAngle", "aLife"],
source: "addBrickRadius: aRadius angle: anAngle life: aLife\x0a\x09bricks\x0a\x09\x09add:\x0a\x09\x09\x09(CreakoutTargetBrickModel\x0a\x09\x09\x09\x09radius: aRadius\x0a\x09\x09\x09\x09origin: self boardCenter\x0a\x09\x09\x09\x09angle: anAngle\x0a\x09\x09\x09\x09life: aLife\x0a\x09\x09\x09\x09onDead: [ :brick | self handleBrickDead: brick ])",
referencedClasses: ["CreakoutTargetBrickModel"],
//>>excludeEnd("ide");
messageSends: ["add:", "radius:origin:angle:life:onDead:", "boardCenter", "handleBrickDead:"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "ball",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@ball"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ball\x0a\x09^ball",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "boardCenter",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$self._boardSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["boardSize"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
return $recv($1).__at($recv($self._boardSize()).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boardCenter",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boardCenter\x0a\x09^(self boardSize / 2.0)@(self boardSize / 2.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "/", "boardSize"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "boardSize",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boardSize\x0a\x09^100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "doBricks:",
protocol: "iterating",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@bricks"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doBricks:",{aBlock:aBlock},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "doBricks: aBlock\x0a\x09bricks do: aBlock.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "handleBallCollideWithBricks",
protocol: "updating",
fn: function (){
var self=this,$self=this;
var bounceVector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$receiver;
var $early={};
try {
$self._doBricks_((function(brick){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
bounceVector=$recv(brick)._collisionVectorWith_($self["@ball"]);
bounceVector;
$1=bounceVector;
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
$2=$self["@ball"];
$4=$recv($self["@ball"])._direction();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["direction"]=1;
//>>excludeEnd("ctx");
$5=$recv($recv(bounceVector).__star((2))).__star($recv($recv($self["@ball"])._direction())._dotProduct_(bounceVector));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__minus($5);
$recv($2)._direction_($3);
$recv(brick)._hit();
throw $early=[self];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({brick:brick},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleBallCollideWithBricks",{bounceVector:bounceVector},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleBallCollideWithBricks\x0a\x09| bounceVector |\x0a\x09self\x0a\x09\x09doBricks: [ :brick | \x0a\x09\x09\x09bounceVector := brick collisionVectorWith: ball.\x0a\x09\x09\x09bounceVector\x0a\x09\x09\x09\x09ifNotNil: [ ball\x0a\x09\x09\x09\x09\x09\x09direction: ball direction - (bounceVector * 2 * (ball direction dotProduct: bounceVector)).\x0a\x09\x09\x09\x09\x09brick hit.\x0a\x09\x09\x09\x09\x09^ self ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doBricks:", "collisionVectorWith:", "ifNotNil:", "direction:", "-", "direction", "*", "dotProduct:", "hit"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "handleBallCollidesWithPadAnd:",
protocol: "updating",
fn: function (aBlock){
var self=this,$self=this;
var bounceVector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
bounceVector=$recv($self["@pad"])._collidesWithBall_($self["@ball"]);
$1=bounceVector;
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$recv($self["@ball"])._direction_(bounceVector);
return self;
}
$recv(aBlock)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleBallCollidesWithPadAnd:",{aBlock:aBlock,bounceVector:bounceVector},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "handleBallCollidesWithPadAnd: aBlock\x0a\x09| bounceVector |\x0a\x09bounceVector := pad collidesWithBall: ball.\x0a\x09bounceVector\x0a\x09\x09ifNotNil: [ ball direction: bounceVector.\x0a\x09\x09\x09^ self ].\x0a\x09aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collidesWithBall:", "ifNotNil:", "direction:", "value"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "handleBallOutAnd:",
protocol: "updating",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$6,$5,$3,$1,$7;
$2=$self["@ball"];
$4=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$6=$self._boardSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["boardSize"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__at($self._boardSize());
$3=$recv($4)._extent_($5);
$1=$recv($2)._isInRect_($3);
$recv($1)._ifTrue_ifFalse_(aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self["@lives"]=$recv($self["@lives"]).__minus((1));
$self["@lives"];
$7=$recv($self["@lives"]).__eq((0));
if($core.assert($7)){
return $self._lose();
} else {
return $self._startAiming();
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ifTrue:ifFalse:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleBallOutAnd:",{aBlock:aBlock},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "handleBallOutAnd: aBlock\x0a\x09(ball isInRect: ((0@0) extent: (self boardSize)@(self boardSize)))\x0a\x09\x09\x09\x09ifTrue: aBlock\x0a\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09lives := lives - 1.\x0a\x09\x09\x09\x09\x09(lives = 0)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [ self lose ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ self startAiming ]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isInRect:", "extent:", "@", "boardSize", "-", "=", "lose", "startAiming"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "handleBrickDead:",
protocol: "game phases",
fn: function (aBrick){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self["@bricks"];
$recv($1)._remove_(aBrick);
$recv($1)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._startNewLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleBrickDead:",{aBrick:aBrick},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrick"],
source: "handleBrickDead: aBrick\x0a\x09bricks remove: aBrick;\x0a\x09\x09ifEmpty: [ self startNewLevel ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "ifEmpty:", "startNewLevel"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "ifDefeat:",
protocol: "accessing",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@phase"]).__eq("defeat");
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifDefeat:",{aBlock:aBlock},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifDefeat: aBlock\x0a\x09(phase = #defeat) ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "="]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "ifEnd:",
protocol: "accessing",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._ifDefeat_(aBlock);
$self._ifVictory_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifEnd:",{aBlock:aBlock},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifEnd: aBlock\x0a\x09self\x0a\x09\x09ifDefeat: aBlock;\x0a\x09\x09ifVictory: aBlock.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifDefeat:", "ifVictory:"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "ifVictory:",
protocol: "accessing",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@phase"]).__eq("victory");
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ifVictory:",{aBlock:aBlock},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "ifVictory: aBlock\x0a\x09(phase = #victory) ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "="]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@pad"]=$recv($globals.CreakoutPadModel)._center_($self._boardCenter());
$self["@ball"]=$recv($globals.CreakoutBallModel)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$self["@bricks"]=$recv($globals.Set)._new();
$self["@lives"]=(3);
$self["@currentLevel"]=(0);
$self._startNewLevel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09pad := CreakoutPadModel center: self boardCenter.\x0a\x09ball := CreakoutBallModel new.\x0a\x09bricks := Set new.\x0a\x09lives := 3.\x0a\x09currentLevel := 0.\x0a\x09self startNewLevel.",
referencedClasses: ["CreakoutPadModel", "CreakoutBallModel", "Set"],
//>>excludeEnd("ide");
messageSends: ["center:", "boardCenter", "new", "startNewLevel"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "level1",
protocol: "levels",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@bricks"])._removeAll();
$self._addBrickRadius_angle_life_((20),(0),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=1;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((20),(90),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=2;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((20),(180),(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=3;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((20),(270),(2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"level1",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level1\x0a\x09bricks removeAll.\x0a\x09self\x0a\x09\x09addBrickRadius: 20.0 angle: 0 life: 2;\x0a\x09\x09addBrickRadius: 20.0 angle: 90 life: 2;\x0a\x09\x09addBrickRadius: 20.0 angle: 180 life: 2;\x0a\x09\x09addBrickRadius: 20.0 angle: 270 life: 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeAll", "addBrickRadius:angle:life:"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "level2",
protocol: "levels",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@bricks"])._removeAll();
$self._addBrickRadius_angle_life_((25),(0),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=1;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((25),(120),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=2;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((25),(240),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=3;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((10),(0),(6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addBrickRadius:angle:life:"]=4;
//>>excludeEnd("ctx");
$self._addBrickRadius_angle_life_((10),(180),(6));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"level2",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level2\x0a\x09bricks removeAll.\x0a\x09self\x0a\x09\x09addBrickRadius: 25.0 angle: 0 life: 4;\x0a\x09\x09addBrickRadius: 25.0 angle: 120 life: 4;\x0a\x09\x09addBrickRadius: 25.0 angle: 240 life: 4;\x0a\x09\x09addBrickRadius: 10.0 angle: 0 life: 6;\x0a\x09\x09addBrickRadius: 10.0 angle: 180 life: 6",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeAll", "addBrickRadius:angle:life:"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "levels",
protocol: "levels",
fn: function (){
var self=this,$self=this;
return ["level1", "level2"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "levels\x0a\x09^ #(level1 level2)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "lose",
protocol: "game phases",
fn: function (){
var self=this,$self=this;
$self["@phase"]="defeat";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lose\x0a\x09phase := #defeat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "pad",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@pad"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pad\x0a\x09^pad",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "restart",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._initialize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self initialize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "shoot",
protocol: "game phases",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@phase"]).__eq("aiming");
if(!$core.assert($1)){
return self;
}
$self["@phase"]="ballMoving";
$recv($self["@ball"])._direction_($recv($self["@pad"])._aimingDirection());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shoot",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shoot\x0a\x09phase = #aiming\x0a\x09\x09ifFalse: [ ^ self ].\x0a\x09\x09\x0a\x09phase := #ballMoving.\x0a\x09ball direction: pad aimingDirection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "direction:", "aimingDirection"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "startAiming",
protocol: "game phases",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@phase"]="aiming";
$recv($self["@ball"])._direction_((0).__at((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startAiming",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startAiming\x0a\x09phase := #aiming.\x0a\x09ball direction: 0@0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["direction:", "@"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "startNewLevel",
protocol: "game phases",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$self["@currentLevel"]=$recv($self["@currentLevel"]).__plus((1));
$2=$self["@currentLevel"];
$4=$self._levels();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["levels"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._size();
$1=$recv($2).__gt($3);
if($core.assert($1)){
$self["@phase"]="victory";
$self["@phase"];
return self;
}
$self._perform_($recv($self._levels())._at_($self["@currentLevel"]));
$self._startAiming();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startNewLevel",{},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startNewLevel\x0a\x09currentLevel := currentLevel + 1.\x0a\x09currentLevel > self levels size\x0a\x09\x09ifTrue: [ phase := #victory.\x0a\x09\x09\x09^ self ].\x0a\x09self perform: (self levels at: currentLevel).\x0a\x09self startAiming",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "ifTrue:", ">", "size", "levels", "perform:", "at:", "startAiming"]
}),
$globals.CreakoutModel);

$core.addMethod(
$core.method({
selector: "update:",
protocol: "updating",
fn: function (milliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$self._ifEnd_((function(){
throw $early=[self];

}));
$recv($self["@pad"])._update_(milliseconds);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["update:"]=1;
//>>excludeEnd("ctx");
$1=$recv($self["@phase"]).__eq("aiming");
if($core.assert($1)){
$recv($self["@ball"])._position_($recv($self["@pad"])._aimingPositionFor_($self["@ball"]));
} else {
$recv($self["@ball"])._update_(milliseconds);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["update:"]=2;
//>>excludeEnd("ctx");
$self._handleBallOutAnd_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._handleBallCollidesWithPadAnd_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $self._handleBallCollideWithBricks();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
}
$self._doBricks_((function(brick){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(brick)._update_(milliseconds);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({brick:brick},$ctx1,6)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update:",{milliseconds:milliseconds},$globals.CreakoutModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds"],
source: "update: milliseconds\x0a\x09self ifEnd: [ ^ self ].\x0a\x09pad update: milliseconds.\x0a\x09phase = #aiming\x0a\x09\x09ifTrue: [ ball position: (pad aimingPositionFor: ball) ]\x0a\x09\x09ifFalse: [ ball update: milliseconds.\x0a\x09\x09\x09self\x0a\x09\x09\x09\x09handleBallOutAnd: [ self handleBallCollidesWithPadAnd: [ self handleBallCollideWithBricks ] ] ].\x0a\x09self doBricks: [ :brick | brick update: milliseconds ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEnd:", "update:", "ifTrue:ifFalse:", "=", "position:", "aimingPositionFor:", "handleBallOutAnd:", "handleBallCollidesWithPadAnd:", "handleBallCollideWithBricks", "doBricks:"]
}),
$globals.CreakoutModel);



$core.addClass("CreakoutPadModel", $globals.Object, ["pads", "rotationDirection", "center", "rotationSpeed"], "Creakout");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutPadModel.comment="I am the model of a pad";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "aimingDirection",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Point)._r_degrees_((1),$recv($self._centerAngleFor_((1))).__plus((180)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aimingDirection",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aimingDirection\x0a\x09^ Point r: 1 degrees: (self centerAngleFor: 1) + 180.0",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["r:degrees:", "+", "centerAngleFor:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "aimingPositionFor:",
protocol: "accessing",
fn: function (aBall){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2;
$1=$self._center();
$5=$self._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv($self._thickness()).__slash((2)));
$3=$recv($4).__minus($recv(aBall)._radius());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Point)._r_degrees_($3,$self._centerAngleFor_((1)));
return $recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aimingPositionFor:",{aBall:aBall},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall"],
source: "aimingPositionFor: aBall\x0a\x09^self center \x0a\x09\x09+\x0a\x09\x09(Point \x0a\x09\x09\x09r: (self radius - (self thickness / 2.0) - aBall radius)\x0a\x09\x09\x09degrees: (self centerAngleFor: 1))",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["+", "center", "r:degrees:", "-", "radius", "/", "thickness", "centerAngleFor:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "center",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@center"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "center\x0a\x09^center",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "center:",
protocol: "accessing",
fn: function (aPoint){
var self=this,$self=this;
$self["@center"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "center: aPoint\x0a\x09center := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "centerAngleFor:",
protocol: "accessing",
fn: function (aPad){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@pads"])._at_(aPad))._angle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"centerAngleFor:",{aPad:aPad},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPad"],
source: "centerAngleFor: aPad\x0a\x09^ (pads at: aPad) angle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["angle", "at:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "collidesWithBall:",
protocol: "testing",
fn: function (aBall){
var self=this,$self=this;
var bounceVector;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
var $early={};
try {
$self._doPads_((function(aPad){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
bounceVector=$recv(aPad)._collisionVectorWith_(aBall);
bounceVector;
$1=bounceVector;
if(($receiver = $1) == null || $receiver.a$nil){
return $1;
} else {
throw $early=[bounceVector];
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aPad:aPad},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWithBall:",{aBall:aBall,bounceVector:bounceVector},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBall"],
source: "collidesWithBall: aBall\x0a\x09| bounceVector |\x0a\x09self doPads: [  :aPad |\x0a\x09\x09bounceVector := aPad collisionVectorWith: aBall.\x0a\x09\x09bounceVector ifNotNil: [ ^ bounceVector ] ].\x0a\x09^nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doPads:", "collisionVectorWith:", "ifNotNil:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "doPads:",
protocol: "iterating",
fn: function (aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@pads"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doPads:",{aBlock:aBlock},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "doPads: aBlock\x0a\x09pads do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "initPads",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=$self._numberOfPads();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["numberOfPads"]=1;
//>>excludeEnd("ctx");
$self["@pads"]=$recv($globals.Array)._new_($1);
(1)._to_do_($self._numberOfPads(),(function(padNumber){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$self["@pads"];
$4=$recv($globals.CreakoutBrickModel)._new();
$recv($4)._angle_((0));
$recv($4)._bounceFactor_((4));
$recv($4)._color_($self._padColor());
$recv($4)._width_($self._padWidth());
$recv($4)._thickness_($self._thickness());
$recv($4)._origin_($self._center());
$3=$recv($4)._radius_($self._radius());
return $recv($2)._at_put_(padNumber,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({padNumber:padNumber},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPads",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initPads\x0a\x09pads := Array new: self numberOfPads.\x0a\x091 to: self numberOfPads do: [ :padNumber | \x0a\x09\x09pads\x0a\x09\x09\x09at: padNumber\x0a\x09\x09\x09put:\x0a\x09\x09\x09\x09(CreakoutBrickModel new\x0a\x09\x09\x09\x09\x09angle: 0;\x0a\x09\x09\x09\x09\x09bounceFactor: 4.0;\x0a\x09\x09\x09\x09\x09color: self padColor;\x0a\x09\x09\x09\x09\x09width: self padWidth;\x0a\x09\x09\x09\x09\x09thickness: self thickness;\x0a\x09\x09\x09\x09\x09origin: self center;\x0a\x09\x09\x09\x09\x09radius: self radius) ]",
referencedClasses: ["Array", "CreakoutBrickModel"],
//>>excludeEnd("ide");
messageSends: ["new:", "numberOfPads", "to:do:", "at:put:", "angle:", "new", "bounceFactor:", "color:", "padColor", "width:", "padWidth", "thickness:", "thickness", "origin:", "center", "radius:", "radius"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@rotationDirection"]=(0);
$self["@rotationSpeed"]=(0);
$self._initPads();
$self._rotation_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09rotationDirection := 0.\x0a\x09rotationSpeed := 0.\x0a\x09self initPads;\x0a\x09\x09rotation: 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initPads", "rotation:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "leftAngleFor:",
protocol: "accessing",
fn: function (aPad){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._centerAngleFor_(aPad)).__minus($recv($self._padWidth()).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftAngleFor:",{aPad:aPad},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPad"],
source: "leftAngleFor: aPad\x0a\x09^(self centerAngleFor: aPad) - (self padWidth / 2.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "centerAngleFor:", "/", "padWidth"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "leftVectorFor:",
protocol: "accessing",
fn: function (aPad){
var self=this,$self=this;
var angle;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
angle=$recv($self._leftAngleFor_(aPad))._degreesToRadians();
return $recv($recv(angle)._cos()).__at($recv(angle)._sin());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftVectorFor:",{aPad:aPad,angle:angle},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPad"],
source: "leftVectorFor: aPad\x0a\x09| angle |\x0a\x09angle := (self leftAngleFor: aPad) degreesToRadians.\x0a\x09^(angle cos)@(angle sin)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["degreesToRadians", "leftAngleFor:", "@", "cos", "sin"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "maxRotationSpeed",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (360);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxRotationSpeed\x0a\x09\x22degrees / second\x22\x0a\x09^360",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "numberOfPads",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (3);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numberOfPads\x0a\x09^3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "padColor",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Color)._h_s_l_((0),(0.9),(0.6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"padColor",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padColor\x0a\x09^ Color h: 0 s: 0.9 l: 0.6",
referencedClasses: ["Color"],
//>>excludeEnd("ide");
messageSends: ["h:s:l:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "padGap",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return (360).__slash($self._numberOfPads());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"padGap",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padGap\x0a\x09^360.0 / self numberOfPads",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "numberOfPads"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "padWidth",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (20);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padWidth\x0a\x09^20.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "radius",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (45);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radius\x0a\x09^45",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rightAngleFor:",
protocol: "accessing",
fn: function (aPad){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._centerAngleFor_(aPad)).__plus($recv($self._padWidth()).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightAngleFor:",{aPad:aPad},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPad"],
source: "rightAngleFor: aPad\x0a\x09^(self centerAngleFor: aPad) + (self padWidth / 2.0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "centerAngleFor:", "/", "padWidth"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rightVectorFor:",
protocol: "accessing",
fn: function (aPad){
var self=this,$self=this;
var angle;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
angle=$recv($self._rightAngleFor_(aPad))._degreesToRadians();
return $recv($recv(angle)._cos()).__at($recv(angle)._sin());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightVectorFor:",{aPad:aPad,angle:angle},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPad"],
source: "rightVectorFor: aPad\x0a\x09| angle |\x0a\x09angle := (self rightAngleFor: aPad) degreesToRadians.\x0a\x09^(angle cos)@(angle sin)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["degreesToRadians", "rightAngleFor:", "@", "cos", "sin"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rotate:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@pads"])._do_((function(pad){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(pad)._angle_($recv($recv(pad)._angle()).__plus(aNumber));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({pad:pad},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotate:",{aNumber:aNumber},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "rotate: aNumber\x0a\x09pads do: [  :pad | pad angle: pad angle + aNumber ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "angle:", "+", "angle"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rotation",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@pads"])._at_((1)))._angle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotation",{},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rotation\x0a\x09^ (pads at: 1) angle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["angle", "at:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rotation:",
protocol: "accessing",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(1)._to_do_($self._numberOfPads(),(function(padNumber){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($self["@pads"])._at_(padNumber))._angle_($recv(aNumber).__plus($recv($recv(padNumber).__minus((1))).__star($self._padGap())));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({padNumber:padNumber},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotation:",{aNumber:aNumber},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "rotation: aNumber\x0a\x091 to: self numberOfPads do: [ :padNumber |\x0a\x09\x09(pads at: padNumber) angle: aNumber + ((padNumber - 1) * self padGap) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["to:do:", "numberOfPads", "angle:", "at:", "+", "*", "-", "padGap"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rotationDirection",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return $self["@rotationDirection"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rotationDirection\x0a\x09^rotationDirection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "rotationDirection:",
protocol: "accessing",
fn: function (aDirection){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@rotationDirection"]=$recv(aDirection)._min_max_((1),(-1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotationDirection:",{aDirection:aDirection},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDirection"],
source: "rotationDirection: aDirection\x0a\x09rotationDirection := aDirection min: 1 max: -1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["min:max:"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "thickness",
protocol: "accessing",
fn: function (){
var self=this,$self=this;
return (3);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thickness\x0a\x09^3.0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "update:",
protocol: "updating",
fn: function (milliseconds){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._updateRotationSpeed_(milliseconds);
$self._rotate_($recv($recv(milliseconds).__slash((1000))).__star($self["@rotationSpeed"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update:",{milliseconds:milliseconds},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds"],
source: "update: milliseconds\x0a\x09self\x0a\x09\x09updateRotationSpeed: milliseconds;\x0a\x09\x09rotate:\x0a\x09\x09\x09milliseconds / 1000.0 * rotationSpeed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateRotationSpeed:", "rotate:", "*", "/"]
}),
$globals.CreakoutPadModel);

$core.addMethod(
$core.method({
selector: "updateRotationSpeed:",
protocol: "updating",
fn: function (milliseconds){
var self=this,$self=this;
var targetSpeed,rotationForce;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
targetSpeed=$recv($self._maxRotationSpeed()).__star($self["@rotationDirection"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$1=$recv(targetSpeed).__eq((0));
if($core.assert($1)){
rotationForce=(2);
} else {
rotationForce=(1);
}
$3=$self["@rotationSpeed"];
$4=$recv($recv(milliseconds).__star(rotationForce)).__star($recv($recv(targetSpeed).__minus($self["@rotationSpeed"]))._sign());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($4);
$self["@rotationSpeed"]=$recv($2)._min_max_($recv($self["@rotationSpeed"])._max_(targetSpeed),$recv($self["@rotationSpeed"])._min_(targetSpeed));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateRotationSpeed:",{milliseconds:milliseconds,targetSpeed:targetSpeed,rotationForce:rotationForce},$globals.CreakoutPadModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds"],
source: "updateRotationSpeed: milliseconds\x0a\x09| targetSpeed rotationForce |\x0a\x09targetSpeed := self maxRotationSpeed\x0a\x09\x09* rotationDirection.\x0a\x09rotationForce := targetSpeed = 0\x0a\x09\x09ifTrue: [ 2.0 ]\x0a\x09\x09ifFalse: [ 1.0 ].\x0a\x09rotationSpeed := rotationSpeed\x0a\x09\x09+\x0a\x09\x09\x09(milliseconds * rotationForce\x0a\x09\x09\x09\x09* (targetSpeed - rotationSpeed) sign)\x0a\x09\x09min: (rotationSpeed max: targetSpeed)\x0a\x09\x09max: (rotationSpeed min: targetSpeed)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "maxRotationSpeed", "ifTrue:ifFalse:", "=", "min:max:", "+", "sign", "-", "max:", "min:"]
}),
$globals.CreakoutPadModel);


$core.addMethod(
$core.method({
selector: "center:",
protocol: "instance creation",
fn: function (aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self._basicNew();
$recv($1)._center_(aPoint);
return $recv($1)._initialize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},$globals.CreakoutPadModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "center: aPoint\x0a\x09^ self basicNew\x0a\x09\x09center: aPoint;\x0a\x09\x09initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["center:", "basicNew", "initialize"]
}),
$globals.CreakoutPadModel.a$cls);

$core.addMethod(
$core.method({
selector: "new",
protocol: "instance creation",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._error_("You should create new instances of this class with center:");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.CreakoutPadModel.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self error: 'You should create new instances of this class with center:'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CreakoutPadModel.a$cls);

});
