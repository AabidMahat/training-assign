CREATE TABLE Employee_data(
    emp_id INT PRIMARY KEY IDENTITY(1,1),
    emp_name VARCHAR(30),
    salary DECIMAL(10,2),
    city VARCHAR(20)
);

INSERT INTO Employee_data (emp_name, salary, city) VALUES
('Amit Sharma', 750000.00, 'Mumbai'),
('Ravi Shastri', 720000.00, 'Mumbai'),
('Meena Joshi', 680000.00, 'Mumbai'),
('Sana Khan', 800000.50, 'Delhi'),
('Rohan Malhotra', 790000.00, 'Delhi'),
('Nidhi Pandey', 770000.00, 'Delhi'),
('Ravi Patel', 600000.75, 'Bangalore'),
('Kavita Rao', 650000.00, 'Bangalore'),
('Prakash Deshmukh', 620000.00, 'Bangalore'),
('Pooja Desai', 650000.00, 'Hyderabad'),
('Akash Kulkarni', 640000.00, 'Hyderabad'),
('Geeta Naidu', 630000.00, 'Hyderabad');


truncate table Employee_data

select * from Employee_data


Select emp_name ,city,salary
From Employee_data as emp
Where city In 
	(
		Select city 
		From Employee_data 
		Group By city 
		Having emp.salary = Max(salary)
	)
