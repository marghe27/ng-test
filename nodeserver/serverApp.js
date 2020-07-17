var exp = require('express');

var app = exp();

var corsClient = require('cors');
app.use(corsClient());

var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// array di projects
var projects = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 1, 31),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 3, 31),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: []
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet.',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: []
    },
  ];

// array di Tasks
var tasks = [
    {
    id: 1,
    name: "Task 1",
    start: new Date(2020, 01, 15),
    duration: 3,
    isBillable: true,
    },
    {
    id: 2,
    name: "Task 2",
    start: new Date(2020, 02, 15),
    duration: 4,
    isBillable: true,
    },
    {
    id: 3,
    name: "Task 3",
    start: new Date(2020, 03, 15),
    duration: 2,
    isBillable: false,
    }
] 


// visualizza tutti i progetti

app.get('/projects', function(req, res){
  console.log("/projects")
    return res.json(projects);
});

app.get('/projects/tasks', function(req, res){
    console.log("/projects/tasks")
      return res.json(tasks);
  });




const port = 3002;
app.listen(port, ()=>{
    console.log(`Server listen on port ${port}`);
    });


