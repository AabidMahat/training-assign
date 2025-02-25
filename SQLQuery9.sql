 Create Table Customers_tbs(
	customer_id int Primary key Identity,
	customer_name varchar(40),
	customer_email varchar(50),
	customer_phone varchar(11)
 );

CREATE TABLE Accounts_tbs (
    account_id INT PRIMARY KEY IDENTITY,
    customer_id INT,
    account_number VARCHAR(20),
    balance DECIMAL(10,2),
    account_type VARCHAR(10) CHECK (account_type IN ('Savings', 'Current')),
    FOREIGN KEY (customer_id) REFERENCES Customers_tbs(customer_id)
);

Create Table Transaction_tbs_1(
	transaction_id Int Primary key Identity,
	account_id Int,
	transaction_type varchar(10) Check(transaction_type In('WithDraw','Deposite')),
	ammount Decimal(10,2),
	transaction_date Date,
	Foreign Key(account_id) References Accounts_tbs(account_id),
);

SELECT 
    t.name AS trigger_name, 
    OBJECT_NAME(t.parent_id) AS table_name, 
    t.type_desc AS trigger_type,
    o.create_date,
    o.modify_date
FROM 
    sys.triggers t
JOIN 
    sys.objects o ON t.object_id = o.object_id
ORDER BY 
    o.modify_date DESC, 
    o.create_date DESC;

drop trigger PreventOverdraft_J3;


Create Table Audit_Transaction_tbs(
	audit_id Int Primary Key Identity,
	account_id int,
	ammount Decimal(10,2),
	transaction_date Date,
	actions varchar(10) Check(actions In ('Withdraw','Deposite')),
	Foreign Key(account_id) References Accounts_tbs(account_id)
);

INSERT INTO Customers_tbs (customer_name, customer_email, customer_phone) VALUES
('Aarav Sharma', 'aarav.sharma@example.com', '1234567890'),
('Aditi Singh', 'aditi.singh@example.com', '1234567891'),
('Aman Patel', 'aman.patel@example.com', '1234567892'),
('Ananya Reddy', 'ananya.reddy@example.com', '1234567893'),
('Arjun Mehta', 'arjun.mehta@example.com', '1234567894'),
('Diya Gupta', 'diya.gupta@example.com', '1234567895'),
('Ishaan Kumar', 'ishaan.kumar@example.com', '1234567896'),
('Kavya Thakur', 'kavya.thakur@example.com', '1234567897'),
('Lakshya Bose', 'lakshya.bose@example.com', '1234567898'),
('Maya Jain', 'maya.jain@example.com', '1234567899'),
('Rohan Desai', 'rohan.desai@example.com', '1234567800'),
('Sneha Rai', 'sneha.rai@example.com', '1234567801');

INSERT INTO Accounts_tbs (customer_id, account_number, balance, account_type) VALUES
(1, 'ACC100001', 5000.00, 'Savings'),
(2, 'ACC100002', 15000.00, 'Current'),
(3, 'ACC100003', 2000.00, 'Savings'),
(4, 'ACC100004', 2500.00, 'Current'),
(5, 'ACC100005', 12000.00, 'Savings'),
(6, 'ACC100006', 6000.00, 'Current'),
(7, 'ACC100007', 1800.00, 'Savings'),
(8, 'ACC100008', 500.00, 'Current'),
(9, 'ACC100009', 7000.00, 'Savings'),
(10, 'ACC100010', 9000.00, 'Current'),
(11, 'ACC100011', 3000.00, 'Savings'),
(12, 'ACC100012', 8000.00, 'Current');

INSERT INTO Transaction_tbs (account_id, transaction_type, ammount, transaction_date) VALUES
(1, 'Deposite', 1000.00, '2025-01-01'),
(2, 'WithDraw', 500.00, '2025-01-02'),
(3, 'Deposite', 1500.00, '2025-01-03'),
(4, 'WithDraw', 100.00, '2025-01-04'),
(5, 'Deposite', 2000.00, '2025-01-05'),
(6, 'WithDraw', 300.00, '2025-01-06'),
(7, 'Deposite', 500.00, '2025-01-07'),
(8, 'WithDraw', 50.00, '2025-01-08'),
(9, 'Deposite', 700.00, '2025-01-09'),
(10, 'WithDraw', 200.00, '2025-01-10'),
(11, 'Deposite', 800.00, '2025-01-11'),
(12, 'WithDraw', 100.00, '2025-01-12');

INSERT INTO Audit_Transaction_tbs (account_id, ammount, transaction_date, actions) VALUES
(1, 1000.00, '2025-01-01', 'Deposite'),
(2, 500.00, '2025-01-02', 'Withdraw'),
(3, 1500.00, '2025-01-03', 'Deposite'),
(4, 100.00, '2025-01-04', 'Withdraw'),
(5, 2000.00, '2025-01-05', 'Deposite'),
(6, 300.00, '2025-01-06', 'Withdraw'),
(7, 500.00, '2025-01-07', 'Deposite'),
(8, 50.00, '2025-01-08', 'Withdraw'),
(9, 700.00, '2025-01-09', 'Deposite'),
(10, 200.00, '2025-01-10', 'Withdraw'),
(11, 800.00, '2025-01-11', 'Deposite'),
(12, 100.00, '2025-01-12', 'Withdraw');


-- Task 1

Create clustered Index account_Id_Index On Accounts_tbs(account_id);

Create NonClustered Index customer_name_index On Customers_tbs(customer_name);

Create index transaction_Date_Ammount_index On Transaction_tbs(transaction_date,ammount);

create unique index unique_account_number_index On Accounts_tbs(account_number);

--Task 2

CREATE FUNCTION Calc_interest(@account_id INT)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @current_Amount DECIMAL(10,2), @annual_Rate DECIMAL(10,2) = 0.05;
    
    SELECT @current_Amount = balance 
    FROM Accounts_tbs 
    WHERE account_id = @account_id;
    
    RETURN @current_Amount * @annual_Rate;
END


Select account_number ,balance ,dbo.Calc_interest(account_id) as interest 
From Accounts_tbs;
	

--Task 3
Create Procedure transfer_ammount 
@from_account_id Int , 
@to_account_id Int,
@ammount Decimal(10,2)
AS
Declare @sender_account_balance Decimal(10,2)
Begin
	Select @sender_account_balance = balance 
	From Accounts_tbs 
	Where account_id  = @from_account_id;

	if @sender_account_balance>=@ammount
		Begin
			Update Accounts_tbs Set balance =  balance-@ammount Where account_id =  @from_account_id;
			Update Accounts_tbs Set balance =  balance + @ammount Where account_id =  @to_account_id;
			Insert Into Transaction_tbs Values(
				@from_account_id,
				'Withdraw',
				@ammount,
				GetDate()
			);

			Print 'Balance Updated';
		End
	
	else
		Begin
			Print 'Current Balance is low'
		End
End;

Drop Procedure transfer_ammount;

Exec dbo.transfer_ammount @from_account_id = 2 , @to_account_id = 3 , @ammount = 5000; 

Select * From Accounts_tbs;
Select * From Transaction_tbs;


--Task 4

Create Trigger insufficient_balance_trigger_3
On Accounts_tbs
After Update
As
Begin 
DECLARE @from_account_id INT,
        @new_balance DECIMAL(10,2),
        @sender_account_balance DECIMAL(10,2);

	SELECT @from_account_id = INSERTED.account_id, @new_balance = INSERTED.balance
    FROM INSERTED;

	

    SELECT @sender_account_balance = balance 
    FROM Accounts_tbs 
    WHERE account_id = @from_account_id;

	print @from_account_id
	print @new_balance
	print @sender_account_balance

	IF @sender_account_balance <= @new_balance
    BEGIN
        RAISERROR ('Insufficient balance for this transaction.', 16, 1);
        ROLLBACK TRANSACTION;
    END
    ELSE
    BEGIN
        UPDATE Accounts_tbs
        SET balance = @new_balance
        WHERE account_id = @from_account_id;
    END
END

Drop Trigger insufficient_balance_trigger
Select * from Accounts_tbs;
Update Accounts_tbs set balance =  balance -20000.00 Where account_id = 3