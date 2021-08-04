import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class TextProduction extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  wordKeys?: string[];

  @property({
    type: 'number',
    default: 0,
  })
  likes?: number;

  @property({
    type: 'number',
    default: 0,
  })
  shares?: number;

  @property({
    type: 'boolean',
    default: false,
  })
  published: boolean;

  @property({
    type: 'date',
    default: new Date
  })
  createdAt: string;

  @property({
    type: 'date',
    default: new Date
  })
  updatedAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TextProduction>) {
    super(data);
  }
}

export interface TextProductionRelations {
  // describe navigational properties here
}

export type TextProductionWithRelations = TextProduction & TextProductionRelations;
