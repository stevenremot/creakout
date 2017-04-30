define(["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("CreakoutWeb");
$core.packages["CreakoutWeb"].innerEval = function (expr) { return eval(expr); };
$core.packages["CreakoutWeb"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["CreakoutWeb"].transport = {"type":"amd","amdNamespace":"amber-creakout"};

$core.addClass("Color", $globals.Object, [], "CreakoutWeb");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Color.comment="A simple polyfill of the Color object to be compatible with the Pharo implementation of Creakout";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "h:s:l:",
protocol: "instance creation",
fn: function(h,s,l){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $7,$6,$5,$9,$8,$4,$3,$2,$1;
$7=$recv(h)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="hsl(".__comma($7);
$5=$recv($6).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$9=$recv(s).__star((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("%,");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($recv(l).__star((100)))._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma("%)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h:s:l:",{h:h,s:s,l:l},$globals.Color.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["h", "s", "l"],
source: "h: h s: s l: l\x0a\x09^ 'hsl('\x0a\x09\x09, h asString\x0a\x09\x09, ','\x0a\x09\x09, (s * 100) asString\x0a\x09\x09, '%,'\x0a\x09\x09, (l * 100) asString\x0a\x09\x09, '%)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "*"]
}),
$globals.Color.a$cls);

$core.addMethod(
$core.method({
selector: "h:s:v:",
protocol: "instance creation",
fn: function(h,s,v){
var self=this,$self=this;
var doubleL,newSat;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=(2).__minus(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
doubleL=$recv($1).__star(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv(doubleL).__lt((1));
if($core.assert($2)){
$3=$recv(s).__star(v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
newSat=$recv($3).__slash(doubleL);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
} else {
newSat=$recv($recv(s).__star(v)).__slash((2).__minus(doubleL));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
}
return $self._h_s_l_(h,newSat,$recv(doubleL).__slash((2)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"h:s:v:",{h:h,s:s,v:v,doubleL:doubleL,newSat:newSat},$globals.Color.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["h", "s", "v"],
source: "h: h s: s v: v\x0a\x09| doubleL newSat |\x0a\x09doubleL := (2 - s) * v.\x0a\x09newSat := (doubleL < 1)\x0a\x09\x09ifTrue: [ s * v / doubleL ]\x0a\x09\x09ifFalse: [ s * v / (2 - doubleL) ].\x0a\x09\x09\x0a\x09^ self\x0a\x09 h: h\x0a\x09 s: newSat\x0a\x09 l: doubleL / 2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "-", "ifTrue:ifFalse:", "<", "/", "h:s:l:"]
}),
$globals.Color.a$cls);

$core.addMethod(
$core.method({
selector: "r:g:b:",
protocol: "instance creation",
fn: function(r,g,b){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $8,$7,$6,$5,$10,$9,$4,$3,$2,$1;
$8=$recv(r).__star((255));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$6="rgb(".__comma($7);
$5=$recv($6).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$10=$recv(g).__star((255));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$9=$recv($10)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$3=$recv($4).__comma(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($recv(b).__star((255)))._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r:g:b:",{r:r,g:g,b:b},$globals.Color.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["r", "g", "b"],
source: "r: r g: g b: b\x0a\x09^ 'rgb('\x0a\x09    , (r * 255) asString\x0a\x09\x09, ','\x0a\x09\x09, (g * 255) asString\x0a\x09\x09, ','\x0a\x09\x09, (b * 255) asString\x0a\x09\x09, ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "*"]
}),
$globals.Color.a$cls);


$core.addClass("CreakoutWeb", $globals.Object, [], "CreakoutWeb");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutWeb.comment="Main entry point for the creakout web code";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
fn: function(){
var self=this,$self=this;
var model,canvas;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
model=$recv($globals.CreakoutModel)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$1=$recv($globals.CreakoutWebCanvas)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
$recv($1)._model_(model);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model:"]=1;
//>>excludeEnd("ctx");
$2=$recv(window)._innerWidth();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["innerWidth"]=1;
//>>excludeEnd("ctx");
$3=$recv(window)._innerHeight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["innerHeight"]=1;
//>>excludeEnd("ctx");
$recv($1)._width_height_($2,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:height:"]=1;
//>>excludeEnd("ctx");
canvas=$recv($1)._attachTo_($recv(document)._body());
$4=$recv($globals.CreakoutWebKeyboardHandler)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv($4)._model_(model);
$5=$recv($4)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=1;
//>>excludeEnd("ctx");
$6=$recv($globals.CreakoutWebLoop)._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$recv($6)._block_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(canvas)._render();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["block:"]=1;
//>>excludeEnd("ctx");
$7=(1000).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$recv($6)._frequency_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["frequency:"]=1;
//>>excludeEnd("ctx");
$8=$recv($6)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=2;
//>>excludeEnd("ctx");
$9=$recv($globals.CreakoutWebLoop)._new();
$recv($9)._block_((function(millis){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(model)._update_(millis);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({millis:millis},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($9)._frequency_((1000).__slash((120)));
$recv($9)._start();
$recv(window)._addEventListener_block_("resize",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(canvas)._width_height_($recv(window)._innerWidth(),$recv(window)._innerHeight());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{model:model,canvas:canvas},$globals.CreakoutWeb.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09| model canvas |\x0a\x09model := CreakoutModel new.\x0a\x09\x0a\x09canvas := CreakoutWebCanvas new\x0a\x09\x09model: model;\x0a\x09\x09width: window innerWidth\x0a\x09\x09height: window innerHeight;\x0a\x09\x09attachTo: document body.\x0a\x09\x09\x0a\x09CreakoutWebKeyboardHandler new\x0a\x09\x09model: model;\x0a\x09\x09start.\x0a\x09\x09\x0a\x09CreakoutWebLoop new\x0a\x09\x09block: [ canvas render ];\x0a\x09\x09frequency: 1000 / 60;\x0a\x09\x09start.\x0a\x09\x09\x0a\x09CreakoutWebLoop new\x0a\x09\x09block: [ :millis | model update: millis ];\x0a\x09\x09frequency: 1000 / 120;\x0a\x09\x09start.\x0a\x09\x09\x0a\x09window addEventListener: 'resize' block: [\x0a\x09\x09canvas width: window innerWidth\x0a\x09\x09\x09   height: window innerHeight\x0a    ].",
referencedClasses: ["CreakoutModel", "CreakoutWebCanvas", "CreakoutWebKeyboardHandler", "CreakoutWebLoop"],
//>>excludeEnd("ide");
messageSends: ["new", "model:", "width:height:", "innerWidth", "innerHeight", "attachTo:", "body", "start", "block:", "render", "frequency:", "/", "update:", "addEventListener:block:"]
}),
$globals.CreakoutWeb.a$cls);


$core.addClass("CreakoutWebCanvas", $globals.Object, ["canvas", "context", "model"], "CreakoutWeb");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutWebCanvas.comment="I am in charge of rendering a CreakoutModel class on a canvas.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "attachTo:",
protocol: "dom",
fn: function(aNode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aNode)._appendChild_($self["@canvas"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attachTo:",{aNode:aNode},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "attachTo: aNode\x0a\x09aNode appendChild: canvas.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendChild:"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "ballColor",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Color)._h_s_v_((217),(0.7),(0.7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ballColor",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ballColor\x0a\x09^ Color h: 217 s: 0.7 v: 0.7",
referencedClasses: ["Color"],
//>>excludeEnd("ide");
messageSends: ["h:s:v:"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "boardSize",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self["@model"])._boardSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boardSize",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boardSize\x0a\x09^ model boardSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["boardSize"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "drawBall",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$7,$6,$5;
$1=$self["@context"];
$recv($1)._save();
$recv($1)._fillStyle_($self._ballColor());
$recv($1)._beginPath();
$4=$recv($self["@model"])._ball();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ball"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._position();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["position"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._x();
$7=$recv($self["@model"])._ball();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ball"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._position();
$5=$recv($6)._y();
$recv($1)._arc_y_radius_startAngle_endAngle_($2,$5,$recv($recv($self["@model"])._ball())._radius(),(0),(2).__star($recv($globals.Number)._pi()));
$recv($1)._fill();
$recv($1)._restore();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawBall",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawBall\x0a\x09context\x0a\x09\x09save;\x0a\x09\x09fillStyle: self ballColor;\x0a\x09\x09beginPath;\x0a\x09\x09arc: model ball position x\x0a\x09\x09\x09y: model ball position y\x0a\x09\x09\x09radius: model ball radius\x0a\x09\x09\x09startAngle: 0\x0a\x09\x09\x09endAngle: 2 * Number pi;\x0a\x09\x09fill;\x0a\x09\x09restore.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["save", "fillStyle:", "ballColor", "beginPath", "arc:y:radius:startAngle:endAngle:", "x", "position", "ball", "y", "radius", "*", "pi", "fill", "restore"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "drawBrick:",
protocol: "rendering",
fn: function(aBrick){
var self=this,$self=this;
var width,leftAngle,rightAngle,left,right,minRad,maxRad;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$11,$10,$12,$13,$14,$16,$15,$17,$19,$20,$18,$22,$23,$21,$25,$24,$26,$28,$29,$27,$31,$32,$30;
$1=$recv($recv(aBrick)._width()).__slash((180));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$2=$recv($globals.Number)._pi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pi"]=1;
//>>excludeEnd("ctx");
width=$recv($1).__star($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv(aBrick)._leftAngle()).__slash((180));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$4=$recv($globals.Number)._pi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pi"]=2;
//>>excludeEnd("ctx");
leftAngle=$recv($3).__star($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$5=$recv($recv(aBrick)._rightAngle()).__slash((180));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=3;
//>>excludeEnd("ctx");
$6=$recv($globals.Number)._pi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pi"]=3;
//>>excludeEnd("ctx");
rightAngle=$recv($5).__star($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$7=$recv(leftAngle)._cos();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cos"]=1;
//>>excludeEnd("ctx");
$8=$recv(leftAngle)._sin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sin"]=1;
//>>excludeEnd("ctx");
left=$recv($7).__at($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
right=$recv($recv(rightAngle)._cos()).__at($recv(rightAngle)._sin());
$9=$recv(aBrick)._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=1;
//>>excludeEnd("ctx");
$11=$recv(aBrick)._thickness();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thickness"]=1;
//>>excludeEnd("ctx");
$10=$recv($11).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=4;
//>>excludeEnd("ctx");
minRad=$recv($9).__minus($10);
$12=minRad;
$13=$recv(aBrick)._thickness();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thickness"]=2;
//>>excludeEnd("ctx");
maxRad=$recv($12).__plus($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$14=$self["@context"];
$recv($14)._save();
$recv($14)._fillStyle_($recv(aBrick)._color());
$16=$self._boardSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["boardSize"]=1;
//>>excludeEnd("ctx");
$15=$recv($16).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=5;
//>>excludeEnd("ctx");
$17=$recv($self._boardSize()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=6;
//>>excludeEnd("ctx");
$recv($14)._translate_y_($15,$17);
$recv($14)._beginPath();
$19=$recv(left)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$20=$recv(aBrick)._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=2;
//>>excludeEnd("ctx");
$18=$recv($19).__star($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$22=$recv(left)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$23=$recv(aBrick)._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=3;
//>>excludeEnd("ctx");
$21=$recv($22).__star($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
$25=$recv(aBrick)._thickness();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thickness"]=3;
//>>excludeEnd("ctx");
$24=$recv($25).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=7;
//>>excludeEnd("ctx");
$26=leftAngle;
$28=leftAngle;
$29=$recv($globals.Number)._pi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pi"]=4;
//>>excludeEnd("ctx");
$27=$recv($28).__plus($29);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$recv($14)._arc_y_radius_startAngle_endAngle_antiCw_($18,$21,$24,$26,$27,true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arc:y:radius:startAngle:endAngle:antiCw:"]=1;
//>>excludeEnd("ctx");
$recv($14)._arc_y_radius_startAngle_endAngle_((0),(0),maxRad,leftAngle,rightAngle);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["arc:y:radius:startAngle:endAngle:"]=1;
//>>excludeEnd("ctx");
$31=$recv(right)._x();
$32=$recv(aBrick)._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=4;
//>>excludeEnd("ctx");
$30=$recv($31).__star($32);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$recv($14)._arc_y_radius_startAngle_endAngle_($30,$recv($recv(right)._y()).__star($recv(aBrick)._radius()),$recv($recv(aBrick)._thickness()).__slash((2)),rightAngle,$recv(rightAngle).__plus($recv($globals.Number)._pi()));
$recv($14)._arc_y_radius_startAngle_endAngle_antiCw_((0),(0),minRad,rightAngle,leftAngle,true);
$recv($14)._fill();
$recv($14)._restore();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawBrick:",{aBrick:aBrick,width:width,leftAngle:leftAngle,rightAngle:rightAngle,left:left,right:right,minRad:minRad,maxRad:maxRad},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrick"],
source: "drawBrick: aBrick\x0a\x09| width leftAngle rightAngle left right minRad maxRad |\x0a\x09width := aBrick width / 180 * Number pi.\x0a\x09\x0a\x09leftAngle := aBrick leftAngle / 180 * Number pi.\x0a\x09rightAngle := aBrick rightAngle / 180 * Number pi.\x0a\x09\x0a\x09left := leftAngle cos @ leftAngle sin.\x0a\x09right := (rightAngle cos)@(rightAngle sin).\x0a\x09\x0a\x09minRad := aBrick radius - (aBrick thickness / 2.0).\x0a\x09maxRad := minRad + aBrick thickness.\x0a\x09\x0a\x09context save;\x0a\x09\x09fillStyle: aBrick color;\x0a\x09\x09\x0a\x09\x09translate: (self boardSize / 2) y: (self boardSize /2);\x0a\x09\x09beginPath;\x0a\x09\x09arc: (left x * aBrick radius)\x0a\x09\x09\x09y: (left y * aBrick radius)\x0a\x09\x09\x09radius: aBrick thickness / 2\x0a\x09\x09\x09startAngle: leftAngle\x0a\x09\x09\x09endAngle: leftAngle + Number pi\x0a\x09\x09\x09antiCw: true;\x0a\x09\x09\x09\x0a\x09\x09arc: 0 \x0a\x09\x09\x09y: 0\x0a\x09\x09\x09radius: maxRad\x0a\x09\x09\x09startAngle: leftAngle\x0a\x09\x09\x09endAngle: rightAngle;\x0a\x0a\x09\x09arc: (right x * aBrick radius)\x0a\x09\x09\x09y: (right y * aBrick radius) \x0a\x09\x09\x09radius: aBrick thickness / 2\x0a\x09\x09\x09startAngle: rightAngle\x0a\x09\x09\x09endAngle: rightAngle + Number pi;\x0a\x09\x09\x09\x0a\x09\x09arc: 0 \x0a\x09\x09\x09y: 0\x0a\x09\x09\x09radius: minRad\x0a\x09\x09\x09startAngle: rightAngle\x0a\x09\x09\x09endAngle: leftAngle\x0a\x09\x09\x09antiCw: true;\x0a\x09\x09\x09\x0a\x09\x09fill;\x0a\x09\x09restore.\x0a\x09\x22aCanvas pathTransform restoreAfter: [ \x0a\x09\x09aCanvas pathTransform translateBy: self boardCenter.\x0a\x09\x09aCanvas drawShape: (aCanvas createPath: [ :builder |\x0a\x09\x09\x09builder\x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: left * minRad;\x0a\x09\x09\x09\x09cwArcTo: left * maxRad angle: Float pi;\x0a\x09\x09\x09\x09cwArcTo: right * maxRad angle: width;\x0a\x09\x09\x09\x09cwArcTo: right * minRad angle: Float pi;\x0a\x09\x09\x09\x09ccwArcTo: left * minRad angle: width.\x0a\x09\x09\x09])]\x22",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["*", "/", "width", "pi", "leftAngle", "rightAngle", "@", "cos", "sin", "-", "radius", "thickness", "+", "save", "fillStyle:", "color", "translate:y:", "boardSize", "beginPath", "arc:y:radius:startAngle:endAngle:antiCw:", "x", "y", "arc:y:radius:startAngle:endAngle:", "fill", "restore"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "drawBricks",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@model"])._doBricks_((function(brick){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._drawBrick_(brick);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({brick:brick},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawBricks",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawBricks\x0a\x09model doBricks: [ :brick | self drawBrick: brick ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doBricks:", "drawBrick:"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "drawPads",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
var x,y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$self._boardSize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["boardSize"]=1;
//>>excludeEnd("ctx");
x=$recv($1).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
y=$recv($self._boardSize()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$2=$self["@context"];
$recv($2)._save();
$recv($2)._strokeStyle_("lightgray");
$recv($2)._lineWidth_((1).__slash($self._ratio()));
$recv($2)._beginPath();
$recv($2)._arc_y_radius_startAngle_endAngle_(x,y,$self._padRadius(),(0),(2).__star($recv($globals.Number)._pi()));
$recv($2)._stroke();
$recv($recv($self["@model"])._pad())._doPads_((function(pad){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._drawBrick_(pad);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({pad:pad},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($self["@context"])._restore();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawPads",{x:x,y:y},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawPads\x0a\x09| x y |\x0a\x09x := self boardSize / 2.\x0a\x09y := self boardSize / 2.\x0a\x09\x0a\x09context\x0a\x09\x09save;\x0a\x09\x09strokeStyle: 'lightgray';\x0a\x09\x09lineWidth: 1 / self ratio;\x0a\x09\x09beginPath;\x0a\x09\x09arc: x\x0a\x09\x09  y: y\x0a\x09\x09  radius: self padRadius\x0a\x09\x09  startAngle: 0\x0a\x09\x09  endAngle: 2 * Number pi;\x0a\x09\x09stroke.\x0a\x09\x09\x0a\x09model pad doPads: [ :pad | self drawBrick: pad ].\x0a\x09\x0a\x09context restore.",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["/", "boardSize", "save", "strokeStyle:", "lineWidth:", "ratio", "beginPath", "arc:y:radius:startAngle:endAngle:", "padRadius", "*", "pi", "stroke", "doPads:", "pad", "drawBrick:", "restore"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$self["@canvas"]=$recv(document)._createElement_("canvas");
$1=$recv($self["@canvas"])._style();
$recv($1)._position_("absolute");
$recv($1)._left_((0));
$recv($1)._right_((0));
$recv($1)._top_((0));
$recv($1)._bottom_((0));
$self["@context"]=$recv($self["@canvas"])._getContext_("2d");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09canvas := document createElement: 'canvas'.\x0a\x09canvas style\x0a\x09\x09position: 'absolute';\x0a\x09\x09left: 0;\x0a\x09\x09right: 0;\x0a\x09\x09top: 0;\x0a\x09\x09bottom: 0.\x0a\x0a\x09context := canvas getContext: '2d'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElement:", "position:", "style", "left:", "right:", "top:", "bottom:", "getContext:"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "model:",
protocol: "accessing",
fn: function(aModel){
var self=this,$self=this;
$self["@model"]=aModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "padRadius",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($self["@model"])._pad())._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"padRadius",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padRadius\x0a\x09^ model pad radius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["radius", "pad"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "ratio",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv($self["@canvas"])._width())._min_($recv($self["@canvas"])._height())).__slash($self._boardSize());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ratio",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ratio\x0a\x09^ (canvas width min: canvas height) / self boardSize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "min:", "width", "height", "boardSize"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "render",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($self["@context"])._save();
$self._renderBackground();
$1=$self["@context"];
$2=$self._ratio();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ratio"]=1;
//>>excludeEnd("ctx");
$recv($1)._scale_y_($2,$self._ratio());
$self._drawPads();
$self._drawBricks();
$self._drawBall();
$recv($self["@context"])._restore();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"render",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "render\x0a\x09context save.\x0a\x09self renderBackground.\x0a\x09context scale: self ratio y: self ratio.\x0a\x09self drawPads;\x0a\x09\x09drawBricks;\x0a\x09\x09drawBall.\x0a\x09context restore.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save", "renderBackground", "scale:y:", "ratio", "drawPads", "drawBricks", "drawBall", "restore"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "renderBackground",
protocol: "rendering",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$self["@context"];
$recv($1)._fillStyle_("white");
$3=$recv($self["@context"])._canvas();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["canvas"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._width();
$recv($1)._fillRect_y_width_height_((0),(0),$2,$recv($recv($self["@context"])._canvas())._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBackground",{},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "renderBackground\x0a\x09context\x0a\x09\x09fillStyle: 'white';\x0a\x09\x09fillRect: 0\x0a\x09\x09\x09y: 0\x0a\x09\x09\x09width: context canvas width\x0a\x09\x09\x09height: context canvas height.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fillStyle:", "fillRect:y:width:height:", "width", "canvas", "height"]
}),
$globals.CreakoutWebCanvas);

$core.addMethod(
$core.method({
selector: "width:height:",
protocol: "accessing",
fn: function(aWidth,aHeight){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$self["@canvas"];
$recv($1)._width_(aWidth);
$recv($1)._height_(aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:height:",{aWidth:aWidth,aHeight:aHeight},$globals.CreakoutWebCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "width: aWidth height: aHeight\x0a\x09canvas width: aWidth;\x0a\x09\x09height: aHeight.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "height:"]
}),
$globals.CreakoutWebCanvas);



$core.addClass("CreakoutWebKeyboardHandler", $globals.Object, ["model"], "CreakoutWeb");
$core.addMethod(
$core.method({
selector: "model:",
protocol: "accessing",
fn: function(aModel){
var self=this,$self=this;
$self["@model"]=aModel;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aModel"],
source: "model: aModel\x0a\x09model := aModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutWebKeyboardHandler);

$core.addMethod(
$core.method({
selector: "onKeyDown:",
protocol: "event handling",
fn: function(anEvent){
var self=this,$self=this;
var keyValue,rotationDirection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
keyValue=$recv(anEvent)._key();
rotationDirection=(0);
$1=$recv(keyValue).__eq("ArrowLeft");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
rotationDirection=$recv(rotationDirection).__minus((1));
rotationDirection;
}
$2=$recv(keyValue).__eq("ArrowRight");
if($core.assert($2)){
rotationDirection=$recv(rotationDirection).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
rotationDirection;
}
$3=$recv($self["@model"])._pad();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pad"]=1;
//>>excludeEnd("ctx");
$recv($3)._rotationDirection_($recv($recv($recv($self["@model"])._pad())._rotationDirection()).__plus(rotationDirection));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent,keyValue:keyValue,rotationDirection:rotationDirection},$globals.CreakoutWebKeyboardHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onKeyDown: anEvent\x0a\x09| keyValue rotationDirection |\x0a\x09keyValue := anEvent key.\x0a\x09rotationDirection := 0.\x0a\x09\x0a\x09keyValue = 'ArrowLeft'\x0a\x09\x09ifTrue: [  rotationDirection := rotationDirection - 1 ].\x0a\x09\x0a\x09keyValue = 'ArrowRight'\x0a\x09\x09ifTrue: [ rotationDirection := rotationDirection + 1 ].\x0a\x09\x09\x0a\x09model pad rotationDirection: (model pad rotationDirection + rotationDirection).\x0a\x09\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key", "ifTrue:", "=", "-", "+", "rotationDirection:", "pad", "rotationDirection"]
}),
$globals.CreakoutWebKeyboardHandler);

$core.addMethod(
$core.method({
selector: "onKeyUp:",
protocol: "event handling",
fn: function(anEvent){
var self=this,$self=this;
var keyValue,rotationDirection;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
keyValue=$recv(anEvent)._key();
rotationDirection=(0);
$1=$recv(keyValue).__eq("ArrowLeft");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
rotationDirection=$recv(rotationDirection).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
rotationDirection;
}
$2=$recv(keyValue).__eq("ArrowRight");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
rotationDirection=$recv(rotationDirection).__plus((1));
rotationDirection;
}
$3=$recv(keyValue).__eq("ArrowUp");
if($core.assert($3)){
$recv($self["@model"])._shoot();
}
$4=$recv($self["@model"])._pad();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pad"]=1;
//>>excludeEnd("ctx");
$recv($4)._rotationDirection_($recv($recv($recv($self["@model"])._pad())._rotationDirection()).__minus(rotationDirection));
$recv($self["@model"])._ifEnd_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@model"])._restart();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onKeyUp:",{anEvent:anEvent,keyValue:keyValue,rotationDirection:rotationDirection},$globals.CreakoutWebKeyboardHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "onKeyUp: anEvent\x0a\x09| keyValue rotationDirection |\x0a\x09keyValue := anEvent key.\x0a\x09rotationDirection := 0.\x0a\x09\x0a\x09keyValue = 'ArrowLeft'\x0a\x09\x09ifTrue: [  rotationDirection := rotationDirection - 1 ].\x0a\x09\x0a\x09keyValue = 'ArrowRight'\x0a\x09\x09ifTrue: [ rotationDirection := rotationDirection + 1 ].\x0a\x09\x09\x0a\x09keyValue = 'ArrowUp'\x0a\x09\x09ifTrue: [ model shoot ].\x0a\x09\x09\x0a\x09model pad rotationDirection: model pad rotationDirection - rotationDirection.\x0a\x09\x0a\x09model ifEnd: [ model restart ]\x0a\x09\x09\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["key", "ifTrue:", "=", "-", "+", "shoot", "rotationDirection:", "pad", "rotationDirection", "ifEnd:", "restart"]
}),
$globals.CreakoutWebKeyboardHandler);

$core.addMethod(
$core.method({
selector: "start",
protocol: "event handling",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=window;
$recv($1)._addEventListener_block_("keydown",(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onKeyDown_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addEventListener:block:"]=1;
//>>excludeEnd("ctx");
$recv($1)._addEventListener_block_("keyup",(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._onKeyUp_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.CreakoutWebKeyboardHandler)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09window \x0a\x09\x09addEventListener: 'keydown' block: [ :evt | self onKeyDown: evt ];\x0a\x09\x09addEventListener: 'keyup' block: [ :evt | self onKeyUp: evt ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:block:", "onKeyDown:", "onKeyUp:"]
}),
$globals.CreakoutWebKeyboardHandler);



$core.addClass("CreakoutWebLoop", $globals.Object, ["isRunning", "frequency", "lastMillis", "counter", "block"], "CreakoutWeb");
$core.addMethod(
$core.method({
selector: "block:",
protocol: "accessing",
fn: function(aBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self["@block"]=(function(millis){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._runIteration_millis_(aBlock,millis);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({millis:millis},$ctx1,1)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"block:",{aBlock:aBlock},$globals.CreakoutWebLoop)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "block: aBlock\x0a\x09block := [ :millis |\x0a\x09\x09self runIteration: aBlock millis: millis ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["runIteration:millis:"]
}),
$globals.CreakoutWebLoop);

$core.addMethod(
$core.method({
selector: "frequency:",
protocol: "accessing",
fn: function(aNumber){
var self=this,$self=this;
$self["@frequency"]=aNumber;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "frequency: aNumber\x0a\x09frequency := aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutWebLoop);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "initialization",
fn: function(){
var self=this,$self=this;
$self["@isRunning"]=false;
$self["@frequency"]=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09isRunning := false.\x0a\x09frequency := 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutWebLoop);

$core.addMethod(
$core.method({
selector: "runIteration:millis:",
protocol: "running",
fn: function(aBlock,millis){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
$1=$self["@lastMillis"];
if(($receiver = $1) == null || $receiver.a$nil){
$self["@lastMillis"]=millis;
$self["@lastMillis"];
$self["@counter"]=(0);
$self["@counter"];
$recv(window)._requestAnimationFrame_($self["@block"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["requestAnimationFrame:"]=1;
//>>excludeEnd("ctx");
return self;
} else {
$1;
}
$2=$self["@counter"];
$3=$recv(millis).__minus($self["@lastMillis"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$self["@counter"]=$recv($2).__plus($3);
$self["@lastMillis"]=millis;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self["@counter"]).__gt_eq($self["@frequency"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self["@counter"]=$recv($self["@counter"]).__minus($self["@frequency"]);
$self["@counter"];
return $recv(aBlock)._value_($self["@frequency"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$4=$self["@isRunning"];
if($core.assert($4)){
$recv(window)._requestAnimationFrame_($self["@block"]);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"runIteration:millis:",{aBlock:aBlock,millis:millis},$globals.CreakoutWebLoop)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "millis"],
source: "runIteration: aBlock millis: millis\x0a\x09lastMillis ifNil: [\x0a\x09\x09lastMillis := millis.\x0a\x09\x09counter := 0.\x0a\x09\x09window requestAnimationFrame: block.\x0a\x09\x09^ self\x0a\x09].\x0a\x09\x0a\x09counter := counter + (millis - lastMillis).\x0a\x09lastMillis := millis.\x0a\x09\x0a\x09[ counter >= frequency ] whileTrue: [\x0a\x09\x09counter := counter - frequency.\x0a\x09\x09aBlock value: frequency.\x0a\x09].\x0a\x0a\x09isRunning ifTrue: [\x0a\x09\x09window requestAnimationFrame: block\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "requestAnimationFrame:", "+", "-", "whileTrue:", ">=", "value:", "ifTrue:"]
}),
$globals.CreakoutWebLoop);

$core.addMethod(
$core.method({
selector: "start",
protocol: "running",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$self["@block"];
if(($receiver = $1) == null || $receiver.a$nil){
$1;
} else {
$self["@isRunning"]=true;
$self["@isRunning"];
$self["@lastMillis"]=nil;
$self["@lastMillis"];
$recv(window)._requestAnimationFrame_($self["@block"]);
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.CreakoutWebLoop)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09block ifNotNil: [\x0a\x09\x09isRunning := true.\x0a\x09\x09lastMillis := nil.\x0a\x09\x09window requestAnimationFrame: block.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "requestAnimationFrame:"]
}),
$globals.CreakoutWebLoop);

$core.addMethod(
$core.method({
selector: "stop",
protocol: "running",
fn: function(){
var self=this,$self=this;
$self["@isRunning"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09isRunning := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CreakoutWebLoop);



$core.addClass("Rectangle", $globals.Object, ["origin", "corner"], "CreakoutWeb");
$core.addMethod(
$core.method({
selector: "containsRect:",
protocol: "testing",
fn: function(aRect){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv($recv(aRect)._origin()).__gt_eq($self["@origin"]))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aRect)._corner()).__lt_eq($self["@corner"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"containsRect:",{aRect:aRect},$globals.Rectangle)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRect"],
source: "containsRect: aRect\x0a\x09\x22Answer whether aRect is within the receiver (OK to coincide).\x22\x0a\x0a\x09^ aRect origin >= origin and: [aRect corner <= corner]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">=", "origin", "<=", "corner"]
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "corner",
protocol: "accessing",
fn: function(){
var self=this,$self=this;
return $self["@corner"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "corner\x0a\x09^corner",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "corner:",
protocol: "accessing",
fn: function(aPoint){
var self=this,$self=this;
$self["@corner"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "corner: aPoint\x0a\x09corner := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "origin",
protocol: "accessing",
fn: function(){
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
$globals.Rectangle);

$core.addMethod(
$core.method({
selector: "origin:",
protocol: "accessing",
fn: function(aPoint){
var self=this,$self=this;
$self["@origin"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "origin: aPoint\x0a\x09origin := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Rectangle);


$core.addMethod(
$core.method({
selector: "point:point:",
protocol: "instance creation",
fn: function(origin,corner){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Rectangle)._new();
$recv($1)._origin_(origin);
return $recv($1)._corner_(corner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"point:point:",{origin:origin,corner:corner},$globals.Rectangle.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["origin", "corner"],
source: "point: origin point: corner\x0a\x09^ Rectangle new origin: origin; corner: corner",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
messageSends: ["origin:", "new", "corner:"]
}),
$globals.Rectangle.a$cls);

$core.addMethod(
$core.method({
selector: "between:and:",
protocol: "*CreakoutWeb",
fn: function(min,max){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__gt_eq(min))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self.__lt_eq(max);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"between:and:",{min:min,max:max},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["min", "max"],
source: "between: min and: max\x0a\x09^ (self >= min) and: [ self <= max ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">=", "<="]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "degreesToRadians",
protocol: "*CreakoutWeb",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.__slash((180))).__star($recv($globals.Number)._pi());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"degreesToRadians",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "degreesToRadians\x0a\x09^ self / 180 * Number pi",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["*", "/", "pi"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "min:max:",
protocol: "*CreakoutWeb",
fn: function(min,max){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._min_(min))._max_(max);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"min:max:",{min:min,max:max},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["min", "max"],
source: "min: min max: max\x0a\x09^ (self min: min) max: max",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["max:", "min:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "angle",
protocol: "*CreakoutWeb",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(window)._Math())._atan2_x_($self["@y"],$self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"angle",{},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "angle\x0a\x09^ window Math atan2: y x: x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atan2:x:", "Math"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "dotProduct:",
protocol: "*CreakoutWeb",
fn: function(aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($self["@x"]).__star($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $recv($1).__plus($recv($self["@y"]).__star($recv(aPoint)._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dotProduct:",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "dotProduct: aPoint\x0a\x09^ (x * aPoint x) + (y * aPoint y)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "*", "x", "y"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "extent:",
protocol: "*CreakoutWeb",
fn: function(extent){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Rectangle)._point_point_(self,$self.__plus(extent));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"extent:",{extent:extent},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["extent"],
source: "extent: extent\x0a\x09^ Rectangle\x0a\x09\x09point: self\x0a\x09\x09point: self + extent.",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
messageSends: ["point:point:", "+"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "normal",
protocol: "*CreakoutWeb",
fn: function(){
var self=this,$self=this;
var n,d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$1;
n=$recv($recv($self["@y"])._negated()).__at($self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$4=$recv(n)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star($recv(n)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$6=$recv(n)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__star($recv(n)._y());
d=$recv($3).__plus($5);
$2=d;
$1=$recv($2).__eq((0));
if($core.assert($1)){
return (-1).__at((0));
}
return $recv(n).__slash($recv(d)._sqrt());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normal",{n:n,d:d},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normal\x0a\x09\x22Answer a Point representing the unit vector rotated 90 deg clockwise. For the zero point return -1@0.\x22\x0a\x0a\x09| n d |\x0a\x09n := y negated @ x.\x0a\x09(d := (n x * n x + (n y * n y))) = 0\x0a\x09\x09 ifTrue: [ ^ -1 @0 ].\x0a\x09^ n / d sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "negated", "ifTrue:", "=", "+", "*", "x", "y", "/", "sqrt"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "normalized",
protocol: "*CreakoutWeb",
fn: function(){
var self=this,$self=this;
var r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
r=$self._r();
$1=$recv(r).__eq((0));
if($core.assert($1)){
$2=$recv($globals.Point)._x_y_((0),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x:y:"]=1;
//>>excludeEnd("ctx");
return $2;
} else {
$3=$recv($self["@x"]).__slash(r);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
return $recv($globals.Point)._x_y_($3,$recv($self["@y"]).__slash(r));
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalized",{r:r},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalized\x0a\x09| r |\x0a\x09r := self r.\x0a\x09\x0a\x09r = 0\x0a\x09\x09ifTrue: [ ^ Point x: 0 y: 0 ]\x0a\x09\x09ifFalse: [ ^ Point x: x / r y: y / r ]\x0a\x09",
referencedClasses: ["Point"],
//>>excludeEnd("ide");
messageSends: ["r", "ifTrue:ifFalse:", "=", "x:y:", "/"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "r",
protocol: "*CreakoutWeb",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($self["@x"]).__star($self["@x"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($recv($self["@y"]).__star($self["@y"]));
return $recv($1)._sqrt();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"r",{},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "r\x0a\x09^ ((x * x) + (y * y)) sqrt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sqrt", "+", "*"]
}),
$globals.Point);

$core.addMethod(
$core.method({
selector: "rectangle:",
protocol: "*CreakoutWeb",
fn: function(aPoint){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Rectangle)._point_point_(self,aPoint);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectangle:",{aPoint:aPoint},$globals.Point)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "rectangle: aPoint\x0a\x09^ Rectangle\x0a\x09\x09point: self\x0a\x09\x09point: aPoint.",
referencedClasses: ["Rectangle"],
//>>excludeEnd("ide");
messageSends: ["point:point:"]
}),
$globals.Point);

});
