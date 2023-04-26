const authRouter = require('./auth');
const userRouter = require('./users');
const roleRouter = require('./roles');
const locationRouter = require('./locations');
const deviceTypeRouter = require('./device-types');
const brandRouter = require('./brands');
const equipmentStatusRouter = require('./equipment-status');
const equipmentRouter = require('./equipments');
const requestStatusRouter = require('./request-status');
const requestTypeRouter = require('./request-types');
const requestRouter = require('./requests');
const borrowingEquipmentRouter = require('./borrowing-equipments');

function route(app) {
    //api users
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);

    app.use('/api/roles', roleRouter);
    app.use('/api/locations', locationRouter);
    app.use('/api/device-types', deviceTypeRouter);
    app.use('/api/brands', brandRouter);
    app.use('/api/equipment-status', equipmentStatusRouter);
    app.use('/api/equipments', equipmentRouter);
    app.use('/api/request-status', requestStatusRouter);
    app.use('/api/request-types', requestTypeRouter);
    app.use('/api/requests', requestRouter);
    app.use('/api/borrowing-equipments', borrowingEquipmentRouter);

    app.use('/', function (req, res) {
        res.send('Hello!!!');
    });
}

module.exports = route;
