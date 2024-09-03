// src/components/StudentDashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../redux/actions';


const StudentDashboard = () => {
    const dispatch = useDispatch();
    const currentStudentId = 101; // This can be dynamically set based on the logged-in student
    const enrolledCourses = useSelector((state) =>
        state.courses.filter((course) =>
            (course.students || []).some((student) => student.id === currentStudentId)
        )
    );

    const handleCompleteCourse = (courseId) => {
        dispatch(markCourseCompleted(courseId));
    };

    return (
        <div>
            <nav style={{ padding: '10px' }}>
                <a href="/list" style={{ marginRight: '20px' }}>List</a>
                <a href="/dashboard">Dashboard</a>
            </nav>

            <div style={{ padding: '20px' }}>
                <h2>My Enrolled Courses</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Thumbnail</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Course Name</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Instructor</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Due Date</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Progress</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledCourses.map((course) => (
                            <tr key={course.id}>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>
                                    <img src={course.thumbnail} alt={course.name} style={{ width: '100px', height: '60px' }} />
                                </td>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{course.name}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{course.instructor}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>{course.dueDate}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>
                                    <div style={{ backgroundColor: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div
                                            style={{
                                                width: `${course.progress}%`,
                                                backgroundColor: '#28a745',
                                                padding: '5px 0',
                                                textAlign: 'center',
                                                color: '#fff'
                                            }}
                                        >
                                            {course.progress}%
                                        </div>
                                    </div>
                                </td>
                                <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>
                                    <button
                                        onClick={() => handleCompleteCourse(course.id)}
                                        disabled={course.completed}
                                        style={{
                                            padding: '6px 12px',
                                            backgroundColor: course.completed ? '#6c757d' : '#007bff',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: course.completed ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {course.completed ? 'Completed' : 'Mark as Completed'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDashboard;
