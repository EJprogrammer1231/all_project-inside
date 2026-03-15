const courses = [
  { title: "JavaScript Basics", students: 120, price: 50 },
  { title: "React Mastery", students: 80, price: 120 },
  { title: "CSS Bootcamp", students: 200, price: 40 },
  { title: "Node.js API", students: 60, price: 100 },
  { title: "HTML Fundamentals", students: 300, price: 20 }
];  

const revenuePercoure = (courses) => {
  for (let i = 0; i < courses.length; i++) {
     let revenueTotal = 0;
    revenueTotal += courses[i].students * courses[i].price;
    console.log(courses[i].title + " - " + revenueTotal);
  }

  const expensiveCourse = courses.filter((most) => {
    return most.price > 50
  });
  console.table(expensiveCourse);

  const getname = courses.map((gettitle) => {
    return gettitle.title;
  });
  console.table(getname);

  const totalstudents = courses.reduce((total,std) => {
    return total + std.students;
  },0);
  console.log(totalstudents);
};

revenuePercoure(courses);