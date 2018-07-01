"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var PaintingRegistry = (function (_super) {
    tslib_1.__extends(PaintingRegistry, _super);
    function PaintingRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.examples.paintingRegistry';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly()
    ], PaintingRegistry.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], PaintingRegistry.prototype, "name", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], PaintingRegistry.prototype, "author", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(),
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.number().moreThan(0))
    ], PaintingRegistry.prototype, "price", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], PaintingRegistry.prototype, "owner", void 0);
    return PaintingRegistry;
}(convector_core_model_1.ConvectorModel));
exports.PaintingRegistry = PaintingRegistry;
//# sourceMappingURL=paintingRegistry.model.js.map