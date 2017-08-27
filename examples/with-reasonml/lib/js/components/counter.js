// Generated by BUCKLESCRIPT VERSION 1.8.1, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/lib/js/src/reasonReact.js");

var component = ReasonReact.statefulComponent("Counter");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      var countMsg = "Count: " + Pervasives.string_of_int(self[/* state */3]);
      var onClick = function (_, param) {
        return /* Update */Block.__(0, [param[/* state */3] + 1 | 0]);
      };
      return React.createElement("div", undefined, React.createElement("p", undefined, countMsg), React.createElement("button", {
                      onClick: Curry._1(self[/* update */2], onClick)
                    }, "Add"));
    });
  newrecord[/* initialState */10] = (function () {
      return 0;
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
