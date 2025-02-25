Create table Customers_data(
	customer_id int primary key Identity(1,1),
	customer_name varchar(30),
	email varchar(20),
);

INSERT INTO Customers_data  VALUES
('Alice Smith', 'alice@example.com'),
('Bob Johnson', 'bob@example.com'),
('Charlie Davis', 'charli@example.com'),
('Diana King', 'diana@example.com'),
('Evan Wright', 'evan@example.com');

Insert Into Customers_data Values('Aabid Mahat','aabid@gmail.com');
Insert Into Customers_data Values('Aabid Mahat 2','aabid@gmail.com');

select * from Customers_data;

Create table Books_data(
	book_id int primary key Identity(1,1),
	title varchar(30),
	price int,
	quantiy int
);

INSERT INTO Books_data (title, price, quantiy) VALUES
('The Great Gatsby', 500, 10),
('To Kill a Mockingbird', 350, 8),
('1984', 600, 15),
('Pride and Prejudice', 450, 12),
('The Catcher in the Rye', 400, 9);

Insert Into Books_data Values('Angular Essentials',489,5);
Insert Into Books_data Values('Angular Essentials 2',489,5);

create table Order_data(
	order_id int primary key Identity(1,1),
	customer_id int,
	book_id int,
	order_data Date,
	quantity int,
	Constraint fk_customer_id Foreign Key (customer_id) References Customers_data(customer_id),
	Constraint fk_book_id Foreign Key (book_id) References Books_data(book_id)
);

Drop table Orders_Data;

INSERT INTO Orders_data (customer_id, book_id, order_data, quantity) VALUES
(3, 3, '2025-02-20', 1),
(4, 1, '2025-02-19', 2),
(5, 5, '2025-02-18', 1),
(6, 2, '2025-02-17', 3),
(7, 4, '2025-02-16', 1);

Insert Into Orders_data Values(3,1,'2023-04-04',3);

-- 1
Select customer_id , customer_name 
From Customers_Data
Where customer_id In(
	Select Distinct customer_id From Orders_data
);

--2
Select book_id,title
From Books_data
Where book_id Not In (
	Select Distinct book_id From Orders_data
);

--3
Select book_id,title
From Books_data
Where quantiy= 0;

--4

Create View Order_summary As 
Select o.order_id, c.customer_name, b.title as book_title, o.quantity, (o.quantity * b.price) as total_amount
From Orders_data as o
Join Customers_data c On o.customer_id = c.customer_id
Join Books_data b On o.book_id = b.book_id

Select * from Order_summary;

--5
Select book_id , title,price
From Books_data
Where price = (Select Max(price) From Books_data Where book_id In (Select Distinct book_id From Orders_data));



-- New Queries
Select c.customer_id, c.customer_name
From Customers_data as c
Left Join Orders_data o On c.customer_id  = o.customer_id
where o.order_id is Null;

Select o.order_id,o.order_data,o.customer_id
From Orders_data as o
Right Join Customers_data c On o.customer_id  = c.customer_id
Where o.customer_id is Null


Select c.customer_id,c.customer_name ,Sum(b.quantiy* b.price) as total_Price
From Orders_data as o
Join Customers_data c On o.customer_id = c.customer_id
Join Books_data b On o.book_id = b.book_id
Group by c.customer_name , c.customer_id
Order by total_price Desc

