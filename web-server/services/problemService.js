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
    new Promise(resolve => {
      resolve(problems);
    })
};
export default problemService;
