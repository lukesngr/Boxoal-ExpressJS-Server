var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');     

var indexRouter = require('./routes/index');
var schedulesRouter = require('./routes/getSchedules');
var createGoalRouter = require('./routes/createGoal');
var createScheduleRouter = require('./routes/createSchedule');
var createTimeboxRouter = require('./routes/createTimebox');
var deleteGoalRouter = require('./routes/deleteGoal');
var deleteScheduleRouter = require('./routes/deleteSchedule');
var deleteTimeboxRouter = require('./routes/deleteTimebox');
var getSchedulesRouter = require('./routes/getSchedules');
var updateGoalRouter = require('./routes/updateGoal');
var updateScheduleRouter = require('./routes/updateSchedule');
var updateTimeboxRouter = require('./routes/updateTimeBox');
var createRecordedTimeboxRouter = require('./routes/createRecordedTimebox');
var oauthcallbackRouter = require('./routes/oauthcallback');
var app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getSchedules', schedulesRouter);
app.use('/createGoal', createGoalRouter);
app.use('/createSchedule', createScheduleRouter);
app.use('/createTimebox', createTimeboxRouter);
app.use('/deleteGoal', deleteGoalRouter);
app.use('/deleteSchedule', deleteScheduleRouter);
app.use('/deleteTimebox', deleteTimeboxRouter);
app.use('/getSchedules', getSchedulesRouter);
app.use('/updateGoal', updateGoalRouter);
app.use('/updateSchedule', updateScheduleRouter);
app.use('/updateTimebox', updateTimeboxRouter);
app.use('/createRecordedTimebox', createRecordedTimeboxRouter);
app.use('/oauthcallback', oauthcallbackRouter);

module.exports = app;
