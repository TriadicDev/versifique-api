import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TextProduction, TextProductionRelations} from '../models';

export class TextProductionRepository extends DefaultCrudRepository<
  TextProduction,
  typeof TextProduction.prototype.id,
  TextProductionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TextProduction, dataSource);
  }
}
