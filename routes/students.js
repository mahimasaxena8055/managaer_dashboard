const express = require('express');
const router = express.Router();

// Student model
const Students = require('../models/students');


// @route   GET /api/students/
// @desc    Get all students
// @access  Public

router.post('/', (req, res) => 
                 {
                  const empobj = new EmpModel({
                                 empname: req.body.empname,
                                 empemail: req.body.empemail,
                                 empmobile: req.body.empmobile,
                                 empdob: req.body.empdob,
                                 emppass: req.body.emppass,
                                 
                                 });
                                 empobj.save()
                         .then(inserteddocument => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' +'<br\>'+ inserteddocument);
                               })//CLOSE THEN
                         .catch(err =>{
    res.status(500).send({ message: err.message || 'Error in Employee Save '})
                               });
                              }
);
router.post("/", async (req, res) => {
  try {
    // const {name, email, phone, password, cpassword} = req.body;
    const { empname,  empemail, emppassword } = req.body;
    console.log(req.body);
   
    const user = new User({ empname,  empemail, emppassword });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newdata = await Students.create({ empname: req.body.empname, empemail: req.body.empemail, empPass: req.body.empPass });
     res.send({ newdata });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

  router.post("/", (req, res) => {
    console.log(req.body.email)
    console.log(req.body.password)
    User.find({ "email": req.body.email, "password": req.body.password })
      .then(getsearchdocument => {
        if (getsearchdocument.length > 0) {
          res.send(getsearchdocument);
        }
        else {
          return res.status(404).send({ message: "Note not found" });
        }
      }) //CLOSE THEN
      .catch(err => {
        return res.status(500).send({ message: "DB Problem..Error in Retriving with id " });
      })//CLOSE CATCH
  });

  
//  .....students details.......                                
router.get('/', async (req, res) => {
  try {
    const students = await Students.find({});
    res.send({ students })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

   
// @route   GET /api/students/:id
// @desc    Get a specific student
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' });
  }
});

// @route   POST /api/students/
// @desc    Create a student
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newStudent = await Students.create({ name: req.body.name, email: req.body.email, Project: req.body.Project });
     res.send({ newStudent });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/students/:id
// @desc    Update a student
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The student was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/students/:id
// @desc    Delete a student
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
     res.send({ message: 'The student was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;