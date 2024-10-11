const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // Thêm thời gian chờ 10 giây trước khi gửi phản hồi
    setTimeout(() => {
        console.log('Hello, World after 10 seconds');
        res.send('Hello, World after 10 seconds delay!');
    }, 1000); // 10000 milliseconds = 10 seconds
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
