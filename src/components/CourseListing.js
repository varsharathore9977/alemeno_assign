import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function CourseListing() {
    const navigate = useNavigate()
    const courseModel = [
        {
            id: 1,
            name: 'Introduction to React Native',
            instructor: 'John Doe',
            description: 'Learn the basics of React Native development and build your first mobile app.',
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '8 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to React Native',
                    content: 'Overview of React Native, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First App',
                    content: 'Creating a simple mobile app using React Native components.'
                },
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
            name: 'Introduction to ReactJs',
            instructor: 'Jerry Doe',
            description: 'Learn the basics of React Native development and build your first mobile app.',
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '6 weeks',
            schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
            location: 'Online',
            prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to React Js',
                    content: 'Overview of ReactJs, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First React App',
                    content: 'Creating a simple react app using ReactJs components.'
                },
            ],
            students: [
                {
                    id: 103,
                    name: 'Ruhaan Tripathi',
                    email: 'rt@example.com',
                },
                {
                    id: 104,
                    name: 'Masau',
                    email: 'ms@example.com',
                },
            ],
        },

        {
            id:3,
            name: 'Introduction to MongoDb',
            instructor: 'Peter Singh',
            description: 'Learn the basics of MongoDb database and build your first mern project.',
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '4 weeks',
            schedule: 'Tuesdays and Thursdays, 3:00 PM - 6:00 PM',
            location: 'Online',
            prerequisites: ['Basic NoSql knowledge', 'Familiarity with Atlas Mongodb database'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to MongoDb',
                    content: 'Overview of MongoDb, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building First Api',
                    content: 'Creating a simple models,controller and routes.'
                },
            ],
            students: [
                {
                    id: 105,
                    name: 'Veer Sharma',
                    email: 'vs@example.com',
                },
                {
                    id: 106,
                    name: 'Vidhi Gupta',
                    email: 'vg@example.com',
                },
            ],
        },
        {
            id: 4,
            name: 'Introduction to NodeJs',
            instructor: 'Madhur Gupta',
            description: 'Learn the basics of NodeJs development and build your first database.',
            enrollmentStatus: 'Open',
            thumbnail: 'your.image.here',
            duration: '2 weeks',
            schedule: 'Tuesdays and Thursdays, 3:00 PM - 6:00 PM',
            location: 'Online',
            prerequisites: ['Basic NodeJS knowledge', 'Familiarity with NodeJs'],
            syllabus: [
                {
                    week: 1,
                    topic: 'Introduction to NodeJs',
                    content: 'Overview of ReactJs, setting up your development environment.'
                },
                {
                    week: 2,
                    topic: 'Building Your First NodeJs',
                    content: 'Creating a simple react app using NodeJs components.'
                },
            ],
            students: [
                {
                    id: 107,
                    name: 'Rudra Kashyap',
                    email: 'rk@example.com',
                },
                {
                    id: 108,
                    name: 'Loren',
                    email: 'lr@example.com',
                },
            ],
        },



    ];



    const handleNextButtonClick = () => {
        navigate('/courses');
    };


    return (
        <div className="container mx-auto py-6">
            <h2 className='text-center font-bold text-2xl text-emerald-700'>Course Listing </h2>
            {courseModel.map(course => (
                <div key={course.id} className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg font-semibold leading-6 text-gray-900">{course.name}</h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Instructor: {course.instructor}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Description: {course.description}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Enrollment Status: {course.enrollmentStatus}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Duration: {course.duration}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Schedule: {course.schedule}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Location: {course.location}</p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Prerequisites: {course.prerequisites.join(', ')}</p>
                    </div>
                    <details className="border-t border-gray-200">
                        <summary className="px-4 py-3 bg-gray-50 sm:px-6">Syllabus</summary>
                        <ul className="px-4 py-3 bg-white sm:px-6">
                            {course.syllabus.map(item => (
                                <li key={item.week} className="mt-2">
                                    <strong className="text-sm font-semibold">{`Week ${item.week}:`} </strong> {item.topic} - {item.content}
                                </li>
                            ))}
                        </ul>
                    </details>
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">Enrolled Students:</h3>
                        <ul className="mt-1 max-w-2xl text-sm text-gray-500">
                            {course.students.map(student => (
                                <li key={student.id} className="mt-1">
                                    {student.name} - {student.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
           <div className="flex justify-center mt-8">
            <button 
                onClick={handleNextButtonClick} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Next
            </button>
        </div>
        </div>
    );
}
