const employees = [
  {
    id: 1,
    firstName: "Prakash",
    email: "a@b.d",
    password: "123",
    tasks: [
      {
        title: "Develop Login Feature",
        description:
          "Implement user authentication and login functionality using secure methods.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test Payment Gateway",
        description:
          "Perform end-to-end testing of the payment gateway integration.",
        date: "2025-01-13",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prepare API Documentation",
        description:
          "Write comprehensive API documentation for developers and stakeholders.",
        date: "2025-01-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Santosh",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Build Dashboard UI",
        description:
          "Design and develop the user interface for the analytics dashboard.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Perform Unit Testing",
        description:
          "Write and execute unit tests for the newly added features.",
        date: "2025-01-13",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Binita",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Code Refactoring",
        description:
          "Improve the readability and maintainability of the codebase.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Design Mockups",
        description: "Revise the design mockups based on client feedback.",
        date: "2025-01-13",
        category: "Design",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Resolve Deployment Issue",
        description:
          "Investigate and fix issues preventing successful deployment.",
        date: "2025-01-14",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Write Test Cases",
        description: "Develop detailed test cases for functional testing.",
        date: "2025-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Manisha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement Backend API",
        description: "Create and deploy RESTful APIs for data management.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Redesign Landing Page",
        description:
          "Enhance the aesthetics and usability of the website's landing page.",
        date: "2025-01-13",
        category: "Design",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Documentation Errors",
        description:
          "Review and correct inaccuracies in project documentation.",
        date: "2025-01-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Perform Regression Testing",
        description:
          "Ensure recent changes haven’t negatively affected existing functionality.",
        date: "2025-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Monitor Deployment Logs",
        description:
          "Analyze deployment logs to identify any warnings or errors.",
        date: "2025-01-16",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Anita",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Develop Notification System",
        description:
          "Implement a system for sending email and SMS notifications.",
        date: "2025-01-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Critical Bug",
        description:
          "Address the critical bug in the user registration module.",
        date: "2025-01-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare Deployment Strategy",
        description:
          "Draft a strategy for deploying the new application version.",
        date: "2025-01-14",
        category: "Deployment",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Prashrijan",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return { employeesData, adminData };
};
