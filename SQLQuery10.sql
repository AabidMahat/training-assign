Create Table Customers_tbl_1(
	customer_id Int Primary key Identity,
	customer_name varchar(30),
	customer_email varchar(40),
	customer_phone varchar(11),
	customer_address varchar(50)
);

Create Table Rooms_tbl(
	room_id Int Primary key Identity,
	room_type Varchar(20) Check(room_type In ('Ac','Non-Ac')),
	price_per_night Decimal(10,2),
	room_status Varchar(10) Check(room_status In ('Booked','Avaliable'))
);

Create Table Bookings_tbl_1(
	booking_id Int Primary Key Identity,
	customer_id Int ,
	room_id Int,
	check_in_date Date,
	check_out_date Date,
	total_ammount Decimal(10,2)

	Foreign Key(customer_id) References Customers_tbl_1(customer_id),
	Foreign Key(room_id) References Rooms_tbl(room_id)
);

Create Table Payments_tbl(
	payment_id Int Primary Key Identity,
	booking_id Int,
	payment_date Date,
	ammount Decimal(10,2),
	payment_method Varchar(10) Check(payment_method In ('Cash','Online')),
	Foreign Key(booking_id) References Bookings_tbl_1(booking_id)
);

Create Table Employees_tbl_4(
	employee_id Int Primary Key Identity,
	emp_name varchar(30),
	emp_position Varchar(10) Check(emp_position In ('Staff','Manager','Owner','Accountant')),
	emp_salary Decimal(10,2),
	hire_date Date,
	manager_id Int Foreign Key(manager_id) REFERENCES Employees_tbl_4(employee_id),
);

Create Table Servies_tbl(
	service_id int Primary Key Identity,
	service_name varchar(10) Check(service_name In ('Cleaning','Laundry','Foods')),
	service_price Decimal(10,2)
);

Create Table Hotel_branch_tbl(
	branch_id Int Primary Key Identity,
	branch_name varchar(40),
	branch_location varchar(100)
);

Create Table Booking_services_tbl(
	booking_service_id Int Primary Key Identity,
	booking_id Int,
	service_id Int,
	service_ammount Decimal(10,2),
	Foreign Key(booking_id) References Bookings_tbl_1(booking_id),
	Foreign Key(service_id) References Servies_tbl(service_id),
);

INSERT INTO Customers_tbl_1 (customer_name, customer_email, customer_phone, customer_address) VALUES
('Rahul Sharma', 'rahul.sharma@example.com', '9876543210', '1234 MG Road, Mumbai'),
('Sneha Kapoor', 'sneha.kapoor@example.com', '9876543211', '5678 CP Road, Delhi'),
('Vikram Singh', 'vikram.singh@example.com', '9876543212', '9101 JP Road, Bangalore'),
('Priya Mehta', 'priya.mehta@example.com', '9876543213', '1123 MG Road, Pune'),
('Anjali Verma', 'anjali.verma@example.com', '9876543214', '1357 LN Road, Chennai');

INSERT INTO Rooms_tbl (room_type, price_per_night, room_status) VALUES
('Ac', 2500.00, 'Avaliable'),
('Non-Ac', 1500.00, 'Booked'),
('Ac', 3000.00, 'Avaliable'),
('Non-Ac', 1800.00, 'Avaliable'),
('Ac', 3500.00, 'Booked');

Select * from Rooms_tbl;

INSERT INTO Bookings_tbl_1 (customer_id, room_id, check_in_date, check_out_date, total_ammount) VALUES
(1, 2, '2025-03-01', '2025-03-05', 10000.00),
(2, 3, '2025-03-02', '2025-03-04', 3000.00),
(3, 4, '2025-03-05', '2025-03-08', 9000.00),
(4, 5, '2025-03-07', '2025-03-10', 5400.00),
(5, 6, '2025-03-09', '2025-03-12', 10500.00);

INSERT INTO Bookings_tbl_1 (customer_id, room_id, check_in_date, check_out_date, total_ammount) VALUES
(1, 2, '2025-03-03', '2025-03-06', 13000.00),
(2, 5, '2025-03-04', '2025-03-08', 5000.00),
(3, 3, '2025-03-09', '2025-03-09', 7000.00);


Select * from Bookings_tbl_1;

INSERT INTO Payments_tbl (booking_id, payment_date, ammount, payment_method) VALUES
(2, '2025-02-28', 10000.00, 'Online'),
(3, '2025-03-01', 3000.00, 'Cash'),
(4, '2025-03-04', 9000.00, 'Online'),
(5, '2025-03-06', 5400.00, 'Cash'),
(6, '2025-03-08', 10500.00, 'Online');

INSERT INTO Employees_tbl_4 (emp_name, emp_position, emp_salary, hire_date, manager_id) VALUES
('Ravi Kumar', 'Manager', 60000.00, '2022-01-15', NULL),
('Sunita Rao', 'Accountant', 45000.00, '2023-03-21', 1),
('Amit Patel', 'Staff', 30000.00, '2024-06-10', 1),
('Neha Joshi', 'Owner', 80000.00, '2020-10-05', NULL),
('Rajesh Gupta', 'Staff', 35000.00, '2021-08-23', 1);

INSERT INTO Servies_tbl (service_name, service_price) VALUES
('Cleaning', 500.00),
('Laundry', 300.00),
('Foods', 700.00),
('Cleaning', 600.00),
('Laundry', 400.00);

INSERT INTO Hotel_branch_tbl (branch_name, branch_location) VALUES
('Mumbai Central', '1234 MG Road, Mumbai'),
('Delhi Hub', '5678 CP Road, Delhi'),
('Bangalore East', '9101 JP Road, Bangalore'),
('Pune West', '1123 MG Road, Pune'),
('Chennai South', '1357 LN Road, Chennai');


INSERT INTO Booking_services_tbl (booking_id, service_id, service_ammount) VALUES
(2, 1, 500.00),
(3, 2, 300.00),
(4, 3, 700.00),
(5, 4, 600.00),
(6, 5, 400.00);


-- Queries

--Using Joins

Select c.customer_name , r.room_type,b.check_in_date, b.total_ammount
From Bookings_tbl_1 As b
Join Customers_tbl_1 c On b.customer_id = c.customer_id
Join Rooms_tbl r On b.room_id = r.room_id


Select 
    e.employee_id AS Employee_ID,
    e.emp_name AS Employee_Name,
    m.emp_name AS Manager_Name
From
    Employees_tbl_4 e
Left Join
    Employees_tbl_4 m ON e.manager_id = m.employee_id;

Select r.room_type, r.room_id
From Rooms_tbl As r
Join Bookings_tbl_1 b On
b.room_id =  r.room_id
Where b.room_id is Null


------------------------------------
--SubQueries

Select * From Customers_tbl_1 
Where customer_id In (
	Select customer_id From Bookings_tbl_1
	Group By customer_id
	Having Count(customer_id)>1
);

Select room_id,room_type,price_per_night,room_status
From Rooms_tbl 
Where price_per_night In (Select MAX(r.price_per_night) 
                         From Rooms_tbl r 
                         JOIN Bookings_tbl_1 b ON r.room_id = b.room_id);

------------------------------------------------
---Views

Create View Active_booking_view As
Select 
	c.customer_name as Customer_Name ,
	r.room_type as Room_type,
	b.check_in_date as Check_In,
	b.check_out_date as Check_Out
From Bookings_tbl_1 As b
Join Customers_tbl_1 As  c On b.customer_id = c.customer_id
Join Rooms_tbl As  r On b.room_id  = r.room_id


Select * from Active_booking_view

----------------------------------------------------------------------------
-- Indexes

Create Index room_type_index On Rooms_tbl(room_type); 

Create Index check_dates_index On Bookings_tbl_1(check_in_date,check_out_date);

-----------------------------------------------------------------------------

-- Stored Procedure and Functions

Create Procedure get_revenue_by_month 
As
Begin
	Select Year(check_out_date) as Year,
			Month(check_out_date) as Month,
			Sum(total_ammount) as Total_revenue

	From Bookings_tbl_1
	Group By Year(check_out_date), Month(check_out_date)

	Order By Year,Month
End;

Exec get_revenue_by_month;


Create Function customer_stayed_in_days(@checkInDate Date,@checkOutDate Date)
Returns Int
As

Begin
	Declare @stayedDays Int;
	Set @stayedDays =DATEDIFF(DAY, @checkInDate , @checkOutDate);

Return @stayedDays;

End

Drop function dbo.customer_stayed_in_days;

Select c.customer_id, c.customer_name As Customer_name , dbo.customer_stayed_in_days(b.check_in_date,b.check_out_date) as Days_stayed
From Bookings_tbl_1 As b
Join Customers_tbl_1 As c
On c.customer_id = b.customer_id
Where b.customer_id Is Not Null

--------------------------------------------------------------------------------------------------------
ALTER TABLE Bookings_tbl_1
ADD booking_status VARCHAR(10) DEFAULT 'Active';

--Triggers
Create Trigger change_status
On Bookings_tbl_1
After Update
As
Begin
	If Exists (Select 1 From inserted Where booking_status='Cancelled')
	Begin
		Update Rooms_tbl
		Set room_status = 'Avaliable'
		Where room_id In (Select room_id From Inserted Where booking_status='Cancelled')
	End
End

UPDATE Bookings_tbl_1
SET booking_status = 'Cancelled'
WHERE booking_id = 2

Select * From Rooms_tbl;

----------------------------------------------------------
-- Full Text Search

Create FullText Catalog roomType As Default

Create FullText Index On Rooms_tbl(room_type)
Key Index PK__Rooms_tb__19675A8A4000B62E
On roomType

SELECT name
FROM sys.indexes
WHERE object_id = OBJECT_ID('Rooms_tbl')
AND is_primary_key = 1
