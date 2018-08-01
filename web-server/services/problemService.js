const problems = [
  {
    id: 1,
    name: "fortnite",
    desc: "aloha guys",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "new problem2",
    desc: "aloha alohaalohaaloha",
    difficulty: "medium"
  },
  {
    id: 3,
    name: "new problem3",
    desc: "aloha guysguysguys",
    difficulty: "hard"
  }
];
const problemService = {
  getProblems: () =>
    new Promise((resolve, reject) => {
      resolve(problems);
    }),
  getProblem: id =>
    new Promise((resolve, reject) => {
      resolve(problems.find(problem => problem.id === id));
    }),
  addProblem: createdProblem =>
    new Promise((resolve, reject) => {
      const newProblem = createdProblem;
      if (problems.find(problem => problem.name === newProblem.name)) {
        reject("Problem name already exist");
      } else {
        newProblem.id = problems.length + 1;
        problems.push(newProblem);
        resolve(newProblem);
      }
    })
};
export default problemService;
