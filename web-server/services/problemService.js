import { ProblemModel } from "../models";

// const problems = [
//   {
//     id: 1,
//     name: "fortnite",
//     desc: "aloha guys",
//     difficulty: "easy"
//   },
//   {
//     id: 2,
//     name: "new problem2",
//     desc: "aloha alohaalohaaloha",
//     difficulty: "medium"
//   },
//   {
//     id: 3,
//     name: "new problem3",
//     desc: "aloha guysguysguys",
//     difficulty: "hard"
//   }
// ];
const problemService = {
  getProblems: () =>
    new Promise((resolve, reject) => {
      ProblemModel.find({}, (err, problems) => {
        if (err) {
          reject(err);
        } else {
          resolve(problems);
        }
      });
    }),
  getProblem: id =>
    new Promise((resolve, reject) => {
      ProblemModel.findOne({ id }, (err, problem) => {
        if (err) {
          reject(err);
        } else {
          resolve(problem);
        }
      });
    }),
  addProblem: problem =>
    new Promise((resolve, reject) => {
      ProblemModel.findOne({ name: problem.name }, (err, foundProblem) => {
        if (foundProblem) {
          reject(err);
        } else {
          ProblemModel.countDocuments({}, (error, num) => {
            if (error) {
              reject(err);
            } else {
              const newProblem = problem;
              newProblem.id = num + 1;
              const verifiedProblem = new ProblemModel(newProblem);
              verifiedProblem.save();
              resolve(verifiedProblem);
            }
          });
        }
      });
    })
};
export default problemService;
