import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class PaintingRegistry extends ConvectorModel<PaintingRegistry> {
    readonly type: string;
    name: string;
    author: string;
    price: number;
    owner: string;
}
