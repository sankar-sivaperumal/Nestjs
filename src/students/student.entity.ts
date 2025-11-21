import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Enrollment } from '../enrollments/enrollment.entity';

@Entity({ name: 'students' })
export class Student {
  @PrimaryColumn()
  student_id: number;

  @Column({ length: 60 })
  name: string;

  @Column({ type: 'tinyint' })
  age: number;

  @Column({ type: 'char', length: 1 })
  gender: string;

  @Column({ length: 100, nullable: true })
  city?: string;

  @Column({ type: 'date' })
  date_of_birth: string;

  @OneToMany(() => Enrollment, (enr: Enrollment) => enr.student)
enrollments: Enrollment[];

}
