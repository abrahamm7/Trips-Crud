CREATE DATABASE TripsDB;
GO

USE TripsDB;
GO


CREATE TABLE Trips (
    TripID INT IDENTITY(1,1) PRIMARY KEY,
    Destination NVARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    Description NVARCHAR(255)
);

CREATE TABLE Travelers (
    TravelerID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100)
);

CREATE TABLE Bookings (
    BookingID INT IDENTITY(1,1) PRIMARY KEY,
    TripID INT,
    TravelerID INT,
    BookingDate DATE,
    PaymentStatus NVARCHAR(50),
    FOREIGN KEY (TripID) REFERENCES Trips(TripID),
    FOREIGN KEY (TravelerID) REFERENCES Travelers(TravelerID)
);

INSERT INTO Trips (Destination, StartDate, EndDate, Description) VALUES
('Paris, France', '2023-04-15', '2023-04-22', 'Spring vacation in Paris'),
('Tokyo, Japan', '2023-05-10', '2023-05-20', 'Exploring Tokyo and its surroundings');

INSERT INTO Travelers (FirstName, LastName, Email) VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Doe', 'jane.doe@example.com');

INSERT INTO Bookings (TripID, TravelerID, BookingDate, PaymentStatus) VALUES
(1, 1, '2023-01-20', 'Paid'),
(2, 2, '2023-02-15', 'Pending');
