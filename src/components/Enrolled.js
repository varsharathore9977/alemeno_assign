import React from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate()
  const enrolledCourses = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        dueDate:'28May',
        progress:'50',
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
        dueDate:'20May',
        progress:'25',
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
        dueDate:'18May',
        progress:'5',
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
        dueDate:'6May',
        progress:'80',
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

const handlePreviousButtonClick = () => {
    navigate('/courses');
};

  return (
    <>
    <div className="App">
      <Dashboard enrolledCourses={enrolledCourses} />
    </div>
    <div className="flex justify-center mt-8">
                <button 
                    onClick={handlePreviousButtonClick} 
                    className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Previous
                </button>
            </div>
  </>
  );
}
