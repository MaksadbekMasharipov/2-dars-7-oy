import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';



@Injectable()
// data base ulash
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private articleRepo: Repository<Article>,
  ) {}


  // create
  async create(dto: CreateArticleDto, file: Express.Multer.File){
    const article = this.articleRepo.create(dto);

    article.backgroundImge = `http://localhost:4001/uploads/${file.filename}`
    return await this.articleRepo.save(article);
  }


  // get all
  async findAll(): Promise<Article[]> {
    return await this.articleRepo.find();
  }


  // find one
  async findOne(id: number): Promise<Article> {
    const article = await this.articleRepo.findOne({
      where: { id },
    });

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return article;
  }



  // update
  async update(id: number, dto: UpdateArticleDto): Promise<{message: string}> {
    const article = await this.findOne(id);

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    Object.assign(article, dto);
    await this.articleRepo.save(article);

    return {message:"Updated"}
  }



  // delete
  async remove(id: number): Promise<{ message: string }> {
    const article = await this.findOne(id);

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    await this.articleRepo.remove(article);

    return {
      message: `Article with id ${id} deleted successfully`,
    };
  }
}