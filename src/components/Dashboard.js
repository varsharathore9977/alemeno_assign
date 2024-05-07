import React, { useState } from 'react';

export default function Dashboard({ enrolledCourses }) {
  const [completedCourses, setCompletedCourses] = useState([]);

  const handleCourseComplete = (course) => {
    if (completedCourses.includes(course.id)) {
      setCompletedCourses(completedCourses.filter(id => id !== course.id));
    } else {
      setCompletedCourses([...completedCourses, course.id]);
    }
  };

  const getCourseProgress = (course) => {
    return completedCourses.includes(course.id) ? 100 : course.progress;
  };

  return (
    <div className="student-dashboard p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-800">Student Dashboard</h2>
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Course Name</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Instructor</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Due Date</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Progress</th>
            <th className="px-4 py-2 text-left text-sm font-bold text-gray-600">Mark as Completed</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.map(course => (
            <tr key={course.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-sm text-gray-600">{course.name}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{course.instructor}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{course.dueDate}</td>
              <td className="px-4 py-2 text-sm text-gray-600">{getCourseProgress(course)}%</td>
              <td className="px-4 py-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={completedCourses.includes(course.id)}
                  onChange={() => handleCourseComplete(course)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
