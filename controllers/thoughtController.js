// ObjectId() method for converting studentId string into an ObjectId for querying database
//DO I NEED THIS???
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// EXAMPLE FROM CLASS
// const headCount = async () => {
// // your code here
//   const numberOfStudents = await Student.aggregate([
//     { 
//       $group: {
//         // Group by null (no additional grouping by id)
//         _id: null,
//         // Count the number of documents
//         total_students: { $sum: 1 },
//       },
//     },
//   ]);
//   return numberOfStudents[0].total_students;
// }


// // Execute the aggregate method on the Student model and calculate the overall grade by using the $avg operator
// const grade = async (studentId) => {
//   const gpa = await Student.aggregate([
//     // TODO: Ensure we include only the student who can match the given ObjectId using the $match operator
//     { $match: { _id: new ObjectId(studentId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: new ObjectId(studentId),
//         overall_grade: { $avg: "$assignments.score" },
//       },
//     },
//   ]);
//   return gpa;
// }

// module.exports = {
//   // Get all students
//   async getStudents(req, res) {
//     try {
//       const students = await Student.find();
//       const studentObj = {
//         students,
//         headCount: await headCount(),
//       };
//       return res.json(studentObj);
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // Get a single student
//   async getSingleStudent(req, res) {
//     try {
//       const student = await Student.findOne({ _id: req.params.studentId })
//         .select('-__v')
//         .lean();

//       if (!student) {
//         return res.status(404).json({ message: 'No student with that ID' });
//       }

//       res.json({
//         student,
//         grade: await grade(req.params.studentId),
//       });
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   },
//   // create a new student
//   async createStudent(req, res) {
//     try {
//       const student = await Student.create(req.body);
//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Delete a student and remove them from the course
//   async deleteStudent(req, res) {
//     try {
//       const student = await Student.findOneAndRemove({ _id: req.params.studentId });

//       if (!student) {
//         return res.status(404).json({ message: 'No such student exists' })
//       }

//       const course = await Course.findOneAndUpdate(
//         { students: req.params.studentId },
//         { $pull: { students: req.params.studentId } },
//         { new: true }
//       );

//       if (!course) {
//         return res.status(404).json({
//           message: 'Student deleted, but no courses found',
//         });
//       }

//       res.json({ message: 'Student successfully deleted' });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // Add an assignment to a student
//   async addAssignment(req, res) {
//     try {
//       console.log('You are adding an assignment');
//       console.log(req.body);
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $addToSet: { assignments: req.body } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' })
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
//   // Remove assignment from a student
//   async removeAssignment(req, res) {
//     try {
//       const student = await Student.findOneAndUpdate(
//         { _id: req.params.studentId },
//         { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//         { runValidators: true, new: true }
//       );

//       if (!student) {
//         return res
//           .status(404)
//           .json({ message: 'No student found with that ID :(' });
//       }

//       res.json(student);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
