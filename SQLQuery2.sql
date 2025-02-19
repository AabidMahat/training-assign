-- Create the Ab_Movie_Ticket table
create table Ab_Movie_Ticket(
    booking_id int primary key Identity(1,1),
    customer_name varchar(30),
    movie_name varchar(30),
    seat_booked int,
    total_price int
);

-- Begin the transaction
Begin Transaction;


Truncate table Ab_Movie_Ticket;

-- Insert 7 entries into the Ab_Movie_Ticket table
Insert into Ab_Movie_Ticket (customer_name, movie_name, seat_booked, total_price) Values
('John Doe', 'Inception', 5, 750),
('Jane Smith', 'Avatar', 3, 450),
('David Johnson', 'The Matrix', 2, 300),
('Emily Davis', 'Titanic', 4, 600),
('Michael Brown', 'Interstellar', 6, 900),
('Sarah Wilson', 'The Godfather', 1, 150),
('Robert Taylor', 'The Dark Knight', 7, 1050);

-- Commit the transaction
Commit;

Begin Transaction

update Ab_Movie_Ticket Set seat_booked=  4 ,total_price = 500 Where booking_id = 1;

Save transaction initialTransaction;

Delete from Ab_Movie_Ticket where booking_id = 3;

Rollback transaction initialTransaction;


commit;

Select * from Ab_Movie_ticket;
