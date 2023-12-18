const patientRoutes = require('./src/routes/patientRoutes');
const encounterRoutes = require('./src/routes/encounterRoutes');
const vitalRoutes = require('./src/routes/vitalRoutes');

app.use('/api/patients', patientRoutes);
app.use('/api/encounters', encounterRoutes);
app.use('/api/vitals', vitalRoutes);