'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PraiseButton2 = require('./PraiseButton.js');

var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(props) {
    _classCallCheck(this, Thumb);

    var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, props));

    console.log('thumb init - praise times: ', _this.times);
    _this.init();
    return _this;
  }

  _createClass(Thumb, [{
    key: 'init',
    value: function init() {
      this.initDom();
      this.initEvent();
    }
  }, {
    key: 'initDom',
    value: function initDom() {
      this.el.html('<div class="dz-wrapper">\n      <div class="dz-hand">\n        <div class="damuzhi1"></div>\n        <div class="damuzhi2"></div>\n        <div class="damuzhi3"></div>\n        <div class="shizhi1"></div>\n        <div class="shizhi2"></div>\n        <div class="zhongzhi"></div>\n        <div class="wumingzhi"></div>\n        <div class="xiaomuzhi"></div>\n        <div class="xiuzi"></div>\n      </div>\n    </div>');
    }
  }, {
    key: 'initEvent',
    value: function initEvent() {
      this.el.on('click', this.add.bind(this));
    }
  }]);

  return Thumb;
}(_PraiseButton3.default);

exports.default = Thumb;