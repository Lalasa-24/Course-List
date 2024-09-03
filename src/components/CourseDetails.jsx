// src/components/CourseDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = useSelector((state) =>
        state.courses.find((course) => course.id === parseInt(courseId))
    );

    if (!course) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Course not found!</div>;
    }

    return (
        <div style={{ padding: '10px' }}>
            <nav style={{ padding: '10px' }}>
                <Link to="/list" style={{ marginRight: '20px' }}>List</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>


            <h1 style={{ textAlign: 'center', color: ' white', }}>{course.name}</h1>

            <div style={{ marginTop: '20px' }}>
                <h3>Course Information</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', backgroundColor: 'black', }}>
                    <tbody>
                        {[
                            { label: 'Instructor', value: course.instructor },
                            { label: 'Description', value: course.description },
                            { label: 'Enrollment Status', value: course.enrollmentStatus },
                            { label: 'Duration', value: course.duration },
                            { label: 'Schedule', value: course.schedule },
                            { label: 'Location', value: course.location },
                            { label: 'Prerequisites', value: course.prerequisites?.join(', ') },
                        ].map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px', fontWeight: 'bold', }}>
                                    {item.label}
                                </td>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>
                                    {item.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3 style={{ color: 'white' }}>Syllabus</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <thead>
                        <tr style={{ color: '#fff' }}>
                            <th style={{ border: '1px solid #dee2e6', padding: '12px' }}>Week</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '12px' }}>Topic</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '12px' }}>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(course.syllabus || []).map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{item.week}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{item.topic}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{item.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Enrolled Students</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ color: '#fff' }}>
                            <th style={{ border: '1px solid #dee2e6', padding: '12px' }}>Student Name</th>
                            <th style={{ border: '1px solid #dee2e6', padding: '12px' }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(course.students || []).map((student) => (
                            <tr key={student.id}>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{student.name}</td>
                                <td style={{ border: '1px solid #dee2e6', padding: '12px' }}>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseDetails;
