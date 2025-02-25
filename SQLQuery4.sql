
Create Table Department(
	department_id  int primary key Identity(1,1),
	depart_name varchar(30)
);

Create Table Employee_2(
	employee_id int primary key Identity(1,1),
	emp_name varchar(20) ,
	depart_id int,
	constraint fk_depart_id Foreign key(depart_id) References Department(department_id)
);

Create Table teacher_1(
	teacher_id int primary key Identity(1,1),
	teacher_name varchar(20),
);

ALTER TABLE teacher_1
ADD depart_id INT;

Alter table teacher_1
ADD CONSTRAINT fk_teacher_depart_id
FOREIGN KEY (depart_id) REFERENCES Department(department_id);


CREATE TABLE new_teacher_1(
    new_teach_name VARCHAR(30)
);

ALTER TABLE new_teacher_1 ADD new_teacher_1 INT NOT NULL;

ALTER TABLE new_teacher_1 
ADD CONSTRAINT pk_new_teacher_1 PRIMARY KEY(new_teacher_1);

Insert Into Department Values('CSE');

Insert Into Employee_2 Values(
	'Aabid Mahat',1
);