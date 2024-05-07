import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Courses() {
    const navigate = useNavigate()

    const initialCourses = [
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

   
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [course, setCourse] = useState(initialCourses);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredCourses = initialCourses.filter(course => 
            course.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            course.instructor.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setCourse(filteredCourses);
    };

     const handleNextButtonClick = () => {
        navigate('/enrolled');
    };

    const handlePreviousButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="overflow-x-auto">
            <h2 className='text-center font-bold text-2xl text-emerald-700'>Course Details Screen</h2>
            <input
                type="text"
                placeholder="Search by course name or instructor"
                className="px-4 py-2 mt-4 ml-2 border border-gray-300 rounded-md mb-4"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {course.map(course => (
                        <tr key={course.id}>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{course.instructor}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">
                                    <button onClick={() => handleSelectCourse(course)}>Click Here</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedCourse && <CourseListing course={selectedCourse} />}
            <div className="flex justify-center mt-8">
                <button 
                    onClick={handleNextButtonClick} 
                    className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Next
                </button>
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={handlePreviousButtonClick} 
                    className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Previous
                </button>
            </div>
            

        </div>
    );
}

function CourseListing({ course }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{course.name}</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p><span className="font-semibold">Instructor:</span> {course.instructor}</p>
                    <p><span className="font-semibold">Enrollment Status:</span> {course.enrollmentStatus}</p>
                    <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                    <p><span className="font-semibold">Schedule:</span> {course.schedule}</p>
                    <p><span className="font-semibold">Location:</span> {course.location}</p>
                    <p><span className="font-semibold">Prerequisites:</span> {course.prerequisites.join(', ')}</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Description:</p>
                <p>{course.description}</p>
            </div>
            <details className="mb-4">
                <summary className="font-semibold">Syllabus</summary>
                <ul className="list-disc pl-6">
                    {course.syllabus.map(item => (
                        <li key={item.week}>
                            <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                        </li>
                    ))}
                </ul>
            </details>
            <div>
                <h3 className="font-semibold mb-2">Enrolled Students:</h3>
                <ul>
                    {course.students.map(student => (
                        <li key={student.id}>{student.name} - {student.email}</li>
                    ))}
                </ul>
            </div>
            <hr className="my-6" />
           
        </div>
    );
}
