// src/redux/actions.js
export const FETCH_COURSES = 'FETCH_COURSES';
export const MARK_COURSE_COMPLETED = 'MARK_COURSE_COMPLETED';

export const fetchCourses = (courses) => ({
    type: FETCH_COURSES,
    payload: courses,
});

export const markCourseCompleted = (courseId) => ({
    type: MARK_COURSE_COMPLETED,
    payload: courseId,
});
