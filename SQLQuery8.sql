CREATE TABLE Users123 (
        UserID INT IDENTITY(1,1) PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50),
        Email VARCHAR(100),
        JoinDate DATE
    );

	-- Insert 30 rows with static data
INSERT INTO Users123 VALUES
('John', 'Doe', 'john.doe@example.com', '2022-01-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2022-01-02'),
('Michael', 'Johnson', 'michael.johnson@example.com', '2022-01-03'),
('Emily', 'Davis', 'emily.davis@example.com', '2022-01-04'),
('Chris', 'Brown', 'chris.brown@example.com', '2022-01-05'),
('Amanda', 'Wilson', 'amanda.wilson@example.com', '2022-01-06'),
('Matthew', 'Moore', 'matthew.moore@example.com', '2022-01-07'),
('Sarah', 'Taylor', 'sarah.taylor@example.com', '2022-01-08'),
('David', 'Anderson', 'david.anderson@example.com', '2022-01-09'),
('Laura', 'Thomas', 'laura.thomas@example.com', '2022-01-10'),
('Daniel', 'Jackson', 'daniel.jackson@example.com', '2022-01-11'),
('Hannah', 'White', 'hannah.white@example.com', '2022-01-12'),
('James', 'Harris', 'james.harris@example.com', '2022-01-13'),
('Sophia', 'Martin', 'sophia.martin@example.com', '2022-01-14'),
('Robert', 'Thompson', 'robert.thompson@example.com', '2022-01-15'),
('Olivia', 'Garcia', 'olivia.garcia@example.com', '2022-01-16'),
('Mark', 'Martinez', 'mark.martinez@example.com', '2022-01-17'),
('Mia', 'Robinson', 'mia.robinson@example.com', '2022-01-18'),
('Rocket', 'Raccoon', 'rocket@example.com', '2022-03-02');


Insert Into Users123 Values
('Adam', 'Miller', 'adam.miller@example.com', '2022-02-01'),
('Eve', 'Davis', 'eve.davis@example.com', '2022-02-02'),
('Bruce', 'Wayne', 'bruce.wayne@example.com', '2022-02-03'),
('Clark', 'Kent', 'clark.kent@example.com', '2022-02-04'),
('Diana', 'Prince', 'diana.prince@example.com', '2022-02-05'),
('Barry', 'Allen', 'barry.allen@example.com', '2022-02-06'),
('Hal', 'Jordan', 'hal.jordan@example.com', '2022-02-07'),
('Arthur', 'Curry', 'arthur.curry@example.com', '2022-02-08'),
('Victor', 'Stone', 'victor.stone@example.com', '2022-02-09'),
('Oliver', 'Queen', 'oliver.queen@example.com', '2022-02-10'),
('Bruce', 'Banner', 'bruce.banner@example.com', '2022-02-11'),
('Tony', 'Stark', 'tony.stark@example.com', '2022-02-12'),
('Natasha', 'Romanoff', 'natasha.romanoff@example.com', '2022-02-13'),
('Steve', 'Rogers', 'steve.rogers@example.com', '2022-02-14'),
('Peter', 'Parker', 'peter.parker@example.com', '2022-02-15'),
('Wanda', 'Maximoff', 'wanda.maximoff@example.com', '2022-02-16'),
('Stephen', 'Strange', 'stephen.strange@example.com', '2022-02-17'),
('Carol', 'Danvers', 'carol.danvers@example.com', '2022-02-18'),
('Scott', 'Lang', 'scott.lang@example.com', '2022-02-19');

Select * from Users123 where UserID>15 and FirstName Like  '%ad%';

Set statistics Io On;
Set statistics time On;
Set statistics time off ;

Create index Users_index on Users123(UserID,FirstName);

drop index Users_index on Users123;