// src/redux/reducers.js
import { FETCH_COURSES, MARK_COURSE_COMPLETED } from './actions';

const initialState = {
    courses: [],
    enrolledCourses: [],
};

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            return { ...state, courses: action.payload };
        case MARK_COURSE_COMPLETED:
            return {
                ...state,
                enrolledCourses: state.enrolledCourses.map((course) =>
                    course.id === action.payload ? { ...course, completed: true } : course
                ),
            };
        default:
            return state;
    }
};
