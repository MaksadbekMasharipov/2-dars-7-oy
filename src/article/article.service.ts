import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './model/article.entity';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article) private articleModel: typeof Article) {}
  async create(createArticleDto: CreateArticleDto) {
    return await this.articleModel.create({...createArticleDto});
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.findAll();
  }

  async findOne(id: number): Promise<Article | string> {
    const foundedArticle = await this.articleModel.findOne({where: {id}});
    if (!foundedArticle) {
      return `Article with id ${id} not found`;
    }
    return foundedArticle;
  }

  async update(id: number, updateArticleDto: UpdateArticleDto): Promise<[message: string]> {
    const foundedArticle = await this.articleModel.findOne({where: {id}});
    if (!foundedArticle) {
      return [`Article with id ${id} not found`];
    }
    await foundedArticle.update({...updateArticleDto});
    return [`Article with id ${id} updated successfully`];
  }

  async remove(id: number): Promise<string> {
    const foundedArticle = await this.articleModel.findOne({where: {id}});
    if (!foundedArticle) {
      return `Article with id ${id} not found`;
    }
   await foundedArticle.destroy();
   return `Article with id ${id} deleted successfully`;
  }
}
