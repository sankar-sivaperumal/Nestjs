import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../students/student.entity';
import { Course } from '../courses/course.entity';

@Entity({ name: 'enrollments' })
export class Enrollment {
  @PrimaryColumn()
  enrollment_id: number;

  @ManyToOne(() => Student, (student) => student.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Course, (course) => course.enrollments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  marks?: number;
}

