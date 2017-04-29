define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("CreakoutWeb-Tests");
$core.packages["CreakoutWeb-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["CreakoutWeb-Tests"].transport = {"type":"amd","amdNamespace":"amber-creakout"};

$core.addClass("CreakoutWebTest", $globals.TestCase, [], "CreakoutWeb-Tests");

});
