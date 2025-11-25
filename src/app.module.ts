import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { CoursesModule } from './courses/courses.module';
import { Student } from './students/student.entity';
import { Course } from './courses/course.entity';
import { Enrollment } from './enrollments/enrollment.entity';

  @Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'datasirpi',
      password: '',
      database: 'schoolDB',
      entities: [Student, Course, Enrollment],
      synchronize: true
      }),
    StudentsModule,
    CoursesModule,
    EnrollmentsModule,
  ],
    
  
})
export class AppModule {}
