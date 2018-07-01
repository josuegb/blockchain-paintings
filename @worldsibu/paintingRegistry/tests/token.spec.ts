// tslint:disable:no-unused-expression

import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock';
import 'mocha';

import { PaintingRegistry } from '../src/paintingRegistry.model';
import { PaintingRegistryControllerClient } from '../client/paintingRegistry.controller';

describe('PaintingRegistry', () => {
  let paintingRegistryId: string;
  let adapter: MockControllerAdapter;
  let paintingRegistryCtrl: PaintingRegistryControllerClient;

  const newOwner = 'new owner';

  before(async () => {
    paintingRegistryId = uuid();
    adapter = new MockControllerAdapter();
    paintingRegistryCtrl = new PaintingRegistryControllerClient(adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'PaintingRegistryController',
        name: join(__dirname, '../')
      }
    ]);
  });

  it('should initialize the painting', async () => {
    await paintingRegistryCtrl.createPainting(new PaintingRegistry({
      id: paintingRegistryId,
      name: 'Mona Lisa',
      price: 3000000
    }));

    const paintingRegistry = await adapter.getById<PaintingRegistry>(paintingRegistryId);

    expect(paintingRegistry).to.exist;
  });

  it('should transfer paintingRegistrys', async () => {
    await paintingRegistryCtrl.transfer(paintingRegistryId, newOwner);

    const paintingRegistry = await adapter.getById<PaintingRegistry>(paintingRegistryId);

    expect(paintingRegistry.owner).to.eq(newOwner);
  });
});
