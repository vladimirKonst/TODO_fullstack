-- Create the todos table
CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE NOT NULL,
    completed TINYINT(1) DEFAULT 0
); 

-- Insert sample data into the todos table
INSERT INTO todos (title, description, due_date, completed) VALUES
('Grocery Shopping', 'Buy milk, bread, and eggs.', '2024-03-29', 0),
('Read a Book', 'Finish reading "The Great Gatsby".', '2024-04-01', 0),
('Workout', 'Attend gym session at 7 PM.', '2024-04-03', 0),
('Call Mom', 'Catch up with family news.', '2024-03-30', 0),
('Plan Vacation', 'Research and plan for summer vacation.', '2024-04-10', 0),
('Study Spanish', 'Complete Duolingo lessons for the day.', '2024-04-02', 0),
('Pay Bills', 'Pay electricity and internet bills.', '2024-03-31', 0),
('Doctor Appointment', 'Annual health check-up.', '2024-04-05', 0);
