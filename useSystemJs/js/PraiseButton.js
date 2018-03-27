'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      el: document.querySelector('body'),
      times: 0,
      onTimesChange: function onTimesChange() {}
    };

    _classCallCheck(this, PraiseButton);

    this.el = props.el || document.querySelector('body');
    this.times = props.times || 0;
    this.onTimesChange = props.onTimesChange || this._onTimesChange;
    this.onTimesChange(this.times);
  }

  _createClass(PraiseButton, [{
    key: 'add',
    value: function add() {
      this.times++;
      this.onTimesChange(this.times);
    }
  }, {
    key: '_onTimesChange',
    value: function _onTimesChange() {}
  }]);

  return PraiseButton;
}();

exports.default = PraiseButton;