import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './model/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepo: Repository<Article>,
  ) {}

  async create(dto: CreateArticleDto): Promise<Article> {
    const article = this.articleRepo.create(dto);
    return await this.articleRepo.save(article);
  }

  async findAll(): Promise<Article[]> {
    return await this.articleRepo.find();
  }

  async findOne(id: number): Promise<Article> {
    const article = await this.articleRepo.findOne({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return article;
  }

  async update(id: number, dto: UpdateArticleDto): Promise<Article> {
    const article = await this.findOne(id);

    Object.assign(article, dto);
    return await this.articleRepo.save(article);
  }

  async remove(id: number): Promise<{ message: string }> {
    const article = await this.findOne(id);

    await this.articleRepo.remove(article);

    return {
      message: `Article with id ${id} deleted successfully`,
    };
  }
}