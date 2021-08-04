import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Comment extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'number',
    default: 0
  })
  likes?: number;

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

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}

export interface CommentRelations {
  // describe navigational properties here
}

export type CommentWithRelations = Comment & CommentRelations;
