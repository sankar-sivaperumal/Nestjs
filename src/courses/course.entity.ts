import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Enrollment } from '../enrollments/enrollment.entity';

@Entity({ name: 'courses' })
export class Course {
  @PrimaryColumn()
  course_id: number;

  @Column({ length: 100, unique: true })
  course_name: string;

  @Column({ length: 100 })
  teacher_name: string;

  @OneToMany(() => Enrollment, (enr: Enrollment) => enr.course)
enrollments: Enrollment[];

}

