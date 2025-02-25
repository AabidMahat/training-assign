CREATE TABLE Employees123 (
    EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    DepartmentID INT,
    HireDate DATE,
    BaseSalary DECIMAL(10,2),
    Bonus DECIMAL(10,2),
    ManagerID INT NULL,
    FOREIGN KEY (DepartmentID) REFERENCES Department12(DepartmentID),
    FOREIGN KEY (ManagerID) REFERENCES Employees123(EmployeeID)
);

CREATE TABLE Department12 (
    DepartmentID INT PRIMARY KEY IDENTITY(1,1),
    DepartmentName NVARCHAR(100) NOT NULL
);

INSERT INTO Department12 (DepartmentName) VALUES 
('HR'),
('Finance'),
('IT'),
('Marketing'),
('Operations');

INSERT INTO Employees123 (Name, DepartmentID, HireDate, BaseSalary, Bonus, ManagerID) VALUES
('Alice Johnson', 1, '2018-06-10', 60000, 5000, NULL),  -- No manager (Top-level)
('Bob Smith', 2, '2019-08-15', 55000, 4500, 1),  -- Reports to Alice
('Charlie Brown', 2, '2020-02-20', 48000, 4000, 1), -- Reports to Alice
('David Wilson', 3, '2017-03-25', 70000, 6000, NULL), -- No manager (Top-level)
('Emily Davis', 3, '2021-07-05', 50000, 3500, 4), -- Reports to David
('Frank Miller', 4, '2016-09-30', 80000, 7000, NULL), -- No manager (Top-level)
('Grace Lee', 4, '2019-11-12', 65000, 5500, 6), -- Reports to Frank
('Henry Martin', 5, '2015-12-01', 75000, 6500, NULL), -- No manager (Top-level)
('Ivy Carter', 5, '2022-01-10', 45000, 3000, 8), -- Reports to Henry
('Jack Turner', 2, '2023-05-22', 47000, 3200, 2); -- Reports to Bob


SELECT e.Name AS EmployeeName, d.DepartmentName, e.HireDate
FROM Employees123 e
INNER JOIN Department12 d ON e.DepartmentID = d.DepartmentID;

SELECT e.EmployeeID, e.Name AS EmployeeName
FROM Employees123 e
LEFT JOIN Employees123 m ON e.ManagerID = m.EmployeeID
WHERE e.ManagerID IS NULL;

SELECT d.DepartmentID, d.DepartmentName
FROM Department12 d
LEFT JOIN Employees123 e ON d.DepartmentID = e.DepartmentID
WHERE e.EmployeeID IS NULL;

SELECT EmployeeID, Name, (BaseSalary + Bonus) AS TotalSalary
FROM Employees123;

SELECT EmployeeID, Name, BaseSalary + Bonus AS TotalSalary
FROM Employees123
WHERE (BaseSalary + Bonus) = (
    SELECT MAX(BaseSalary + Bonus) FROM Employees123
);

SELECT e.EmployeeID, e.Name AS EmployeeName, e.BaseSalary + e.Bonus AS EmployeeSalary, 
       m.Name AS ManagerName, m.BaseSalary + m.Bonus AS ManagerSalary
FROM Employees123 e
JOIN Employees123 m ON e.ManagerID = m.EmployeeID
WHERE (e.BaseSalary + e.Bonus) > (m.BaseSalary + m.Bonus);

CREATE VIEW EmployeeSalaryView12 AS
SELECT e.EmployeeID, e.Name, d.DepartmentName, e.BaseSalary, e.Bonus, 
       (e.BaseSalary + e.Bonus) AS TotalSalary
FROM Employees123 e
JOIN Department12 d ON e.DepartmentID = d.DepartmentID;


SELECT EmployeeID, Name, HireDate
FROM Employees123
WHERE DATEDIFF(YEAR, HireDate, GETDATE()) > 3;

SELECT d.DepartmentName, COUNT(e.EmployeeID) AS EmployeeCount
FROM Department12 d
LEFT JOIN Employees123 e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentName;



--Functions

Create Function getAvgSalary(@BaseSalary Decimal(10,2))
Returns Decimal(10,2)
As
Begin
	Return @BaseSalary *0.5;
End;

Select  dbo.getAvgSalary(BaseSalary) as Bonus From Employees123


Create Function getDepartTable(@Dept Int)
Returns Table
As
Return
	(Select EmployeeID, Name, BaseSalary From Employees123 Where DepartmentID = @Dept);


Select* from dbo.getDepartTable(1) 

Create Procedure UpdateData @EmployeeId int
As
Begin
	Update Employees123 Set Name = 'Aabid' Where EmployeeID = @EmployeeId
End

Exec UpdateData	@EmployeeId = 1;