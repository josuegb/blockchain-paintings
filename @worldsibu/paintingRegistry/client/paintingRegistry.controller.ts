/** @module @worldsibu/convector-examples-paintingRegistry */

import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { PaintingRegistry } from '../src/paintingRegistry.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class PaintingRegistryControllerClient extends ConvectorController {
  private name = 'paintingRegistry';

  constructor(private adapter: ControllerAdapter) {
    super()
  }

  
  public async createPainting(
    
    paintingRegistry: PaintingRegistry
  ) {
    await this.adapter.invoke(this.name, 'createPainting', paintingRegistry);
  }

  
  public async transfer(
    
    paintingRegistryId: string,
    
    to: string
  ) {
    await this.adapter.invoke(this.name, 'transfer', paintingRegistryId, to);
  }
}
