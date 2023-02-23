const db = require("../../utils/databaseConfig");

const getAllDevices = (req, res) => {
  try {
    const deviceKey = req.query.key;

    // Dashboard
    if (req.query.state === "dashboard") {
      const queryGetDevicesDashboard = `SELECT * FROM devices INNER JOIN datas ON devices.deviceKey = datas.deviceKey WHERE devices.deviceKey = '${deviceKey}'`;
      db.query(queryGetDevicesDashboard, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          const chartSuhuAir = {
            labels: [],
            datasets: [
              {
                label: "by °Celcius",
                data: [],
                backgroundColor: "#0265ff",
              },
            ],
          };
          const chartSuhuLingkungan = {
            labels: [],
            datasets: [
              {
                label: "by °Celcius",
                data: [],
                backgroundColor: "#ffa500",
              },
            ],
          };
          const chartTds = {
            labels: [],
            datasets: [
              {
                label: "by PPM",
                data: [],
                backgroundColor: "#009b97",
              },
            ],
          };
          results.forEach((result) => {
            // Suhu air
            chartSuhuAir.labels.push(result.topic1);
            chartSuhuAir.datasets[0].data.push(result.topic1_VALUE);

            // Suhu lingkungan
            chartSuhuLingkungan.labels.push(result.topic2);
            chartSuhuLingkungan.datasets[0].data.push(result.topic2_VALUE);

            // TDS
            chartTds.labels.push(result.topic3);
            chartTds.datasets[0].data.push(result.topic3_VALUE);
          });

          res.json({
            lastData: results,
            dataChartSuhuAir: chartSuhuAir,
            dataChartSuhuLingkungan: chartSuhuLingkungan,
            dataChartTds: chartTds,
          });
        } else {
          res.json({ statusText: "ERROR", message: "Devices not found !" });
        }
      });

      // Device info
    } else if (req.query.state === "info") {
      const queryGetDevices = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
      db.query(queryGetDevices, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.json(results);
        } else {
          res.json({ statusText: "ERROR", message: "Devices not found !" });
        }
      });
    }
  } catch (e) {
    res.json({ statusText: "ERROR", message: "Something wrong !" });
  }
};

module.exports = getAllDevices;
