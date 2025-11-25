import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private repo: Repository<Student>,
  ) {}

  create(student: Partial<Student>) {
    return this.repo.save(student);
  }

  findAll() {
    return this.repo.find({ relations: ['enrollments'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { student_id: id }, relations: ['enrollments'] });
  }

  update(id: number, patch: Partial<Student>) {
    return this.repo.save({ ...patch, student_id: id });
  }
  
  remove(id: number) {
    return this.repo.delete({ student_id: id });
  }
}
