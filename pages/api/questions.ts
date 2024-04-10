// nextjs api route
// takes in language parameter (text)
// runs back json { under_construction: true }

import type { NextApiRequest, NextApiResponse } from 'next';

export default function Questions(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;
  res.status(200).json({
    course: 'Python',
    module: 'Module 1: Introduction to Python',
    subheading: 'What is Python?',
    questions: [
      {
        question: 'Which of the following is NOT a characteristic of Python?',
        choice1: 'Easy to learn and write',
        choice2: 'Highly dynamic',
        choice3: 'Statically typed',
        correctAnswer: 'choice3',
      },
      {
        question: 'Python is an example of a:',
        choice1: 'Compiled language',
        choice2: 'Interpreted language',
        choice3: 'Low-level language',
        correctAnswer: 'choice2',
      },
      {
        question: 'Which of the following is NOT a data type in Python?',
        choice1: 'Integer',
        choice2: 'String',
        choice3: 'Boolean',
        correctAnswer: 'choice3',
      },
      {
        question: 'Which of the following is the correct syntax to declare a variable in Python?',
        choice1: 'variable = value',
        choice2: 'value = variable',
        choice3: 'def variable = value',
        correctAnswer: 'choice1',
      },
      {
        question: 'Which of the following operators is used for assignment in Python?',
        choice1: '+',
        choice2: '=',
        choice3: '*',
        correctAnswer: 'choice2',
      },
      {
        question: 'What is the purpose of indentation in Python?',
        choice1: 'To separate code blocks',
        choice2: 'To add comments to the code',
        choice3: 'To declare variables',
        correctAnswer: 'choice1',
      },
      {
        question: 'Which of the following is NOT a library in Python?',
        choice1: 'Pandas',
        choice2: 'NumPy',
        choice3: 'Java',
        correctAnswer: 'choice3',
      },
      {
        question: 'What is the purpose of the `print()` function in Python?',
        choice1: 'To display output on the console',
        choice2: 'To save data to a file',
        choice3: 'To create a new variable',
        correctAnswer: 'choice1',
      },
      {
        question: 'Which of the following is the correct syntax for creating a function in Python?',
        choice1: 'def function_name()',
        choice2: 'def function_name',
        choice3: 'function_name =',
        correctAnswer: 'choice1',
      },
      {
        question: 'What is the concept of object-oriented programming?',
        choice1: 'Organizing code into modular units',
        choice2: 'Creating programs based on real-world objects',
        choice3: 'Writing code without any structure',
        correctAnswer: 'choice2',
      },
    ],
  });
}
