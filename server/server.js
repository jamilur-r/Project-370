const db = require('mysql');
const express = require('express');
const body = require('body-parser');
const cors = require('cors');

var app = express();
app.use(body.json());
app.use(cors());

var conn = db.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'obe_db',
      port: '3306'
});

conn.connect((err)=>{
      if(!err){
            console.log("Connected");
      }else{
            console.log("Error connecting" +JSON.stringify(err, undefined, 2));
      }
});

//API port 
app.listen(3001, () => console.log(" Server Running Perfectly"));


// View All 
app.get('/course', (req, res)=>{
      conn.query('SELECT * FROM course', (err, rows, fields)=>{
            if(!err){
                  return(res.json({data: rows}));
            }else{
                  console.log(err);
            }
      });
});

//Insert

app.get('/course/insert/:course_id&&:course_title&&:faculty_ini', (req, res)=>{
      conn.query('INSERT INTO course (course_id, course_title, faculty_ini) VALUES(?, ?, ?)', [req.params.course_id, req.params.course_title, req.params.faculty_ini], (err, result)=>{
            if(!err){
                  res.send("Data Added");
            }else{
                  console.log(err);
            }
      });
});

app.get('/course/delete/:course_id&&:faculty_ini', (req, res)=>{
      conn.query("DELETE FROM course WHERE course_id = ? AND faculty_ini = ?", [req.params.course_id, req.params.faculty_ini], (err, result)=>{
            if(!err){
                  res.send("DATA DELETED");
                  console.log(result)
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/:course_id&&:faculty_ini", (req, res)=>{
      conn.query("SELECT * FROM course_details WHERE course_id = ? AND faculty_ini = ?", [req.params.course_id, req.params.faculty_ini], (err, rows, fields)=>{
            if(!err){
                  return(
                        res.json({data: rows})
                  );
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/carry/:course_id&&:faculty_ini", (req, res)=>{
      conn.query("SELECT * FROM carry WHERE course_id = ? AND faculty_ini = ?", [req.params.course_id, req.params.faculty_ini], (err, rows, fields)=>{
            if(!err){
                  return(
                        res.json({data: rows})
                  );
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/percent/:course_id&&:faculty_ini", (req, res)=>{
      conn.query("SELECT * FROM percentage WHERE course_id = ? AND faculty_ini = ?", [req.params.course_id, req.params.faculty_ini], (err, rows, fields)=>{
            if(!err){
                  return(
                        res.json({data: rows})
                  );
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/insert/:course_id&&:faculty_ini&&:co&&:co_des&&:quiz&&:homework&&:assignment&&:mid_term&&:project&&:lab&&:final", (req, res)=>{
      conn.query("INSERT INTO course_details VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.params.course_id, req.params.faculty_ini, req.params.co, req.params.co_des, req.params.quiz, req.params.homework, req.params.assignment, req.params.mid_term, req.params.project, req.params.lab, req.params.final], (err, result)=>{
            if(!err){
                  res.send("Data Added");
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/carry/insert/:course_id&&:faculty_ini&&:quiz&&:homework&&:assignment&&:mid_term&&:project&&:lab&&:final", (req, res)=>{
      conn.query("INSERT INTO carry VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.params.course_id, req.params.faculty_ini, req.params.quiz, req.params.homework, req.params.assignment, req.params.mid_term, req.params.project, req.params.lab, req.params.final], (err, result)=>{
            if(!err){
                  res.send("Data Added");
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/percent/insert/:course_id&&:faculty_ini&&:quiz&&:homework&&:assignment&&:mid_term&&:project&&:lab&&:final", (req, res)=>{
      conn.query("INSERT INTO percentage VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.params.course_id, req.params.faculty_ini, req.params.quiz, req.params.homework, req.params.assignment, req.params.mid_term, req.params.project, req.params.lab, req.params.final], (err, result)=>{
            if(!err){
                  res.send("Data Added");
            }else{
                  console.log(err);
            }
      })
})

app.get("/co/delete/:course_id&&:faculty_ini", (req, res)=>{
      conn.query("DELETE FROM course_details WHERE course_id = ? AND faculty_ini = ?", [req.params.course_id, req.params.faculty_ini], (err, result)=>{
            if(!err){
                  res.send("Data Deleted");
            }else{
                  console.log(err);
            }
      })
})

app.get("/per/:course_id&&:faculty_ini&&:course_id&&:faculty_ini", (req, res)=>{
      conn.query("SELECT ( course_details.quiz * percentage.quiz + course_details.homework * percentage.homework + course_details.assignment * percentage.assignment + course_details.mid_term * percentage.mid_term + course_details.project * percentage.project + course_details.lab * percentage.lab + course_details.final * percentage.final ) / 100 AS per FROM course_details, percentage WHERE course_details.course_id = ? AND course_details.faculty_ini = ? AND percentage.course_id = ? AND percentage.faculty_ini = ?",[req.params.course_id, req.params.faculty_ini, req.params.course_id, req.params.faculty_ini], (err, rows, fields)=>{
            if(!err){
                  return(
                        res.json({data: rows})
                  );
            }else{
                  console.log(err);
            }
      })
})