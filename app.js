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

const whitelist = ['http://localhost:3000', 'https://github.com', 'BoxoalApp-1233']; // assuming front-end application is running on localhost port 3000

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS '+origin))
    }
  }
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getSchedules', cors(corsOptions), schedulesRouter);
app.use('/createGoal', cors(corsOptions), createGoalRouter);
app.use('/createSchedule', cors(corsOptions), createScheduleRouter);
app.use('/createTimebox', cors(corsOptions), createTimeboxRouter);
app.use('/deleteGoal', cors(corsOptions), deleteGoalRouter);
app.use('/deleteSchedule', cors(corsOptions), deleteScheduleRouter);
app.use('/deleteTimebox', cors(corsOptions), deleteTimeboxRouter);
app.use('/getSchedules', cors(corsOptions), getSchedulesRouter);
app.use('/updateGoal', cors(corsOptions), updateGoalRouter);
app.use('/updateSchedule', cors(corsOptions), updateScheduleRouter);
app.use('/updateTimeBox', cors(corsOptions), updateTimeboxRouter);
app.use('/createRecordedTimebox', cors(corsOptions), createRecordedTimeboxRouter);
app.use('/oauthcallback', cors(), oauthcallbackRouter);
/*app.use('/getSchedules', schedulesRouter);
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
app.use('/oauthcallback', cors(), oauthcallbackRouter);*/

module.exports = app;
