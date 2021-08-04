import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TextProduction} from '../models';
import {TextProductionRepository} from '../repositories';

export class TextProductionController {
  constructor(
    @repository(TextProductionRepository)
    public textProductionRepository : TextProductionRepository,
  ) {}

  @post('/text-productions')
  @response(200, {
    description: 'TextProduction model instance',
    content: {'application/json': {schema: getModelSchemaRef(TextProduction)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TextProduction, {
            title: 'NewTextProduction',
            exclude: ['id'],
          }),
        },
      },
    })
    textProduction: Omit<TextProduction, 'id'>,
  ): Promise<TextProduction> {
    return this.textProductionRepository.create(textProduction);
  }

  @get('/text-productions/count')
  @response(200, {
    description: 'TextProduction model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TextProduction) where?: Where<TextProduction>,
  ): Promise<Count> {
    return this.textProductionRepository.count(where);
  }

  @get('/text-productions')
  @response(200, {
    description: 'Array of TextProduction model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TextProduction, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TextProduction) filter?: Filter<TextProduction>,
  ): Promise<TextProduction[]> {
    return this.textProductionRepository.find(filter);
  }

  @patch('/text-productions')
  @response(200, {
    description: 'TextProduction PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TextProduction, {partial: true}),
        },
      },
    })
    textProduction: TextProduction,
    @param.where(TextProduction) where?: Where<TextProduction>,
  ): Promise<Count> {
    return this.textProductionRepository.updateAll(textProduction, where);
  }

  @get('/text-productions/{id}')
  @response(200, {
    description: 'TextProduction model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TextProduction, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TextProduction, {exclude: 'where'}) filter?: FilterExcludingWhere<TextProduction>
  ): Promise<TextProduction> {
    return this.textProductionRepository.findById(id, filter);
  }

  @patch('/text-productions/{id}')
  @response(204, {
    description: 'TextProduction PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TextProduction, {partial: true}),
        },
      },
    })
    textProduction: TextProduction,
  ): Promise<void> {
    await this.textProductionRepository.updateById(id, textProduction);
  }

  @put('/text-productions/{id}')
  @response(204, {
    description: 'TextProduction PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() textProduction: TextProduction,
  ): Promise<void> {
    await this.textProductionRepository.replaceById(id, textProduction);
  }

  @del('/text-productions/{id}')
  @response(204, {
    description: 'TextProduction DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.textProductionRepository.deleteById(id);
  }
}
