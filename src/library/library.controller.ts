import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LibraryService } from './library.service';

import { Library } from './library.model';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() librarydata: Library) {
    return this.libraryService.create(librarydata);
  }

  @Get()
  findAll() {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libraryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() libaraydata: Library) {
    return this.libraryService.update(id, libaraydata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryService.remove(id);
  }
}
