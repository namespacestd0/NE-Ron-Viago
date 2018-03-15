import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "waylon-dalton",
    title: "Waylon Dalton",
    watchHref: "Enrolled",
    authorId: "Read-PPT with Issac Chu (No Phd)",
    length: "(251)546-9442",
    category: "10"
  },
  {
    id: "justine-henderson",
    title: "Justine Henderson",
    watchHref: "Enrolled",
    authorId: "Read-PPT with Issac Chu (No Phd)",
    length: "(125)546-4478",
    category: "6"
  },
  {
    id: "abdullah-lang",
    title: "Abdullah Lang",
    watchHref: "Enroll",
    authorId: "Learning React and Redux with YouTube",
    length: "(949)569-4371",
    category: "5"
  },
  {
    id: "marcus-cruz",
    title: "Marcus Cruz",
    watchHref: "Enrolled",
    authorId: "Stand-up Comody with Ellen Degeneres",
    length: "(671)925-1352",
    category: "7"
  },
  {
    id: "thalia-cobb",
    title: "Thalia Cobb",
    watchHref: "Enroll",
    authorId: "Stand-up Comody with Ellen Degeneres",
    length: "(226)906-2721",
    category: "5"
  },
  {
    id: "mathias-little",
    title: "Mathias Little",
    watchHref: "Enroll",
    authorId: "Learning React and Redux with YouTube",
    length: "(630)446-8851",
    category: "3"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = "Enroll";
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          return course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
