
CREATE TABLE Emp3(
    empId INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(40),
    email VARCHAR(30),
    department VARCHAR(10),
    salary DECIMAL(10, 2),
    joiningDate DATE,
    CHECK (department IN ('HR', 'IT', 'Finance'))
);


INSERT INTO Emp3  VALUES
(1, 'Alice Smith', 'alice.smith@example.com', 'HR', 50000.00, '2022-01-01'),
(2, 'Bob Johnson', 'bob.johnson@example.com', 'IT', 60000.00, '2022-02-01'),
(3, 'Catherine Brown', 'catherine.brown@example.com', 'Finance', 55000.00, '2022-03-01'),
(4, 'David Wilson', 'david.wilson@example.com', 'IT', 62000.00, '2022-04-01'),
(5, 'Eva Martin', 'eva.martin@example.com', 'HR', 58000.00, '2022-05-01');


UPDATE Emp3 SET salary = 55000.00 where empId=1;

DELETE Emp3 WHERE empId=1

SELECT * FROM Emp3;

DROP TABLE Emp2;

Create table Order_3 (
	order_id int primary key,
	customer_name varchar(40),
	product_name varchar(30),
	quantity int,
	price decimal(5,2),
	order_data Date
);


INSERT INTO Order_3 VALUES
(1, 'Rajesh Sharma', 'Laptop', 1, 54999.99, '2025-02-01'),
(2, 'Asha Nair', 'Smartphone', 2, 29999.50, '2025-02-03'),
(3, 'Mohan Rao', 'Headphones', 3, 1499.75, '2025-02-05'),
(4, 'Sneha Singh', 'Smartwatch', 1, 19999.99, '2025-02-10'),
(5, 'Arjun Patel', 'Tablet', 2, 15999.49, '2025-02-12'),
(6, 'Meera Kapoor', 'Camera', 1, 25999.89, '2025-02-15'),
(7, 'Anjali Joshi', 'Gaming Console', 1, 39999.95, '2025-02-18');

Update Order_3 Set customer_name='Aabid Mahat' Where order_id =7;

Delete Order_3 where order_id=2;


CREATE TABLE Patients_1(
	patient_id int IDENTITY(1,1) Primary key,
	name varchar(10),
	age int,
	disease varchar(30),
	doctor_assigned varchar(30)
);

INSERT INTO Patients_1 (name, age, disease, doctor_assigned)
VALUES 
('Raj', 30, 'Diabetes', 'Dr. A. Patel'),
('Anita', 25, 'Asthma', 'Dr. B. Sharma'),
('Rahul', 40, 'Hypertension', 'Dr. S. Mehta'),
('Priya', 35, 'Thyroid', 'Dr. K. Nair'),
('Vijay', 50, 'Cardiac Arrest', 'Dr. D. Rao'),
('Neha', 28, 'Migraine', 'Dr. J. Sinha'),
('Amit', 45, 'Cancer', 'Dr. P. Singh');

SELECT * FROM Patients_1;

Select * from Patients_1 where age>40;

Select * from Patients_1 where doctor_assigned = 'Dr. A. Patel';


Select disease, COUNT(*) as patient_per_disease   from Patients_1 Group By disease Order By Max(age) desc;