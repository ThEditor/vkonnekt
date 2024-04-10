// nextjs api route
// takes in language parameter (text)
// runs back json { under_construction: true }

import type { NextApiRequest, NextApiResponse } from 'next';

export default function Units(req: NextApiRequest, res: NextApiResponse) {
  const { language } = req.query;
  res.status(200).json({
    modules: [
      {
        title: 'Module 1: Python Basics',
        subheadings: [
          'Introduction to Python',
          'Variables and Data Types',
          'Control Flow',
          'Functions',
          'Modules and Packages',
        ],
      },
      {
        title: 'Module 2: Data Structures',
        subheadings: ['Lists', 'Tuples', 'Sets', 'Dictionaries', 'Advanced Data Structures'],
      },
      {
        title: 'Module 3: Object-Oriented Programming',
        subheadings: [
          'Classes and Objects',
          'Inheritance',
          'Polymorphism',
          'Abstract Classes',
          'Interfaces',
        ],
      },
      {
        title: 'Module 4: File Handling',
        subheadings: [
          'Reading and Writing Files',
          'File Manipulation',
          'Error Handling',
          'File Storage APIs',
          'Cloud Storage',
        ],
      },
      {
        title: 'Module 5: Databases',
        subheadings: [
          'SQLAlchemy',
          'MongoDB',
          'Redis',
          'Database Design',
          'Object-Relational Mapping',
        ],
      },
      {
        title: 'Module 6: Web Development',
        subheadings: ['Flask', 'Django', 'RESTful APIs', 'Web Security', 'Deployment'],
      },
      {
        title: 'Module 7: Data Science and Machine Learning',
        subheadings: [
          'NumPy',
          'Pandas',
          'scikit-learn',
          'Machine Learning Algorithms',
          'Data Visualization',
        ],
      },
      {
        title: 'Module 8: Project Implementation',
        subheadings: [
          'Project Planning',
          'Software Design',
          'Code Implementation',
          'Testing and Debugging',
          'Project Maintenance',
        ],
      },
    ],
  });
}
