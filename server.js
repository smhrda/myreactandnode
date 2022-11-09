const express = require('express');
const app = express();
const router = require('./router/router.js');


// (1) 경로 처리를 하는 모듈 : path
// --> 서로 다른 운영체제에서도 제대로 동작시키기 위해 사용하는 모듈
const path = require('path');

// (2) 외부에 있는 정보들을 요청할 때 사용하는 모듈 : cors
// --> 데이터를 주고받을 때 필수적으로 등록할 것
const cors = require('cors');

// express.static() : 해당 경로 안의 정적 파일을 사용하겠다
// __dirname(현재 내가 있는 곳) + react-project + build 폴더 안의 파일을 사용   <- join으로 모두 더함
app.use(express.static(path.join(__dirname, 'react-project', 'build')));

// 값을 주고받을 때 필요함
app.use(cors())

// json 형식 사용
app.use(express.json())


app.use(router);
app.listen(3001);