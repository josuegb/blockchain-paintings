import { ConvectorController } from '@worldsibu/convector-core-controller';
import { PaintingRegistry } from './paintingRegistry.model';
export declare class PaintingRegistryController extends ConvectorController {
    createPainting(paintingRegistry: PaintingRegistry): Promise<void>;
    transfer(paintingRegistryId: string, to: string): Promise<void>;
}
