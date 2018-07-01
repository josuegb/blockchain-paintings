"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var paintingRegistry_model_1 = require("./paintingRegistry.model");
var PaintingRegistryController = (function (_super) {
    tslib_1.__extends(PaintingRegistryController, _super);
    function PaintingRegistryController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaintingRegistryController.prototype.createPainting = function (paintingRegistry) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tempPaintingRegistry, currentOwner;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, paintingRegistry_model_1.PaintingRegistry.getOne(paintingRegistry.id)];
                    case 1:
                        tempPaintingRegistry = _a.sent();
                        if (tempPaintingRegistry.id) {
                            throw new Error('Painting Registry has already been initialized');
                        }
                        currentOwner = this.sender;
                        paintingRegistry.owner = currentOwner;
                        paintingRegistry.author = currentOwner;
                        return [4, paintingRegistry.save()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    PaintingRegistryController.prototype.transfer = function (paintingRegistryId, to) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var paintingRegistry;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, paintingRegistry_model_1.PaintingRegistry.getOne(paintingRegistryId)];
                    case 1:
                        paintingRegistry = _a.sent();
                        if (paintingRegistry.owner !== this.sender) {
                            throw new Error('The sender is not the painting owner');
                        }
                        paintingRegistry.owner = to;
                        return [4, paintingRegistry.save()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(paintingRegistry_model_1.PaintingRegistry))
    ], PaintingRegistryController.prototype, "createPainting", null);
    tslib_1.__decorate([
        convector_core_controller_1.Invokable(),
        tslib_1.__param(0, convector_core_controller_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_controller_1.Param(yup.string()))
    ], PaintingRegistryController.prototype, "transfer", null);
    PaintingRegistryController = tslib_1.__decorate([
        convector_core_controller_1.Controller('paintingRegistry')
    ], PaintingRegistryController);
    return PaintingRegistryController;
}(convector_core_controller_1.ConvectorController));
exports.PaintingRegistryController = PaintingRegistryController;
//# sourceMappingURL=paintingRegistry.controller.js.map