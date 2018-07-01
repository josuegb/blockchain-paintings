/** @module @worldsibu/convector-paintingRegistry */

import * as yup from 'yup';
import {
  ConvectorModel,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';


export class PaintingRegistry extends ConvectorModel<PaintingRegistry> {
  @ReadOnly()
  public readonly type = 'io.worldsibu.examples.paintingRegistry';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public name: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public author: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number().moreThan(0))
  public price: number;

  @Required()
  @Validate(yup.string())
  public owner: string;
}