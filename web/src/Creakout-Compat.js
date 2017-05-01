define(["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("Creakout-Compat");
$core.packages["Creakout-Compat"].innerEval = function (expr) { return eval(expr); };
$core.packages["Creakout-Compat"].transport = {"type":"amd","amdNamespace":"amber-creakout"};

$core.addClass("Color", $globals.Object, [], "Creakout-Compat");
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


$core.addClass("CreakoutMath", $globals.Object, [], "Creakout-Compat");
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CreakoutMath.comment="I am a compatibility layer between Pharo and Amber for Math";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "pi",
protocol: "constants",
fn: function(){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Number)._pi();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pi",{},$globals.CreakoutMath.a$cls)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pi\x0a\x09^ Number pi",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["pi"]
}),
$globals.CreakoutMath.a$cls);


$core.addClass("Rectangle", $globals.Object, ["origin", "corner"], "Creakout-Compat");
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
protocol: "*Creakout-Compat",
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
