const db = require("../../utils/databaseConfig");

const getAllDevices = (req, res) => {
  try {
    const deviceKey = req.query.key;
    // Device Detail
    if (req.query.state === "detail") {
      const queryGetDevicesDetail = `SELECT * FROM devices INNER JOIN datas ON devices.deviceKey = datas.deviceKey WHERE devices.deviceKey = '${deviceKey}'`;
      db.query(queryGetDevicesDetail, (err, results) => {
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
            chartSuhuAir.labels.push(result.updatedAt);
            chartSuhuAir.datasets[0].data.push(result.topic1_VALUE);

            // Suhu lingkungan
            chartSuhuLingkungan.labels.push(result.updatedAt);
            chartSuhuLingkungan.datasets[0].data.push(result.topic2_VALUE);

            // TDS
            chartTds.labels.push(result.updatedAt);
            chartTds.datasets[0].data.push(result.topic3_VALUE);
          });

          res.status(200).json({
            lastData: results,
            dataChartSuhuAir: chartSuhuAir,
            dataChartSuhuLingkungan: chartSuhuLingkungan,
            dataChartTds: chartTds,
          });
        } else {
          res.status(404).json({ statusText: "Not Found", message: "Devices not found !" });
        }
      });

      // Device info
    } else if (req.query.state === "info") {
      const queryGetDevicesInfo = `SELECT * FROM devices WHERE deviceKey = '${deviceKey}'`;
      db.query(queryGetDevicesInfo, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ statusText: "Not Found", message: "Devices not found !" });
        }
      });

      // Dashboard
    } else if (req.query.state === "dashboard") {
      const queryGetDeviceDashboardInfo = `SELECT DISTINCT d.deviceName, ds.topic1_VALUE, ds.topic2_VALUE, ds.topic3_VALUE FROM devices d INNER JOIN datas ds ON d.deviceKey = ds.deviceKey`;
      db.query(queryGetDeviceDashboardInfo, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ statusText: "Not Found", message: "Devices not found !" });
        }
      });
    } else if (req.query.state === "deviceList") {
      const queryGetDevicesDashboardInfo = `SELECT deviceKey, deviceName FROM devices LIMIT 10 `;
      db.query(queryGetDevicesDashboardInfo, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ statusText: "Not Found", message: "Devices not found !" });
        }
      });
    }
  } catch (e) {
    res.status(500).json({ statusText: "Not Found", message: "Internal error !" });
  }
};

module.exports = getAllDevices;
