Create table Bank_Account(
	account_id int primary key Identity(1,1),
	customer_name varchar(30),
	account_type varchar(20) Check (account_type In ('Savings','Current')),
	balance Decimal(10,2)
);

Insert Into Bank_Account Values
('Rahul Sharma', 'Savings',2500),
('Abid Mahat', 'Current',4500),
('Amit Verma', 'Savings',500),
('Rahul Gupta', 'Current',2600);

Begin Transaction

Update Bank_Account Set balance = balance-2000 Where account_id = 2 And Balance>=2000

IF @@ROWCOUNT = 0
	Begin 
		Rollback Transaction
	End
Else 
	Begin
		Commit Transaction
	End


Create Role customer_role;
Grant Select On Bank_Account To customer_role;

Deny Update On Bank_Account To customer_role;

Revoke Delete On Bank_Account From public;

