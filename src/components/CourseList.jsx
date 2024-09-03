import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../redux/actions';
import { Link } from 'react-router-dom';

const CourseList = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const dummyCourses = [
            {
                id: 1,
                name: 'Introduction to React Native',
                instructor: 'John Doe',
                description: 'Learn the basics of React Native development.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
                syllabus: [
                    { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native...' },
                    { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 2,
                name: 'Advanced JavaScript',
                instructor: 'Jane Smith',
                description: 'Deep dive into advanced JavaScript concepts and patterns.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Intermediate JavaScript knowledge'],
                syllabus: [
                    { week: 1, topic: 'Scope and Closures', content: 'Understanding scope and closures in depth...' },
                    { week: 2, topic: 'Asynchronous JavaScript', content: 'Promises, async/await, and event loop...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 3,
                name: 'Full-Stack Web Development',
                instructor: 'Emily Davis',
                description: 'Become a full-stack web developer using MERN stack.',
                enrollmentStatus: 'Closed',
                duration: '12 weeks',
                schedule: 'Saturdays, 10:00 AM - 4:00 PM',
                location: 'Online',
                prerequisites: ['Basic knowledge of HTML, CSS, JavaScript'],
                syllabus: [
                    { week: 1, topic: 'Introduction to MERN Stack', content: 'Overview of MongoDB, Express, React, Node...' },
                    { week: 2, topic: 'Building RESTful APIs', content: 'Creating RESTful services with Express and Node...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 4,
                name: 'Data Science with Python',
                instructor: 'Michael Brown',
                description: 'Learn data science techniques and tools using Python.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Thursdays, 6:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic Python programming knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Data Science', content: 'Overview of data science and Python tools...' },
                    { week: 2, topic: 'Data Manipulation with Pandas', content: 'Working with data using Pandas library...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 5,
                name: 'Machine Learning with TensorFlow',
                instructor: 'Sarah Johnson',
                description: 'Master machine learning concepts using TensorFlow.',
                enrollmentStatus: 'Open',
                duration: '12 weeks',
                schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic Python programming', 'Understanding of ML concepts'],
                syllabus: [
                    { week: 1, topic: 'Introduction to TensorFlow', content: 'Setting up and understanding TensorFlow...' },
                    { week: 2, topic: 'Neural Networks', content: 'Building and training neural networks...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 6,
                name: 'Introduction to Cloud Computing',
                instructor: 'Tom Wilson',
                description: 'Learn the fundamentals of cloud computing and AWS.',
                enrollmentStatus: 'Open',
                duration: '6 weeks',
                schedule: 'Mondays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic IT knowledge'],
                syllabus: [
                    { week: 1, topic: 'Overview of Cloud Computing', content: 'Understanding cloud computing models...' },
                    { week: 2, topic: 'Introduction to AWS', content: 'Getting started with Amazon Web Services...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 7,
                name: 'Cybersecurity Essentials',
                instructor: 'Anna White',
                description: 'Learn the basics of cybersecurity and protection mechanisms.',
                enrollmentStatus: 'Closed',
                duration: '8 weeks',
                schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic IT knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Cybersecurity', content: 'Overview of cybersecurity threats and defenses...' },
                    { week: 2, topic: 'Network Security', content: 'Understanding and securing network infrastructure...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 8,
                name: 'Digital Marketing Masterclass',
                instructor: 'Mark Lee',
                description: 'Master digital marketing strategies and tools.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Fridays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic marketing knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Digital Marketing', content: 'Overview of digital marketing landscape...' },
                    { week: 2, topic: 'SEO and SEM', content: 'Understanding search engine optimization and marketing...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 9,
                name: 'Blockchain Basics',
                instructor: 'Robert Green',
                description: 'Understand the basics of blockchain technology and its applications.',
                enrollmentStatus: 'Open',
                duration: '6 weeks',
                schedule: 'Tuesdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic IT knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Blockchain', content: 'Understanding blockchain technology...' },
                    { week: 2, topic: 'Blockchain Applications', content: 'Exploring the applications of blockchain...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 10,
                name: 'Introduction to Artificial Intelligence',
                instructor: 'Laura Scott',
                description: 'Explore the fundamentals of artificial intelligence.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Wednesdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic programming knowledge'],
                syllabus: [
                    { week: 1, topic: 'Overview of AI', content: 'Introduction to artificial intelligence and its history...' },
                    { week: 2, topic: 'AI in Practice', content: 'Understanding practical applications of AI...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 11,
                name: 'Front-End Development with React',
                instructor: 'Chris Evans',
                description: 'Learn to build modern front-end applications using React.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript and HTML/CSS knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to React', content: 'Understanding the basics of React and JSX...' },
                    { week: 2, topic: 'State and Props', content: 'Managing state and props in React components...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 12,
                name: 'Backend Development with Node.js',
                instructor: 'Nancy Brown',
                description: 'Learn backend development using Node.js and Express.',
                enrollmentStatus: 'Closed',
                duration: '12 weeks',
                schedule: 'Thursdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic JavaScript knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Node.js', content: 'Setting up and understanding Node.js environment...' },
                    { week: 2, topic: 'Building RESTful APIs', content: 'Creating APIs with Express and Node.js...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 13,
                name: 'UX/UI Design Fundamentals',
                instructor: 'Emma Taylor',
                description: 'Learn the fundamentals of user experience and interface design.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Fridays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic design knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to UX/UI', content: 'Understanding the principles of UX/UI design...' },
                    { week: 2, topic: 'Wireframing and Prototyping', content: 'Creating wireframes and prototypes...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 14,
                name: 'Python for Data Analysis',
                instructor: 'Oliver Martinez',
                description: 'Analyze data efficiently using Python libraries.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic Python knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Data Analysis', content: 'Overview of data analysis with Python...' },
                    { week: 2, topic: 'Pandas for Data Manipulation', content: 'Using Pandas for data manipulation...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 15,
                name: 'Ethical Hacking Basics',
                instructor: 'Sophia Harris',
                description: 'Learn ethical hacking techniques and tools.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic IT knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Ethical Hacking', content: 'Understanding ethical hacking concepts...' },
                    { week: 2, topic: 'Reconnaissance Techniques', content: 'Learning information gathering techniques...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 16,
                name: 'Agile Project Management',
                instructor: 'William Thomas',
                description: 'Master the principles of Agile project management.',
                enrollmentStatus: 'Closed',
                duration: '6 weeks',
                schedule: 'Mondays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic project management knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Agile', content: 'Understanding Agile principles and methodologies...' },
                    { week: 2, topic: 'Scrum Framework', content: 'Learning the Scrum framework in detail...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 17,
                name: 'Digital Transformation Strategies',
                instructor: 'James Garcia',
                description: 'Learn strategies for digital transformation in businesses.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Fridays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic business knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Digital Transformation', content: 'Overview of digital transformation...' },
                    { week: 2, topic: 'Digital Business Models', content: 'Exploring digital business models...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 18,
                name: 'Big Data Analytics',
                instructor: 'Jacob Anderson',
                description: 'Analyze large datasets using big data tools.',
                enrollmentStatus: 'Open',
                duration: '10 weeks',
                schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Basic programming knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Big Data', content: 'Understanding big data concepts and tools...' },
                    { week: 2, topic: 'Hadoop and Spark', content: 'Working with Hadoop and Spark for data processing...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 19,
                name: 'Creative Writing Workshop',
                instructor: 'Mia Clark',
                description: 'Enhance your creative writing skills in this workshop.',
                enrollmentStatus: 'Open',
                duration: '6 weeks',
                schedule: 'Mondays, 7:00 PM - 9:00 PM',
                location: 'Online',
                prerequisites: ['Passion for writing'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Creative Writing', content: 'Exploring creative writing genres...' },
                    { week: 2, topic: 'Developing Characters', content: 'Creating and developing compelling characters...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            },
            {
                id: 20,
                name: 'Leadership and Management Skills',
                instructor: 'Isabella Robinson',
                description: 'Develop your leadership and management skills.',
                enrollmentStatus: 'Open',
                duration: '8 weeks',
                schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
                location: 'Online',
                prerequisites: ['Basic management knowledge'],
                syllabus: [
                    { week: 1, topic: 'Introduction to Leadership', content: 'Understanding leadership styles and theories...' },
                    { week: 2, topic: 'Effective Team Management', content: 'Strategies for managing and leading teams...' },
                ],
                students: [
                    {
                        id: 101,
                        name: 'Alice Johnson',
                        email: 'alice@example.com',
                    },
                    {
                        id: 102,
                        name: 'Bob Smith',
                        email: 'bob@example.com',
                    },
                ],
            }
        ];

        dispatch(fetchCourses(dummyCourses));
    }, [dispatch]);

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {/* Top Navigation Bar */}
            <nav style={{ padding: '10px' }}>
                <Link to="/list" style={{ marginRight: '20px' }}>List</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            {/* Body Section */}
            <div style={{ padding: '20px' }}>
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginBottom: '20px', padding: '10px', width: '50%', marginLeft: '25%', }}
                />
                <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Course Name</th>
                                <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.slice(0, 20).map((course) => (
                                <tr key={course.id}>
                                    <td style={{ padding: '8px' }}>
                                        <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            {course.name}
                                        </Link>
                                    </td>
                                    <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{course.instructor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CourseList;
