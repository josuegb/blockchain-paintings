/** @module @worldsibu/convector-examples-paintingRegistry */

import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { PaintingRegistry } from './paintingRegistry.model';

@Controller('paintingRegistry')
export class PaintingRegistryController extends ConvectorController {

  @Invokable()
  public async createPainting(
    @Param(PaintingRegistry)
    paintingRegistry: PaintingRegistry
  ) {
    const tempPaintingRegistry = await PaintingRegistry.getOne(paintingRegistry.id);

    if (tempPaintingRegistry.id) {
      throw new Error('Painting Registry has already been initialized');
    }

    const currentOwner = this.sender;

    paintingRegistry.owner = currentOwner;
    paintingRegistry.author = currentOwner;    

    await paintingRegistry.save();
  }

  @Invokable()
  public async transfer(
    @Param(yup.string())
    paintingRegistryId: string,
    @Param(yup.string())
    to: string
  ) {
    const paintingRegistry = await PaintingRegistry.getOne(paintingRegistryId);

    if (paintingRegistry.owner !==  this.sender) {
      throw new Error('The sender is not the painting owner');
    }

    paintingRegistry.owner = to;

    await paintingRegistry.save();
  }
}
