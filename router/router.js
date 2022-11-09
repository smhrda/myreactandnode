const express = require('express');
const router = express.Router();

// DB 세팅
const mysql = require('mysql');

let conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "smhrd12",
    port: "3306",
    database: "nodejs_db"
});

const path = require('path')

// joinData 라우터
router.post('/joinData', (req, res) => {
    console.log('joindata라우터')
    console.log(req.body.user)

    let sql = "insert into member values (?,?,3)"
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows) => {
        if(rows){
            console.log('회원가입 성공')
            res.json({ // json 파일로 응답하기
                result : 'success'
            })
        }else{
            console.log('회원가입 실패')
            res.json({ 
                result : 'fail'
            })
        }
        res.end() // --> 여기서 끝내줘야 Join.js의 .then/catch가 실행됨
    })
})

// setData 라우터
router.post('/setData', (req, res) => {
    console.log('setData Router')
    //console.log(req.body.user.id);
    let sql = 'select * from member where id=? and pw=?'
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows) => {
    //console.log(rows);
        if(rows.length>0){
            console.log("로그인 성공")
            res.json({ 
                result : 'loginSuccess'
            })
        }else{
            console.log('로그인 실패')
            res.json({ 
                result : 'loginFail'
            })
        }
        res.end()
    })
})








router.get('*', (req, res) => { // '/' 대신 '*'을 사용하면 리액트가 라우터의 전권을 가지게 됨
    console.log('happy hacking~')
    res.sendFile(path.join(__dirname, '..', 'react-project', 'build', 'index.html'))
});

module.exports = router